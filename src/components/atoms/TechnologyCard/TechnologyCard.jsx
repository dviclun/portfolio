import { useTheme } from '@emotion/react'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Tilt } from 'react-tilt'

export const TechnologyCard = ({technology}) => {
    const theme = useTheme();

    const defaultOptions = {
      reverse:        false,  // reverse the tilt direction
      max:            35,     // max tilt rotation (degrees)
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
      speed:          1000,   // Speed of the enter/exit transition
      transition:     true,   // Set a transition on enter/exit.
      axis:           null,   // What axis should be disabled. Can be X or Y.
      reset:          true,    // If the tilt effect has to be reset on exit.
      easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

  return (
    <Grid container item xs={(technology.priority === '1') ? 6 : 4} md={(technology.priority === '1') ? 3 : 2} sx={{padding: '1em'}}>
            <Tilt option={defaultOptions} className='tiltItem'>
              <Grid item className='elevation-3 blur-bg' xs={12} sx={{backgroundColor: theme.palette.secondaryBlack, display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'space-evenly', padding: '2em', borderRadius: '10px', height: {xs: '100px', md: '150px'}}}>
                  <img className={(technology.priority === '1') ? 'techImage' : 'secondaryTechImage'} src={technology.image}/>
                  <Typography variant={(technology.priority === '1')? 'body': 'body2'} sx={{textAlign: 'center', marginTop: '.5em'}}>{technology.name}</Typography>
              </Grid>
            </Tilt>
    </Grid>
  )
}
