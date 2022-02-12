import React from 'react';


import './Table.css';

const Table = ({ data }) => {

	return (
		<div className='table__container'>
			<p className='table__text'>Наименование фонда:</p>
            <table className='table'>
                <thead>
                    <th>№</th>
                    <th>Описание</th>
                </thead>
                <tbody>
				{data.map((element, i) => 
                <tr 
                id={element.entryPointDocument}
                key={i}>
                <td>{i+1}</td>
                <td>{element.description}</td>
				</tr>)}
                </tbody>
			</table>
		</div>
	)
}

export default Table;