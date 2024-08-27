import { useTheme } from '@emotion/react';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { TechnologyCard } from '../../atoms/TechnologyCard/TechnologyCard';

import { technologies } from '../../../utils/technologies';

export const TechnologiesSection = () => {
    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid container className='technologiesContainer' item sx={{ maxWidth: '1000px' }}>
            <Grid item xs={12}>
                <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: 'bold', color: theme.palette.mainWhite }}>Tecnologías</Typography>
            </Grid>
            <Grid item display={'flex'} justifyContent={'center'} xs={12}>
                <Grid item xs={3}>
                    <Divider sx={{ backgroundColor: theme.palette.mainPurple, height: '3px' }} />
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'} item xs={12} sx={{ marginTop: '2em' }}>
                {
                    technologies.map(technology => (
                        <TechnologyCard key={technology.name} technology={technology} />
                    ))
                }
            </Grid>
        </Grid>
    )
}
