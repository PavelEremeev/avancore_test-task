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
			<p className='form__text'>Наименование фонда:</p>
			<form onSubmit={handleSubmit}>
				<input 
				value={input} 
				type='text'
				placeholder='Введите название фонда' 
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				/>
				<button>Добавить</button>
			</form>
		</div>
	)
}

export default Form;