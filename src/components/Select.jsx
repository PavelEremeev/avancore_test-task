import React from 'react';


import './Select.css';

const Select = ({ data }) => {

	return (
		<div className='select'>
			<p className='select__text'>Наименование фонда:</p>
			<select className='select__container'>
				<option className='select__option'>- - Выберите значение - -</option>
				{data.map((element, i) => <option className='select__option'
					value={element.entryPointDocument}
					key={i}>{element.description}
				</option>)}
			</select>
		</div>
	)
}

export default Select;