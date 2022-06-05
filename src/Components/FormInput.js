import React from "react";

const FormInput = ({ field, onFieldChange }) => {
	const onChange = (e) => {
		const value_ = e.target.value;

		onFieldChange(value_?.trim());
	};
	return (
		<div className='flex flex-col'>
			<label for={field} className='text-gray-600 font-bold mb-1'>
				{field}:
			</label>
			<input
				id={field}
				type={field}
				placeholder={field}
				onChange={onChange}
				className='mb-2 h-10 pl-4'
			/>
		</div>
	);
};

export default FormInput;
