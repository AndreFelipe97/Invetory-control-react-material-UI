import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default props => {
    return (
        <Button variant={props.variant} color={props.color}>
            {props.name}
        </Button>
    );
}