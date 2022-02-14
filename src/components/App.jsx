import React, { useCallback, useState } from 'react';
import Select from './Select.jsx';
import Radio from './Radio.jsx';
import Table from './Table.jsx';
import Form from './Form.jsx';
import list from '../mocks/list.json';

import './App.css';

const App = () => {

	const [currentElementId, setCurrentElementId] = useState();
	const [dataList, setDataList] = useState(list)

	// Устанавливаем в стейт выбранное значение по событию onClick
	const handleElementClick = useCallback(
		element => {
			setCurrentElementId(element.entryPointDocument)

		},
		[]
	);

	// Отслеживаем изменение текущего значения в Select по событию onChange
	const handleChangeElement = (evt) => {
		setCurrentElementId(evt.target.value)
	}


	// Добавляем новый элемент в массив
	const handleAddElement = (input) => {
		if (input) {
			const newElement = {
				description: `${input}`,
				entryPointDocument: `${Math.random().toString(20)}`
			}
			setDataList([...dataList, newElement])
			console.log(dataList)
		}
	}

	return (
		<div>
			<Select data={dataList}
				currentElementId={currentElementId}
				onChange={handleChangeElement}
			/>
			<Radio data={dataList}
				onElementClick={handleElementClick}
				currentElementId={currentElementId} />
			<Table data={dataList}
				onElementClick={handleElementClick}
				currentElementId={currentElementId} />
			<Form handleAddElement={handleAddElement}></Form>
		</div>
	)
}

export default App;