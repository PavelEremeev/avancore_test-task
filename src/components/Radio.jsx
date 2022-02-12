import React from 'react';


import './Radio.css';

const Radio = ({ data }) => {

	return (
		<div className='radio'>
			<p className='radio__text'>Наименование фонда:</p>
            <div className='radio__container'>
				{data.map((element, i) => 
                <label className='radio__input-text' key={i}><input type='radio' 
                className='radio__input' 
                value={element.entryPointDocument}
                name='radio'
				/>
                {element.description}</label>)}
			</div>
		</div>
	)
}

export default Radio;