import { useTheme } from '@emotion/react';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CertificateSvg from '../../../assets/svgs/certificate.png'

export const StudiesSection = () => {
    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Grid container item sx={{ maxWidth: '1000px' }}>
                <Grid item xs={12}>
                    <Typography variant='h4' sx={{ textAlign: (isSmall) ? 'center' : 'right', fontWeight: 'bold', color: theme.palette.mainWhite }}>Formación reglada y cursos</Typography>
                </Grid>
                <Grid item display={'flex'} justifyContent={(isSmall) ? 'center' : 'end'} xs={12}>
                    <Grid item xs={3}>
                        <Divider sx={{ backgroundColor: theme.palette.mainPurple, height: '3px' }} />
                    </Grid>
                </Grid>

                {
                    (isSmall)
                        ? <>
                            <Grid container item xs={12} sx={{ marginTop: '2em'}}>
                                <Grid item xs={12}>
                                    <Typography sx={{textAlign: 'center', width: '100%' }}>Grado superior en Desarrollo de Aplicaciones Web</Typography>
                                    <Typography sx={{textAlign: 'center', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem', marginBottom: '1em' }}>2022/2024 - IES Trassierra</Typography>
                                    <Divider sx={{backgroundColor: theme.palette.mainWhite, opacity: '.3'}}/>
                                </Grid>
                                <Grid item xs={12} sx={{marginTop: '1em'}}>
                                    <Typography sx={{textAlign: 'center', width: '100%' }}>React: De Cero a Experto (Hooks y MERN)</Typography>
                                    <Typography sx={{textAlign: 'center', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem' }}>Udemy</Typography>
                                    <Typography sx={{textAlign: 'center', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem', marginBottom: '1em' }}><a className='highlighted-text no-underline'  href='https://www.ude.my/UC-cb0b5460-b289-4419-b392-edb5bd45fe57/'>Certificado</a></Typography>   
                                    <Divider sx={{backgroundColor: theme.palette.mainWhite, opacity: '.3'}}/>
                                </Grid>
                                <Grid item xs={12} sx={{marginTop: '1em'}}>
                                    <Typography sx={{textAlign: 'center', width: '100%' }}>Universidad React: De Cero a Master</Typography>
                                    <Typography sx={{textAlign: 'center', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem' }}>Udemy</Typography>
                                    <Typography sx={{textAlign: 'center', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem', marginBottom: '1em' }}><a className='highlighted-text no-underline' target='blank' href='https://www.ude.my/UC-bdc76328-074e-4691-857d-d9858ef71bc6/'>Certificado</a></Typography>   
                                    <Divider sx={{backgroundColor: theme.palette.mainWhite, opacity: '.3'}}/>
                                </Grid>
                                <Grid item xs={12} sx={{marginTop: '1em'}}>
                                    <Typography sx={{textAlign: 'center', width: '100%' }}>Aprende JavaScript, HTML5 y CSS3</Typography>
                                    <Typography sx={{textAlign: 'center', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem' }}>Udemy</Typography>
                                    <Typography sx={{textAlign: 'center', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem', marginBottom: '1em' }}><a className='highlighted-text no-underline' target='blank' href='https://www.ude.my/UC-3cb6bf8f-61c5-41c3-9f78-68eb19e67514/'>Certificado</a></Typography>       
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ marginTop: '1em', display: 'flex' , justifyContent: 'center', alignItems: 'center' }}>
                                <img className='certificateImage' src={CertificateSvg} />
                            </Grid>
                        </>
                        : <>
                            <Grid item xs={6} sx={{ marginTop: '2em', display: 'flex' , justifyContent: 'center', alignItems: 'center' }}>
                                <img className='certificateImage' src={CertificateSvg} />
                            </Grid>
                            <Grid container item xs={6} sx={{ marginTop: '2em'}}>
                                <Grid item xs={12}>
                                    <Typography sx={{textAlign: 'right', width: '100%' }}>Grado superior en Desarrollo de Aplicaciones Web</Typography>
                                    <Typography sx={{textAlign: 'right', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem', marginBottom: '1em' }}>2022/2024 - IES Trassierra</Typography>
                                    <Divider sx={{backgroundColor: theme.palette.mainWhite, opacity: '.3'}}/>
                                </Grid>
                                <Grid item xs={12} sx={{marginTop: '1em'}}>
                                    <Typography sx={{textAlign: 'right', width: '100%' }}>React: De Cero a Experto (Hooks y MERN)</Typography>
                                    <Typography sx={{textAlign: 'right', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem' }}>Udemy</Typography>
                                    <Typography sx={{textAlign: 'right', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem', marginBottom: '1em' }}><a className='highlighted-text no-underline'  href='https://www.ude.my/UC-cb0b5460-b289-4419-b392-edb5bd45fe57/'>Certificado</a></Typography>   
                                    <Divider sx={{backgroundColor: theme.palette.mainWhite, opacity: '.3'}}/>
                                </Grid>
                                <Grid item xs={12} sx={{marginTop: '1em'}}>
                                    <Typography sx={{textAlign: 'right', width: '100%' }}>Universidad React: De Cero a Master</Typography>
                                    <Typography sx={{textAlign: 'right', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem' }}>Udemy</Typography>
                                    <Typography sx={{textAlign: 'right', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem', marginBottom: '1em' }}><a className='highlighted-text no-underline' target='blank' href='https://www.ude.my/UC-bdc76328-074e-4691-857d-d9858ef71bc6/'>Certificado</a></Typography>   
                                    <Divider sx={{backgroundColor: theme.palette.mainWhite, opacity: '.3'}}/>
                                </Grid>
                                <Grid item xs={12} sx={{marginTop: '1em'}}>
                                    <Typography sx={{textAlign: 'right', width: '100%' }}>Aprende JavaScript, HTML5 y CSS3</Typography>
                                    <Typography sx={{textAlign: 'right', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem' }}>Udemy</Typography>
                                    <Typography sx={{textAlign: 'right', width: '100%', fontStyle: 'italic', fontWeight: 'lighter', fontSize: '.8rem', marginBottom: '1em' }}><a className='highlighted-text no-underline' target='blank' href='https://www.ude.my/UC-3cb6bf8f-61c5-41c3-9f78-68eb19e67514/'>Certificado</a></Typography>       
                                </Grid>
                            </Grid>
                        </>
                }

            </Grid>
        </>
    )
}
