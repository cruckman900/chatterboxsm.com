/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import Label from '../Label/Label'
import classes from './LeftLabelInput.module.css'

const LeftLabelInput = React.forwardRef((props) => {
    return (
        <div className={`${classes.container} ${props.className}`}>
            <Label
                className={`${classes.Label} ${props.labelClassName} ${props.required && classes.required}`}
                text={props.labelText}
                htmlFor={props.id}
            />
            {props.inputType !== 'textarea' && (
                <input
                    id={props.id}
                    name={props.name}
                    placeholder={props.placeholder}
                    className={`
                        ${props.inputType !== 'color' && classes.Input} 
                        ${props.inputClassName} 
                        ${props.valid && classes.InputValid} 
                        ${props.error && classes.InputError}
                    `}
                    type={props.inputType}
                    title={props.title}
                    maxLength={props.maxLength}
                    value={props.value}
                    checked={props.checked}
                    disabled={props.disabled}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                />
            )}
            {props.inputType === 'textarea' && (
                <textarea
                    id={props.id}
                    placeholder={props.placeholder}
                    className={`${classes.Input} ${props.inputClassName}`}
                    readOnly={props.readOnly}
                    disabled={props.disabled}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    value={props.value}
                />
            )}
        </div>
    )
})

export default LeftLabelInput
