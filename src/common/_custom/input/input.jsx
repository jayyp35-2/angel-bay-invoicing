import React from 'react';
import './input.scss';

function Input({
	className,
	label,
	autocomplete = 'off',
	placeholder,
	type = "text",
	fluid,
	required,
	value,
	transparent,
	onChange,
	error
}) {
	return (
		<div className={`input-group ${className ?? ""}`}>
			{!!label && <label className={`label ${error ? "error-label" : ""}`}>{label}{required ? "*" : ""}</label>}
			<input
				id="Email"
				className={`input ${error ? "error" : ""}`}
				placeholder={placeholder}
				autoComplete="off"
				style={{
					...(!!fluid && {
						width: "100%"
					})
				}}
				value={value}
				onChange={onChange}
			/>
			<div></div>
		</div>
	)
}

export default Input;