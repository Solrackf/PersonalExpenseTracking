import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { dollar } from "../../utils/Icons";
import Chart from "../Chart/Chart";

function Dashboard() {
	const {
		totalExpenses,
		incomes,
		expenses,
		totalIncome,
		totalBalance,
		getIncomes,
		getExpenses,
	} = useGlobalContext();

	useEffect(() => {
		getIncomes();
		getExpenses();
	}, []);

	return (
		<DashboardStyled>
			<h1 className="text__900">Dashboard</h1>
			<div className="stats-con">
				<div className="chart-con">
					<Chart />
					<div className="amount-con">
						<div className="income">
							<h2 className="text__500">Ingresos Totales</h2>
							<p className="text__300">
								{dollar} {totalIncome()}
							</p>
						</div>
						<div className="expense">
							<h2 className="text__500">Gastos Totales</h2>
							<p className="text__300">
								{dollar} {totalExpenses()}
							</p>
						</div>
						<div className="balance">
							<h2 className="text__500">Balance Total</h2>
							<p className="text__300">
								{dollar} {totalBalance()}
							</p>
						</div>
					</div>
				</div>
				<div className="history-con">
					<History />
					<div className="salaryTitle__container">
            <h2 className="salary-title text__500">
              Min <span className="text__600"> Ingresos </span> Max
            </h2>
            <div className="salary-item">
              <p className="text__200">${Math.min(...incomes.map((item) => item.amount))}</p>
              <p className="text__200">${Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
          </div>
					<div className="salaryTitle__container">
            <h2 className="salary-title text__500">
              Min <span className="text__600"> Gastos </span> Max
            </h2>
            <div className="salary-item">
              <p className="text__200">${Math.min(...expenses.map((item) => item.amount))}</p>
              <p className="text__200">${Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
				</div>
			</div>
		</DashboardStyled>
	);
}

const DashboardStyled = styled.div`
	grid-area: 2 / 2 / 20 / 20;
  line-height: 1;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  h1 {
    grid-area: 2 / 2 / 3 / 20;
    width: 100%;
  }
	.stats-con {
    grid-area: 4 / 2 / 20 / 20;
    display: flex;
    gap: 2.5vw;
    height: 100%;
		.chart-con {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      height: 100%;
			.amount-con {
        display: flex;
        justify-content: space-between;
        gap: 1.5rem;
        h2{
          font-size: 1rem;
          text-align: center;
        }
				.income,
				.expense {
				}
				.income,
				.expense,
				.balance {
          transition: all 1s;
          width: fit-content;
          height: fit-content;
          padding: 1rem 1.25rem;
          border-radius: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
          background: linear-gradient(145deg, #212029, #1c1b22);
          box-shadow:  8px  8px  16px rgba(22, 21, 27, 0.5),
                      -8px -8px 16px rgba(40, 39, 49, 0.1);
                      p {
                        font-size: 0.85rem;
                      }
                    }
        .income:hover,
        .expense:hover,
        .balance:hover {
          background: linear-gradient(145deg, #1c1b22, #212029);
          box-shadow:  -8px -8px 16px rgba(22, 21, 27, 0.5),
                        8px  8px 16px rgba(40, 39, 49, 0.1);
        }
				.balance {
					p {
            line-height: 1;
					}
				}
			}
		}

		.history-con {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
			h2 {
			}
      .salaryTitle__container{
        background: var(--secondary-color);
        padding: 1.25rem 1.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        border-radius: 0.75rem;
      }
			.salary-title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-size: 0.95rem;
				span {
          font-size: 1.25rem;
				}
			}
			.salary-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
				p {
          font-size: 0.9rem;
				}
			}
		}
	}
`;

export default Dashboard;
