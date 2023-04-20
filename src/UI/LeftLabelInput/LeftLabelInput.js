import React, { Fragment } from "react";
import Label from '../Label/Label';
import classes from './LeftLabelInput.module.css';

export default function LeftLabelInput(props) {
    return (
        <Fragment>
            <Label className={`${classes.Label} ${props.labelClassName}`} text={props.labelText} />
            <input className={`${classes.Input} ${props.inputClassName}`} type={props.inputType} name={props.name} value={props.value} checked={props.checked} />
        </Fragment>
    );
}