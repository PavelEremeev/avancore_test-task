import React from 'react';


import './Select.css';


const Select = ({ data, currentElementId, onChange  }) => {

	console.log(currentElementId)



	return (
		<div className='select'>
			<p className='select__text'>Наименование фонда:</p>
			<select value={currentElementId}  onChange={onChange} className='select__container'>
				{<option  className='select__option'>- - Выберите значение - -</option>}
				{data.map((element) => <option className='select__option'
					value={element.entryPointDocument}
					key={element.entryPointDocument}>
					{element.description}
				</option>)}
			</select>
		</div>
	)
}

export default Select;