import React from 'react';


import './Select.css';

const Select = ({ data, onElementClick, currentElementId  }) => {

	console.log(currentElementId)

	return (
		<div className='select'>
			<p className='select__text'>Наименование фонда:</p>
			{/* <select 
			className='select__container'> */}
			<select value={currentElementId} onChange={() => onElementClick(element)} className='select__container'>
				{<option  className='select__option'>- - Выберите значение - -</option>}
				{data.map((element) => <option className='select__option'
					value={element.entryPointDocument}
					key={element.entryPointDocument}>{element.description}

				</option>)}
			</select>
		</div>
	)
}

export default Select;