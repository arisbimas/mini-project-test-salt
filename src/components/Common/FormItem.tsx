import React, { useState } from 'react'
import EyeIcon from '../../assets/icons/EyeIcon'


export type ErrorListProps = {
    nameField: string
    errorText: string
}

type FormItemTextProps = {
    id: string,
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errors?: Array<{
        nameField: string
        errorText: string
    }>
}

type FormItemPasswordProps = {
    id: string,
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errors?: Array<{
        nameField: string
        errorText: string
    }>
}

type FormItemCheckboxProps = {
    id: string,
    label: string,
    checked: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errors?: Array<{
        nameField: string
        errorText: string
    }>
}

export const FormItemText = (props: FormItemTextProps) => {
    const { id, label, value, onChange, errors } = props
    return (
        <div className='form-item form-item-text'>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} value={value} onChange={onChange} />
            {errors && errors.map((error, index) => <p className='error-text' key={index}>{error.errorText}</p>)}
        </div>
    )
}

export const FormItemPassword = (props: FormItemPasswordProps) => {
    const { id, label, value, onChange, errors } = props
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='form-item form-item-password'>
            <label htmlFor={id}>{label}</label>
            <div className="wrapper-input-password">
                <input type={showPassword ? "text" : "password"} id={id} value={value} onChange={onChange} />
                <div className="eye-icon" onClick={togglePasswordVisibility}>
                    {<EyeIcon active={showPassword ? true : false} />}
                </div>
            </div>
            {errors && errors.map((error, index) => <p className='error-text' key={index}>{error.errorText}</p>)}
        </div>
    )
}

export const FormItemCheckbox = (props: FormItemCheckboxProps) => {
    const { id, label, checked, onChange, errors } = props
    return (
        <div className='form-item form-item-checkbox'>
            <input type="checkbox" id={id} checked={checked} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
            {errors && errors.map((error, index) => <p className='error-text' key={index}>{error.errorText}</p>)}
        </div>
    )
}
