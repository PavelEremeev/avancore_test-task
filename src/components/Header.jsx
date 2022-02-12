import React from 'react';
import Select from './Select.jsx';
import Radio from './Radio.jsx';
import Table from './Table.jsx';
import list from '../mocks/list.json'
import './Header.css';


const Header = () => {

	console.log(list)

	return (
		<header className='header'>
			<div className='header__container'>
				<Select data={list}></Select>
				<Radio data={list}></Radio>
				<Table data={list}></Table>
			</div>
		</header>
	)
}

export default Header;