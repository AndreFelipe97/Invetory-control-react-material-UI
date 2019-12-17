import React from 'react'
import { Breadcrumbs, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import Button from './Button'

export default props => {
    let history = useHistory();

    const handleClick = path => event => {
        history.push(path);
    }
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {[
                { label: `${props.label}`, path: `${props.path}` },
            ].map((item, index) => (
                <button name={item.label} onClick={handleClick(item.path)}/>
            ))}
        </Breadcrumbs>
    )
}