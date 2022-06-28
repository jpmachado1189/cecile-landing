import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from '../media/images/landing-alt.jpg';
import { PopupButton } from 'react-calendly';

import '../styles/LandingPage.css';

const HeroPage = () => {
  return (
    <Box
      className='landing-background'
      sx={{
        backgroundImage: `url(${Image})`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: {
          xs: 'top',
          sm: 'right',
        },
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          className='title'
          sx={{
            fontWeight: '400',
            fontFamily: 'Literata',
            fontSize: {
              xs: '30px',
              sm: '46px',
              md: '62px',
              lg: '82px',
              xl: '92px',
            },
            color: '#ffffff',
            textShadow: '0px 1px 5px rgba(0,0,0,0.62)',
          }}
        >
          O meu primeiro passo. {/*O meu primeiro passo. ou qlq coisa assim */}
        </Typography>
        <Typography
          className='subtitle'
          sx={{
            fontWeight: '200',
            fontFamily: 'Literata',
            fontSize: {
              xs: '20px',
              sm: '26px',
              md: '30px',
              lg: '36px',
              xl: '42px',
            },
            color: '#ffffff',
            textShadow: '0px 1px 5px rgba(0,0,0,0.62)',
          }}
        >
          Psicologia Clínica & Psicoterapia
          <br />
          Cécile Domingues, PhD
        </Typography>

        <PopupButton
          className='calendly-btn'
          url='https://calendly.com/zepmg80'
          rootElement={document.getElementById('root')}
          text='AGENDAR'
          styles={{
            marginTop: '20px',
            cursor: 'pointer',
            width: '150px',
            height: '45px',
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '500',
            border: '1px solid transparent',
            borderRadius: '25px',
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroPage;
