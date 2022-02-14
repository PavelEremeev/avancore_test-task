import React from 'react';


import './Select.css';


const Select = ({ data, currentElementId, setCurrentElementId  }) => {

	console.log(currentElementId)


	const handleChangeElement = (evt) => {
		setCurrentElementId(evt.target.value)
	}

	return (
		<div className='select'>
			<p className='select__text'>Наименование фонда:</p>
			{/* <select 
			className='select__container'> */}
			<select value={currentElementId}  onChange={handleChangeElement} className='select__container'>
				{<option  className='select__option'>- - Выберите значение - -</option>}
				{data.map((element) => <option className='select__option'
					value={element.entryPointDocument}
					// onClick={() => onElementClick(element)}
					key={element.entryPointDocument}>
					{element.description}
				</option>)}
			</select>
		</div>
	)
}

export default Select;