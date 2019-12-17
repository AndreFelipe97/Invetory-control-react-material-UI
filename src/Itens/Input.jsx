import React from 'react'
import { Grid, TextField } from '@material-ui/core'

export default props =>
    <Grid item {...props.columns}>
        <TextField
            id={props.id}
            label={props.label}
            style={props.style}
            required
            value={props.value}
            onChange={props.value}
        />
    </Grid>