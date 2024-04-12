import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

const Form = () => {
  const {addIncome, error, setError} = useGlobalContext()
	const [inputState, setInputState] = useState({
		title: "",
		amount: "",
		date: "",
		category: "",
		description: "",
	});

	const { title, amount, date, category, description } = inputState;

	const handleInput = (name) => (e) => {
		setInputState({ ...inputState, [name]: e.target.value });
    setError('')
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addIncome(inputState);
		setInputState({
			title: "",
			amount: "",
			date: "",
			category: "",
			description: "",
		});
	};

	return (
		<FormStyled onSubmit={handleSubmit}>
      {error && <p className='error'>{error}</p>}
			<div className="input-control">
				<input
					type="text"
					value={title}
					name={"title"}
          id="title"
					placeholder="Titulo de ingreso"
					onChange={handleInput("title")}
				/>
			</div>
			<div className="input-control">
				<input
					value={amount}
					type="text"
					name={"amount"}
          id="amount"
					placeholder={"Monto de ingreso"}
					onChange={handleInput("amount")}
				/>
			</div>
			<div className="input-control">
				<DatePicker
					id="date"
					placeholderText="Ingresa la fecha"
					selected={date}
					dateFormat="dd/MM/yyyy"
					onChange={(date) => {
						setInputState({ ...inputState, date: date });
					}}
				/>
			</div>
			<div className="selects input-control">
				<select
					required
					value={category}
					name="category"
					id="category"
					onChange={handleInput("category")}
				>
					<option value="" disabled>
						Selecciona una opción
					</option>
					<option value="salary">Salario</option>
					<option value="freelancing">Freelance</option>
					<option value="investments">Inversiones</option>
					<option value="bank">Transferencia bancaria</option>
					<option value="other">Otro</option>
				</select>
			</div>
			<div className="input-control">
				<textarea
					name="description"
					value={description}
					placeholder="Añade una descripción"
					id="description"
					cols="30"
					rows="6"
					onChange={handleInput("description")}
				></textarea>
			</div>
			<div className="submit-btn">
				<Button
					name={"Añadir Ingreso"}
					icon={plus}
					bPad={".75rem 1.25rem"}
					bRad={"0.5rem"}
					bg={"var(--primary-color)"}
					color={"#D5D5E2"}
				/>
			</div>
		</FormStyled>
	);
};

const FormStyled = styled.form`
  width: 100%;
	height: 100%;
  background: var(--secondary-color);
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
	.react-datepicker-wrapper{
		width: 100%;
	}
  input, select, textarea{
    background: var(--primary-color);
    width: 100%;
    border: none;
    color: #D5D5E2;
    padding: 0.5rem 1.25rem 0.5rem 0.5rem;
    border-radius: 0.35rem;
    outline: none;
    font-family: "Poppins", sans-serif;
  }
  input:active,input:focus, select:active, select:focus, textarea:active, textarea:focus{
		outline: 1px solid #33363F;
  }
  input::placeholder{
  }
  select:focus{
    background: var(--primary-color);
    color: #D5D5E2;
  }
  .submit-btn{
    button{
      border: none;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
      &:hover{
        color: var(--color-white-dark);
        background: var(--secondary-color);
        outline: 1px solid var(--color-white);
        cursor: pointer;
      }
    }
  }
`

export default Form;
