import styled from "styled-components";
import { book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv } from "../../utils/Icons";
import Button from "../Button/Button";
import { axios } from "axios";

function IncomeItem({
	id,
	title,
	amount,
	date,
	category,
	description,
	deleteItem,
	indicatorColor,
	type,
}) {

	const categoryIcon = () => {
		switch(category){
			case 'salary':
				return money
			case 'freelancing':
				return freelance
			case 'investments':
				return stocks
			case 'bank':
				return card
			case 'other':
				return piggy
			default:
				return ''
		}
	}

	const expenseCatIcon = () => {
		switch (category) {
				case 'education':
						return book;
				case 'groceries':
						return food;
				case 'health':
						return medical;
				case 'subscriptions':
						return tv;
				case 'takeaways':
						return takeaway;
				case 'clothing':
						return clothing;
				case 'travelling':
						return freelance;
				case 'other':
						return circle;
				default:
						return ''
		}
}


	return (
		<IncomeItemStyled indicator={indicatorColor}>
			<div className="icon">
				{type === 'expense' ? expenseCatIcon() : categoryIcon()}
			</div>
			<div className="content">
				<h4>{title}</h4>
				<div className="inner-content">
					<div className="text">
						<p>
							{dollar} {amount}
						</p>
						<p>
							{calender} {date}
						</p>
						<p>
							{comment}
							{description}
						</p>
					</div>
					<div className="btn-con">
						<Button
							icon={trash}
							bPad={"0.5rem"}
							bRad={"100%"}
							bg={"var(--color-red)"}
							color={"var(--color-red-light)"}
							bcolor={"var(--color-red-light)"}
							iColor={"#fff"}
							hColor={"var(--color-green)"}
							onClick={() => deleteItem(id)}
						/>
					</div>
				</div>
			</div>
		</IncomeItemStyled>
	);
}

const IncomeItemStyled = styled.div`
	background: var(--primary-color);
	border: 1px solid #33363f;
	border-radius: 0.5rem;
	padding: 0.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 100%;
	color: var(--color-white);
	.icon {
		width: 5vh;
		height: 5vh;
		border-radius: 10vh;
		background: #33363f;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0.5px solid var(--color-white-dark);
		color: 0.5px solid var(--color-white-dark);
		i {
			aspect-ratio: 1 / 1;
		}
	}
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		h4 {
			padding-left: 0rem;
			position: relative;
			&::before {
				content: "";
				position: absolute;
				left: -1rem;
				top: 50%;
				transform: translateY(-50%);
				width: 0.5rem;
				height: 0.5rem;
				border-radius: 50%;
				background: ${(props) => props.indicator};
			}
		}

		.inner-content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.text {
				display: flex;
				align-items: center;
				gap: 1rem;
				flex-grow: 1;
				p {
					display: flex;
					font-size: 0.75rem;
					align-items: center;
					gap: 0.5rem;
					color: var(--color-white);
					opacity: 0.8;
					flex-grow: 1;
				}
			}
		}
	}
`;
export default IncomeItem;
