import React, {useState} from 'react';

import './Form.css';

const Form = ({ data, currentElementId, handleAddElement  }) => {

	const [input, setInput] = useState('')
	

	const handleSubmit = (evt) => {
		evt.preventDefault()
		handleAddElement(input)
		setInput('')
	}

	const handleChange = (evt) => {
		setInput(evt.currentTarget.value)
	}

	const handleKeyDown = (evt) => {
		if (evt === "Enter") {
			handleSubmit(evt)
		}
	}

	return (
		<div className='form'>
			<p className='form__text'>Добавить фонд:</p>
			<form className='form__container' onSubmit={handleSubmit}>
				<input 
				className='form__input'
				value={input} 
				type='text'
				placeholder='Введите название фонда' 
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				/>
				<button
				className='form__button'>Добавить</button>
			</form>
		</div>
	)
}

export default Form;