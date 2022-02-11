import React from 'react';
import Select from './Select.jsx';

import list from '../mocks/list.json'
import './Header.css';

const Header = () => {

	console.log(list)

	return (
		<header className='header'>
			<div className='header__container'>
				<Select data={list}></Select>
			</div>
		</header>
	)
}

export default Header;