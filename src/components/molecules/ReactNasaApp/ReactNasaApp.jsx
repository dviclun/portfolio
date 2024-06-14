import MainPage from '../../../assets/images/Projects/ReactNasaApp/MainPage.png'
import Dashboard from '../../../assets/images/Projects/ReactNasaApp/Dashboard.png'
import InfoPage from '../../../assets/images/Projects/ReactNasaApp/Info.png'
import { useTheme } from '@emotion/react'
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [MainPage, Dashboard, InfoPage]

export const ReactNasaApp = () => {
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
                    <Typography variant={(isSmall) ? 'h6' : 'h2'} sx={{ textAlign: 'center', fontWeight: 'bolder' }}>React Nasa App</Typography>
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
                        Pequeño caso práctico realizado como parte de mi formación en centros de trabajo. Con esta aplicación debia accederse a la API de la Nasa y cargar las imagenes del día de los 6 dias anteriores a la fecha actual y que al
                        pinchar en una de ellas, se muestre mas información de la misma.
                    </Typography>
                    <Typography>
                        Para realizarlo he utilizado <span className='highlighted-text'>React</span>, apoyado por <span className='highlighted-text'>Material UI</span> para los estilos de la aplicación.
                        Para la organización de la logica he utilizado <span className='highlighted-text'>Redux</span> y la persistencia de los datos está realizada en este caso con el localStorage del navegador.
                    </Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}
