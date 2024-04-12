import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function ExpenseForm() {
    const {addExpense, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Título de gasto"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Monto de gasto'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Ingresa la fecha'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Selecciona una categoría</option>
                    <option value="education">Educación</option>
                    <option value="groceries">Paquetes</option>
                    <option value="health">Salud</option>
                    <option value="subscriptions">Suscripciones</option>
                    <option value="takeaways">Domicilios</option>
                    <option value="clothing">Vestimenta</option>  
                    <option value="travelling">Viajes</option>  
                    <option value="other">Otros</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Añade una descripción' id="description" cols="30" rows="6" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Añadie Gasto'}
                    icon={plus}
                    bPad={'.75rem 1.25rem'}
                    bRad={'0.5rem'}
                    bg={'var(--primary-color'}
                    color={'#D5D5E2'}
                />
            </div>
        </ExpenseFormStyled>
    )
}


const ExpenseFormStyled = styled.form`
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
export default ExpenseForm