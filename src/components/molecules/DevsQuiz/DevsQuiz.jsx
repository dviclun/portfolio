import { useTheme } from '@emotion/react'
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import slide1 from '../../../assets/images/Projects/DevsQuiz/DevsQuizLanding.png';
import slide2 from '../../../assets/images/Projects/DevsQuiz/GamePage1.png';
import slide3 from '../../../assets/images/Projects/DevsQuiz/GamePage2.png';
import slide4 from '../../../assets/images/Projects/DevsQuiz/GamePage3.png';
import slide5 from '../../../assets/images/Projects/DevsQuiz/Results.png';


import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
  slide1, slide2, slide3, slide4, slide5
]



export const DevsQuiz = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <Grid container sx={{ marginTop: '5em', padding: '2em' }} justifyContent={'center'}>
      <Grid container item sx={{ maxWidth: '1440px' }} justifyContent={'center'}>
        <Grid item xs={12}>
          <Typography variant={(isSmall) ? 'h6' : 'h2'} sx={{ textAlign: 'center', fontWeight: 'bolder' }}>DEVSQUIZ</Typography>
        </Grid>
        <Grid container justifyContent={'center'} item xs={12}>
          <Grid item xs={6}>
            <Divider sx={{ backgroundColor: theme.palette.mainPurple, height: '1px' }} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={10} sx={{ marginTop: '2em' }} >
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {
                slides.map((slide, index) => (
                  <div key={index} className="embla__slide"><img className='slideImage' src={slide}></img></div>
                ))
              }
            </div>
            {
              (isSmall)
                ? null
                : <Grid item xs={12} display={'flex'} justifyContent={'center'} sx={{ marginTop: '2em', gap: '5em' }}>
                  <button className="embla__button" onClick={scrollPrev}>
                    <ArrowBackIosNewIcon fontSize='large' sx={{ display: 'flex', justifyContent: 'center' }} />
                  </button>
                  <button className="embla__button" onClick={scrollNext}>
                    <ArrowForwardIosIcon fontSize='large' />
                  </button>
                </Grid>
            }
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' sx={{ textAlign: (isSmall) ? 'center' : 'left', marginTop: '2em', fontWeight: 'bolder' }}>Descripción del proyecto</Typography>
        </Grid>
        <Grid container item xs={12} justifyContent={(isSmall) ? 'center' : 'start'}>
          <Grid item xs={3}>
            <Divider sx={{ backgroundColor: theme.palette.mainPurple, height: '2px' }} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ marginTop: '2em' }}>
            Proyecto realizado de forma alturista para practicar y repasar conceptos de las tecnologías utilizadas.
          </Typography>
          <Typography>
            Se trata de un juego sobre preguntas de programación, en el que los usuarios pueden repasar o aprender conceptos sobre diferentes tecnologías de una forma dinámica y divertida.
          </Typography>
          <Typography>
            Para el frontend he profundizado en <span className='highlighted-text'>React</span>, apoyado por <span className='highlighted-text'>Material UI</span> para los estilos de la aplicación.
            En la parte del backend he utilizado <span className='highlighted-text'>NodeJS</span> con <span className='highlighted-text'>Express</span> y para la base de datos he usado <span className='highlighted-text'>MongoDB</span>.
          </Typography>
        </Grid>
      </Grid>

    </Grid>
  )
}
