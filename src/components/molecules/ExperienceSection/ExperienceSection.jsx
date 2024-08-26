import { useTheme } from '@emotion/react';
import { Button, Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import GuyWorking from '../../../assets/svgs/guyWorking.svg';

import { shortText } from '../../../utils';

const atmiraExp = 'Durante este periodo, participé en una formación intensiva diseñada para simular un entorno de trabajo real, enfocándome en el desarrollo de aplicaciones web con React. A lo largo de esta experiencia, adquirí un conocimiento profundo y aplicado de React, incluyendo el Virtual DOM, ciclos de vida, Hooks, Contexto, y el manejo avanzado de estados con Redux. También perfeccioné mis habilidades en el diseño de interfaces modernas y accesibles utilizando Material UI, y aseguré la fiabilidad del código mediante testing con Jest y React Testing Library.\n \n Como parte de esta formación, desarrollé un proyecto integrador que consistió en la creación de una aplicación de gimnasio virtual. Este proyecto, aunque académico, fue abordado con el rigor de un encargo profesional, permitiéndome aplicar y consolidar todas las habilidades aprendidas. Utilicé React para construir una interfaz intuitiva y desarrollar componentes reutilizables, Node.js con Express para gestionar peticiones y validaciones, WebSockets para implementar un chat en tiempo real, y Git para mantener un control de versiones adecuado. Este proyecto me permitió experimentar con el ciclo completo de desarrollo de una aplicación fullstack, desde el diseño inicial hasta la implementación, pruebas y despliegue.'

const areasExp = 'Durante este periodo en el aeropuerto de Madrid desarrollé las siguientes habilidades: \n\n Atención al cliente internacional, ofreciendo un servicio de alta calidad en un entorno de ritmo acelerado y multicultural.\n Comunicación en inglés con clientes, desarrollando habilidades para interactuar efectivamente en un idioma extranjero.\n Gestión de tiempo y prioridades en situaciones de alta presión, manteniendo la eficiencia y el enfoque en la satisfacción del cliente.\n Trabajo en equipo, colaborando estrechamente con colegas para garantizar un servicio fluido y coordinado.'

export const ExperienceSection = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  const [isAtmiraExpShort, setIsAtmiraExpShort] = useState(true);
  const [isAreasExpShort, setIsAreasExpShort] = useState(true);

  const handleShortAtmiraExp = () => {
    setIsAtmiraExpShort(!isAtmiraExpShort);
  }

  const handleShortAreasExp = () => {
    setIsAreasExpShort(!isAreasExpShort);
  }

  return (
    <>
      <Grid container item sx={{ maxWidth: '1000px' }}>
        <Grid item xs={12}>
          <Typography variant='h4' sx={{ textAlign: (isSmall) ? 'center' : 'left', fontWeight: 'bold', color: theme.palette.mainWhite }}>Experiencia</Typography>
        </Grid>
        <Grid item display={'flex'} justifyContent={(isSmall) ? 'center' : 'start'} xs={12}>
          <Grid item xs={3}>
            <Divider sx={{ backgroundColor: theme.palette.mainPurple, height: '3px' }} />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '1em' }}>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.3,
              },
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent>
                Mar. 2024 - Jun. 2024
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant='outlined' sx={{ borderColor: theme.palette.lightPurple }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>
                  Desarrollador <span className='highlighted-text'> React</span>
                </Typography>
                <Typography>
                  <a className='atmiraLink' href='https://www.atmira.com/' target='blank'>atmira</a>
                </Typography>
                <hr />
                <Typography variant='body2' sx={{whiteSpace: 'pre-line'}}>{
                  (isAtmiraExpShort) ? shortText(atmiraExp) : atmiraExp
                }

                  {(isAtmiraExpShort) ?
                    <button className='seeMoreBtn' onClick={handleShortAtmiraExp}>Ver más</button>
                    : <button className='seeMoreBtn' onClick={handleShortAtmiraExp}>Ver menos</button>
                  }

                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                Jun. 2022 - Sep. 2022

              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant='outlined' sx={{ borderColor: theme.palette.lightPurple }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>
                  Camarero
                </Typography>
                <Typography>
                  <a className='atmiraLink' href='https://es.areas.com/es/' target='blank'>Areas S.A</a>
                </Typography>
                <hr />
                <Typography variant='body2' sx={{whiteSpace: 'pre-line'}}>
                  {(isAreasExpShort) ? shortText(areasExp) : areasExp}

                  {(isAreasExpShort) ?
                    <button className='seeMoreBtn' onClick={handleShortAreasExp}>Ver más</button>
                    : <button className='seeMoreBtn' onClick={handleShortAreasExp}>Ver menos</button>
                  }
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid container justifyContent={'center'} item xs={12} sx={{ marginTop: '1em' }}>
          <img src={GuyWorking} className='guyWorkingImage' />
        </Grid>
      </Grid>
    </>
  )
}
