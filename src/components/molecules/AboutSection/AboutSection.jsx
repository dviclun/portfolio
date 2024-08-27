import { useTheme } from '@emotion/react';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import HandWavingEmoji from '../../../assets/images/wavingHand.webp'
import React from 'react'

export const AboutSection = () => {

    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Grid container className='aboutContainer' item sx={{ maxWidth: '1000px' }}>
                <Grid item xs={12}>
                    <Typography variant='h4' sx={{ textAlign: (isSmall) ? 'center' : 'left', fontWeight: 'bold', color: theme.palette.mainWhite }}>Sobre mí</Typography>
                </Grid>
                <Grid item display={'flex'} justifyContent={(isSmall) ? 'center' : 'start'} xs={12}>
                    <Grid item xs={3}>
                        <Divider sx={{ backgroundColor: theme.palette.mainPurple, height: '3px' }} />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} sx={{ marginTop: '1em' }}>
                    <Typography sx={{ color: theme.palette.mainWhite, textAlign: (isSmall) ? 'center' : 'left' }}>Soy un apasionado del desarrollo de aplicaciones web, tengo
                        experiencia en el uso de tecnologías como
                        <span className='highlighted-text'> React, Node.js y MySQL</span>, adquirida a través de
                        proyectos formativos y mi periodo siendo parte de <a className='atmiraLink' href='https://www.atmira.com/' target='blank'>atmira</a>, donde he aprendido y aplicado
                        prácticas profesionales. Me especializo en la
                        creación de interfaces intuitivas y funcionales,
                        así como en el desarrollo de soluciones
                        backend escalables. Como amante del mundo
                        del desarrollo me mantengo siempre con ganas
                        de mejorar y aprender. </Typography>
                </Grid>
                <Grid item display={'flex'} justifyContent={'center'} xs={12} md={6} sx={{ marginTop: (isSmall) ? '1em' : '0' }}>
                    <img src={HandWavingEmoji} alt='avatar' className='emojiImage' />
                </Grid>
            </Grid>

        </>
    )
}
