import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default props =>
    <Button variant={props.variant} style={props.style} color={props.color} onClick={props.onClick}>
        {props.icon}{props.name}
    </Button>