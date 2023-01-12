import React from 'react'
import { FieldProps, useField } from 'formik';
import DropDown from '../Dropdown'
import { IDropdownData } from '../../types';

export interface IMovieDropdownFormikProps extends FieldProps {
	items: IDropdownData[]
}

export default function MovieDropdownFormik({ field, form, items }: IMovieDropdownFormikProps) {
	const [fieldValue] = useField(field);

	const onChange = (values: IDropdownData[]) => {
		form.setFieldValue(field.name, values)
	}

	return (
		<DropDown
			className={'dropdown'}
			position={'right'}
			items={items}
			multiply={true}
			defaultValue={fieldValue.value}
			onChangeHandler={onChange}
			hideValuesContent={false}
		>
			<span></span>
		</DropDown>
	);
}

