import { useTheme } from '@emotion/react';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import HandWavingEmoji from '../../../assets/images/wavingHand.webp'
import React from 'react'

export const AboutSection = () => {

    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
        <Grid container item sx={{ maxWidth: '1000px'}}>
            <Grid item xs={12}>
                <Typography variant='h4' sx={{textAlign: (isSmall) ? 'center': 'left', fontWeight: 'bold', color: theme.palette.mainWhite}}>Sobre mí</Typography>
            </Grid>
            <Grid item display={'flex'} justifyContent={(isSmall)?'center':'start'} xs={12}>
                <Grid item xs={3}>
                    <Divider sx={{backgroundColor: theme.palette.mainPurple, height: '3px'}}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} sx={{marginTop: '1em'}}>
                <Typography sx={{color: theme.palette.mainWhite, textAlign: (isSmall) ? 'center':'left'}}>Apasionado del desarrollo de aplicaciones web, actualmente especializandome en <span className='highlighted-text'>React</span>, tecnología con la cual he estado trabajando durante mi periodo de formación en centros de trabajo en <a className='atmiraLink' href='https://www.atmira.com/' target='blank'>atmira</a>. Además intento superarme cada día aprendiendo nuevas tecnologías y herramientas.</Typography>
            </Grid>
            <Grid item display={'flex'} justifyContent={'center'} xs={12} md={6} sx={{marginTop:(isSmall)? '1em':'0'}}>
                <img src={HandWavingEmoji} alt='avatar' className='emojiImage'/>
            </Grid>
        </Grid>
    
    </>
  )
}
