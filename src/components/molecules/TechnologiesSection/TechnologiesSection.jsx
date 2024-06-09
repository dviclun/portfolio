import { useTheme } from '@emotion/react';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { TechnologyCard } from '../../atoms/TechnologyCard/TechnologyCard';
import ReactLogo from '../../../assets/svgs/react.svg'
import AngularLogo from '../../../assets/svgs/angular.svg'
import ReduxLogo from '../../../assets/svgs/redux.svg'
import NodeLogo from '../../../assets/svgs/nodejs.svg'
import HTMLLogo from '../../../assets/svgs/html5.svg'
import CSSLogo from '../../../assets/svgs/css.svg'
import JavaScriptLogo from '../../../assets/svgs/javascript.svg'
import MaterialLogo from '../../../assets/svgs/materialui.svg'
import BootstrapLogo from '../../../assets/svgs/bootstrap.svg'
import TailwindLogo from '../../../assets/svgs/tailwindcss.svg'
import JQueryLogo from '../../../assets/svgs/jquery_dark.svg'
import JavaLogo from '../../../assets/svgs/java.svg'
import PHPLogo from '../../../assets/svgs/php_dark.svg'
import MySQLLogo from '../../../assets/svgs/mysql.svg'
import MongoLogo from '../../../assets/svgs/mongodb.svg'

const technologies = [
    {name: 'React', image: ReactLogo, priority: '1'},
    {name: 'Angular', image: AngularLogo, priority: '1'},
    {name: 'Redux', image: ReduxLogo, priority: '1'},
    {name: 'NodeJS', image: NodeLogo, priority: '1'},
    {name: 'HTML', image: HTMLLogo, priority: '2'},
    {name: 'CSS', image: CSSLogo, priority: '2'},
    {name: 'JavaScript', image: JavaScriptLogo, priority: '2'},
    {name: 'Material UI', image: MaterialLogo, priority: '2'},
    {name: 'Bootstrap', image: BootstrapLogo, priority: '2'},
    {name: 'Tailwind', image: TailwindLogo, priority: '2'},
    {name: 'JQuery', image: JQueryLogo, priority: '2'},
    {name: 'Java', image: JavaLogo, priority: '2'},
    {name: 'PHP', image: PHPLogo, priority: '2'},
    {name: 'MySQL', image: MySQLLogo, priority: '2'},
    {name: 'MongoDB', image: MongoLogo, priority: '2'}
]

export const TechnologiesSection = () => {
    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid container item sx={{ maxWidth: '1000px' }}>
            <Grid item xs={12}>
                <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: 'bold', color: theme.palette.mainWhite }}>Tecnologías</Typography>
            </Grid>
            <Grid item display={'flex'} justifyContent={'center'} xs={12}>
                <Grid item xs={3}>
                    <Divider sx={{ backgroundColor: theme.palette.mainPurple, height: '3px' }} />
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'} item xs={12} sx={{marginTop: '2em'}}>
                {
                    technologies.map(technology=> (
                        <TechnologyCard key={technology.name} technology={technology}/>
                    ))
                }
            </Grid>
        </Grid>
    )
}
