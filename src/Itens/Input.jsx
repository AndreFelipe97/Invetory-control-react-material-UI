import React from 'react'
import { Grid, TextField } from '@material-ui/core'

export default props =>

    <Grid item {...props.columns}>
        <TextField
            id={props.id}
            defaultValue ={props.error}
            label={props.label}
            style={props.style}
            type={props.type}
            required
            value={props.value}
            maxLength={props.maxLength}
            onChange={props.onChange}
        />
    </Grid>