import { useTheme } from '@emotion/react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Tooltip, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom';
import React, { useEffect } from 'react'


export const ProjectCard = ({project}) => {


  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Grid item xs={6}>
<Card sx={{backgroundColor: theme.palette.mainBlack}} elevation={4}>
      <CardMedia
        component="img"
        height='200px'
        alt="New Concept Landing Image"
        image={project.image}
      />      
      <CardContent>
        <Typography variant='h6' sx={{color: theme.palette.mainWhite, textAlign: 'center', fontWeight: 'bold'}}>
          {project.name}
        </Typography>
        <Grid container justifyContent={'center'} sx={{marginBottom: '.5em'}}>
          {
            project.projectTechs.map(tech => (
              <Tooltip title={tech.name} placement='top' followCursor>
                <Grid item display={'flex'} alignItems={'center'} sx={{padding: '8px'}}>
                <img src={tech.image} className='projectTechImage'></img>
              </Grid>
              </Tooltip>
            ))
          }
        </Grid>
        <Typography sx={{textAlign: 'center', marginTop: '5px'}}><Button variant={'outlined'} sx={{color: theme.palette.lightPurple, fontSize: 'small', borderColor: theme.palette.lightPurple, ':hover': {borderColor: theme.palette.lightPurple}}} onClick={()=>navigate(project.link)}>Ver proyecto</Button></Typography>
      </CardContent>
    </Card>
    </Grid>
  )
}
