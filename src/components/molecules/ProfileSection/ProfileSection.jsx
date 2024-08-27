import { Grid, Tooltip, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import ProfileImage from '../../../assets/images/DVLProfile.jpg'
import { useTheme } from '@emotion/react'
import { TypeAnimation } from 'react-type-animation';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import RoomIcon from '@mui/icons-material/Room';
import GithubIcon from '../../../assets/svgs/github.svg';
import LinkedinIcon from '../../../assets/svgs/linkedin.svg';

export const ProfileSection = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  const handleCopyText = () => {
    setEmailCopied(true);

    setTimeout(() => {
      setEmailCopied(false)
    }, 1500)
  }
  return (
    <>
      <Grid container className='profileContainer' item xs={12} md={4} justifyContent={(isSmall) ? 'center' : 'end'}>
        <Grid item className='elevation-3' sx={{ width: 'fit-content', backgroundColor: theme.palette.secondaryBlack, padding: '10px', borderRadius: '20px' }}>
          <Grid item xs={12}>
            <img className='profileImage' src={ProfileImage} />
          </Grid>
          <Grid item display={'flex'} justifyContent={'center'} gap={'1em'} xs={12} sx={{ marginTop: '10px' }}>
            <Tooltip title='Linkedin'>
              <a href='https://www.linkedin.com/in/daniel-vicent-luna-090956242/' target='blank' className='headerIconLink'>
                <img src={LinkedinIcon} className='headerIcon headerLinkedinIcon' />
              </a>
            </Tooltip>
            <Tooltip title='Github'>
              <a href='https://github.com/dviclun' target='blank' className='headerIconLink'>
                <img src={GithubIcon} className='headerIcon' />
              </a>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={8}>
        <Grid item xs={12} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={(isSmall) ? 'center' : 'start'} >
          <Typography variant={(isSmall) ? 'h5' : 'h3'} sx={{ fontWeight: 'bolder', fontStyle: 'italic', textAlign: (isSmall) ? 'center' : 'left' }}>DANIEL VICENT LUNA</Typography>
          <Typography variant={(isSmall) ? 'body' : 'h4'} sx={{ fontStyle: 'italic', textAlign: (isSmall) ? 'center' : 'left', color: theme.palette.mainWhite }}>
            DESARROLLADOR&#32;
            <TypeAnimation
              className='purple-text'
              sequence={[
                'WEB',
                1500,
                '',
                1000,
              ]}
              speed={1}
              deletionSpeed={1}
              repeat={Infinity}
            />
          </Typography>
          <Typography sx={{ display: 'flex', marginTop: '1em', textAlign: (isSmall) ? 'center' : 'left', color: theme.palette.mainWhite }}>
            <RoomIcon sx={{ marginRight: '.2em' }} />
            Córdoba, 14720, España
          </Typography>
          <Typography sx={{ display: 'flex', marginTop: '1em', textAlign: (isSmall) ? 'center' : 'left', color: theme.palette.mainWhite }}>
            <MailOutlineIcon sx={{ marginRight: '.2em' }} />
            daniel.vicent.luna@gmail.com
            <CopyToClipboard text='daniel.vicent.luna@gmail.com'>
              <Tooltip title='Copiar email'>
                <ContentCopyIcon onClick={handleCopyText} sx={{ marginLeft: '.2em', color: theme.palette.lightPurple, cursor: 'pointer' }} />
              </Tooltip>
            </CopyToClipboard>
            {
              (emailCopied)
                ? <span className='copiedText'>Copied!</span>
                : null
            }
          </Typography>

          <Typography sx={{ display: 'flex', marginTop: '1em', color: theme.palette.mainWhite }}>
            <PhoneIphoneIcon sx={{ marginRight: '.2em' }} />
            +34 654 955 641
          </Typography>

        </Grid>
      </Grid>
    </>
  )
}
