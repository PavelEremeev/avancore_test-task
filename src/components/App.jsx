import React, {useCallback, useState} from 'react';
import Select from './Select.jsx';
import Radio from './Radio.jsx';
import Table from './Table.jsx';
import list from '../mocks/list.json'

import './App.css';

const App = () => {

	const [currentElementId, setCurrentElementId] = useState();

	const handleElementClick = useCallback(
		element => {
			setCurrentElementId(element.entryPointDocument)

		},
		[]
	);

	return (
		<div>
				<Select data={list}
				onElementClick={handleElementClick} 
				currentElement={currentElementId}
				/>
				<Radio data={list} 
				onElementClick={handleElementClick} 
				currentElementId={currentElementId}/>
				<Table data={list}/>
		</div>
	)
}

export default App;