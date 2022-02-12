import React from 'react';


import './Radio.css';

const Radio = ({ data, onElementClick, currentElementId }) => {

   console.log(currentElementId)

	return (
		<div className='radio'>
			<p className='radio__text'>Наименование фонда:</p>
            <div className='radio__container'>
				{data.map((element) => 
                <label 
                className=
                {currentElementId === element.entryPointDocument
                 ? 'radio__input-text radio__input-text_active'
                 : 'radio__input-text'} key={element.entryPointDocument}>
                <input type='radio' 
                className='radio__input' 
                value={element.entryPointDocument}
                name='radio'
                onClick={() => onElementClick(element)}
				/>
                {element.description}</label>)}
			</div>
		</div>
	)
}

export default Radio;