import React from "react";
import {
	Chart as ChartJs,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";

ChartJs.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
);

function Chart() {
	const { incomes, expenses } = useGlobalContext();

	const data = {
		labels: incomes.map((inc) => {
			const { date } = inc;
			return dateFormat(date);
		}),
		datasets: [
			{
				label: "Ingresos",
				data: [
					...incomes.map((income) => {
						const { amount } = income;
						return amount;
					}),
				],
				backgroundColor: '#B5F561',
				tension: 0.2,
			},
			{
				label: "Gastos",
				data: [
					...expenses.map((expense) => {
						const { amount } = expense;
						return amount;
					}),
				],
				backgroundColor: '#FF6E66',
				tension: 0.2,
			},
		],
	};

	return (
		<ChartStyled>
			<Line data={data}  />
		</ChartStyled>
	);
}

const ChartStyled = styled.div`
width: 100%;
	background: var(--secondary-color);
	padding: 1.5rem 1.75rem;
	border-radius: 0.75rem;
	height: fit-content;
`;

export default Chart;
