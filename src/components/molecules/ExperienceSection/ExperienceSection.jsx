import { useTheme } from '@emotion/react';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import GuyWorking from '../../../assets/svgs/guyWorking.svg';

export const ExperienceSection = () => {
    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
        <Grid container item sx={{ maxWidth: '1000px'}}>
            <Grid item xs={12}>
                <Typography variant='h4' sx={{textAlign: (isSmall) ? 'center': 'left', fontWeight: 'bold', color: theme.palette.mainWhite}}>Experiencia</Typography>
            </Grid>
            <Grid item display={'flex'} justifyContent={(isSmall)?'center':'start'} xs={12}>
                <Grid item xs={3}>
                    <Divider sx={{backgroundColor: theme.palette.mainPurple, height: '3px'}}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} sx={{marginTop: '1em'}}>
            <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined' sx={{borderColor: theme.palette.lightPurple}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Marzo 2024</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >Formación en centros de trabajo como desarrollador <span className='highlighted-text'>React</span> junior en <a className='atmiraLink' href='https://www.atmira.com/' target='blank'>atmira</a></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined' sx={{borderColor: theme.palette.lightPurple}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >Junio 2024</TimelineContent>
      </TimelineItem>
    </Timeline>
            </Grid>
            <Grid  container justifyContent={'center'} item xs={12} md={6} sx={{marginTop: '1em'}}>
                <img src={GuyWorking} className='guyWorkingImage'/>
            </Grid>
        </Grid>
    </>
  )
}
