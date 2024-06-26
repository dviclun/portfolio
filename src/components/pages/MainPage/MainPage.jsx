import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'

import { ProfileSection } from '../../molecules/ProfileSection/ProfileSection';
import { AboutSection } from '../../molecules/AboutSection/AboutSection';
import { useTheme } from '@emotion/react';
import { TechnologiesSection } from '../../molecules/TechnologiesSection/TechnologiesSection';
import { ExperienceSection } from '../../molecules/ExperienceSection/ExperienceSection';
import { StudiesSection } from '../../molecules/StudiesSection/StudiesSection';
import { ProjectsSection } from '../../molecules/ProjectsSection/ProjectsSection';

export const MainPage = () => {

  const theme = useTheme();

  return (
    <>
      <Grid id='profile' container spacing={3} sx={{ marginTop: '2em', padding: '2em', paddingTop: '8em', paddingBottom: '4em' }}>
        <ProfileSection />
      </Grid>
      <Grid id='about' container className='elevation-3' justifyContent={'center'} spacing={3} sx={{ marginTop: '2em', marginBottom: '2em', padding: '2em', paddingTop: '4em', paddingBottom: '4em', backgroundColor: theme.palette.secondaryBlack }}>
        <AboutSection />
      </Grid>
      <Grid id='technologies' container justifyContent={'center'} spacing={3} sx={{ padding: '2em', paddingTop: '4em', paddingBottom: '4em', }}>
        <TechnologiesSection />
      </Grid>
      <Grid id='experience' container className='elevation-3' justifyContent={'center'} spacing={3} sx={{ marginTop: '2em', marginBottom: '2em', padding: '2em', paddingTop: '4em', paddingBottom: '4em', backgroundColor: theme.palette.secondaryBlack }}>
        <ExperienceSection />
      </Grid>
      <Grid id='studies' container justifyContent={'center'} spacing={3} sx={{ padding: '2em', paddingTop: '4em', paddingBottom: '4em', }}>
        <StudiesSection />
      </Grid>
      <Grid id='projects' container className='elevation-3' justifyContent={'center'} spacing={3} sx={{ marginTop: '2em', marginBottom: '2em', padding: '2em', paddingTop: '4em', paddingBottom: '4em', backgroundColor: theme.palette.secondaryBlack }}>
        <ProjectsSection />
      </Grid>
    </>

  )
}
