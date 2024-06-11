import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NewConcept = () => {
  return (
    <Grid container sx={{marginTop: '7em', padding: '2em'}}>
      <Grid item xs={12}>
        <Typography>New Concept Gym</Typography>
      </Grid>
    </Grid>
  )
}
