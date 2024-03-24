import React, { useState } from 'react';
import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
	height: 0;
	width: 0;
	visibility: hidden;
`;

const Label = styled.label`
	cursor: pointer;
	text-indent: -9999px;
	width: 38px;
	height: 19px;
	background: #F2F2F2;
	display: block;
	border-radius: 100px;
	position: relative;

	&:after {
		content: '';
		position: absolute;
		top: 3px;
		left: 5px;
		width: 13px;
		height: 13px;
		background: #C6C6C6;
		border-radius: 90px;
		transition: 0.3s;
	}

	${Checkbox}:checked + & {
		background: var(--primary-color);

		&:after {
		left: calc(100% - 5px);
		transform: translateX(-100%);
		}
	}
`;

const Switch = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleToggle = () => {
		setIsChecked(!isChecked);
	};

	return (
		<>
			<Checkbox
				id="switch"
				checked={isChecked}
				onChange={handleToggle}
			/>
			<Label htmlFor="switch">Toggle</Label>
		</>
	);
};

export default Switch;