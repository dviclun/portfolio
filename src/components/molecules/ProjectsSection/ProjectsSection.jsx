import { useTheme } from '@emotion/react';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { projects } from '../../../utils/projects';
import { ProjectCard } from '../../atoms/ProjectCard/ProjectCard';

export const ProjectsSection = () => {

  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container item sx={{ maxWidth: '1000px' }}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: 'bold', color: theme.palette.mainWhite }}>Proyectos</Typography>
      </Grid>
      <Grid item display={'flex'} justifyContent={'center'} xs={12}>
        <Grid item xs={3}>
          <Divider sx={{ backgroundColor: theme.palette.mainPurple, height: '3px' }} />
        </Grid>
      </Grid>
      <Grid container spacing={3} item xs={12} sx={{ maxWidth: '1000px', marginTop: '2em' }}>
        {
          projects.map((project) => (
            <ProjectCard key={project.name} project={project}></ProjectCard>
          ))
        }
      </Grid>
    </Grid>

  )
}
