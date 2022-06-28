import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Image from '../media/images/cecile.jpg';
import Signature from '../media/images/signature.png';

const titleSize = {
  xs: '42px',
  md: '50px',
  lg: '64px',
  xl: '100px',
};
const textSize = {
  xs: '18px',
  md: '18px',
  lg: '18px',
  xl: '20px',
};

const textWidth = {
  xs: '90vw',
  md: '300px',
  lg: '500px',
  xl: '800px',
};
const textPadding = {
  md: '20px',
  lg: '50px',
  xl: '100px',
};
const textBottomPadding = '50px';

const picHeight = {
  xs: '80vh',
  md: '100vh',
  lg: '900px',
};
const picWidth = {
  xs: '100vw',
  md: '60vw',
  lg: '600px',
};

const Bio = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          display: 'flex',

          position: 'relative',
          /* left: picMargin, */
        }}
      >
        <Box
          sx={{
            background: `url(${Image})`,
            position: 'relative',
            height: picHeight,
            width: picWidth,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0px -35px 102px 22px rgba(0,0,0,0.13)',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          position: 'relative',
          paddingTop: {
            xs: '60px',
            md: '0px',
          },
          paddingLeft: textPadding,
          paddingBottom: textBottomPadding,
          /*  right: textMargin, */
        }}
      >
        <Typography
          sx={{
            fontSize: titleSize,
            fontFamily: 'Literata',
            width: textWidth,
          }}
        >
          Dra. Cécile, PhD
        </Typography>
        <Typography
          sx={{
            fontSize: textSize,
            width: textWidth,
            fontFamily: 'Literata',
            marginTop: {
              md: '10px',
              lg: '80px',
            },
            textAlign: 'justify',
          }}
        >
          Esta coragem, nada tem a ver com lutar contra os seus medos ou as suas
          dores mas sim saber identificá-los e querer transportá-los consigo,
          consulta após consulta, num processo psicoterapêutico breve e
          personalizado.
        </Typography>
        <Typography
          sx={{
            fontSize: textSize,
            width: textWidth,
            fontFamily: 'Literata',
            marginTop: {
              md: '20px',
              lg: '40px',
            },
            marginBottom: '80px',
            textAlign: 'justify',
          }}
        >
          Conte comigo para seguirmos em direção à sua recuperação psicológica
          intervindo nos bloqueios emocionais e/ou perturbações psicológicas
          para que consiga gerir as suas emoções e ser a melhor versão de si.
        </Typography>
        <Box
          component='img'
          src={Signature}
          alt='cecile'
          sx={{
            width: {
              xs: '350px',
              sm: '300px',
              md: '300px',
              lg: '550px',
            },
          }}
        />
        {/* <img src={Signature} alt='cecile' width='550px' /> */}
      </Box>
    </Box>
  );
};

export default Bio;
