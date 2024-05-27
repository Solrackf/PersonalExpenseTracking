import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";
import { filter } from "../../utils/Icons";

function Income() {
	const { addIncome, incomes, getIncomes, deleteIncome } = useGlobalContext();

	useEffect(() => {
		getIncomes();
	}, []);

	return (
		<IncomeStyled>
			<InnerLayout>
				<section className="sectionInformation">
					<section className="section__name">
						<h3>Ingresos</h3>
						<p className="sectionDescription">Aquí podrás ver tus ingresos, añadir ingresos y eliminarlos</p>
					</section>
          {/* <section className="filter__section">
            <h3>Gastos Totales:</h3> 
						<span>${totalExpenses()}</span>
          </section> */}
				</section>
				<div className="income__section">
					<div className="form-container">
						<Form />
					</div>
					<div className="incomes">
						{incomes.map((income) => {
							const { _id, title, amount, date, category, description, type } =
								income;
							return (
								<IncomeItem
									key={_id}
									id={_id}
									title={title}
									description={description}
									amount={amount}
									date={date}
									type={type}
									category={category}
									indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
								/>
							);
						})}
					</div>
				</div>
			</InnerLayout>
		</IncomeStyled>
	);
}

const IncomeStyled = styled.div`
	grid-area: 4 / 2 / 20 / 20;
	display: flex;
	overflow: auto;
  .incomes{
    width: 60%;
    background: var(--secondary-color);
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    overflow: auto;
  }
	.income__section {
		display: flex;
		gap: 5vw;
    flex-grow: 1;
    overflow: hidden;
    width: 100%;
	}
	.sectionInformation {
		width: 100%;
		height: 5vh;
		display: flex;
		align-items: center;
		justify-content: space-between;
    .filter__section{
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-white-dark);
      color: var(--color-blue);
      border: 1px solid var(--color-blue);
      border-radius: 0.5rem;
      height: 100%;
      aspect-ratio: 1 / 1;
      cursor: pointer;
    }
    .section__name{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      height: 100%;
      .sectionDescription{
        font-size: 0.65rem;
      }
    }
	}
  .form-container{
    width: 40%;

  }
`;

export default Income;
