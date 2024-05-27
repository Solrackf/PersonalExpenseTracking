import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";

function History() {
	const { transactionHistory } = useGlobalContext();

	const [...history] = transactionHistory();

	return (
		<HistoryStyled>
			<h2 className="text__700">Historial Reciente</h2>
			{history.map((item) => {
				const { _id, title, amount, type } = item;
				return (
					<div key={_id} className="history-item">
						<p
							style={{
								color: type === "expense" ? "var(--color-red-light)" : "var(--color-green-light)",
							}}
						>
							{title}
						</p>

						<p
							style={{
								color: type === "expense" ? "var(--color-red-light)" : "var(--color-green-light)",
							}}
						>
							{type === "expense"
								? `-${amount <= 0 ? 0 : amount}`
								: `+${amount <= 0 ? 0 : amount}`}
						</p>
					</div>
				);
			})}
		</HistoryStyled>
	);
}

const HistoryStyled = styled.div`
  display: flex;
  background: var(--secondary-color);
  padding: 1.5rem 1.75rem;
	flex-direction: column;
	gap: 1.25rem;
  border-radius: 0.75rem;
	height: 55%;
	max-height: 55%;
	overflow: scroll;
	h2{
		position: sticky;
		top: 0;
	}
	.history-item {
    padding: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export default History;
