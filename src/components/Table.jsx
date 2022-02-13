import React from 'react';


import './Table.css';

const Table = ({ data, onElementClick, currentElementId }) => {

	console.log(currentElementId)

	return (
		<div className='table__container'>
			<p className='table__text'>Наименование фонда:</p>
            <table className='table'>
                <thead>
                    <tr>
                    <th>№</th>
                    <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
				{data.map((element, i) => 
                <tr className={currentElementId === element.entryPointDocument ? 'tr_active' : ''} 
				key={element.entryPointDocument} 
				onClick={() => onElementClick(element)}>
                <td>{i+1}</td>
                <td>{element.description}</td>
				</tr>)}
                </tbody>
			</table>
		</div>
	)
}

export default Table;