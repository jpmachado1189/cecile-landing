import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Hypnosis from '../media/images/hypnosis.jpg';
import Cbt from '../media/images/cbt.jpg';
import Mindfullness from '../media/images/mindfullness.jpg';

import '../styles/Tools.css';

const cardMarginBottom = '0';
const cardHeight = '400';
const cardWidth = {
  xs: '100%',
  sm: '100%',
  md: 260,
  lg: 350,
};
const cardElevation = 10;

const Tools = () => {
  return (
    <Box sx={{ height: '100%', minHeight: '100vh' }}>
      <Typography
        className='tools-header'
        sx={{
          fontSize: {
            xs: '50px',
            sm: '70px',
            md: '62px',
            lg: '82px',
            xl: '92px',
          },
          fontFamily: 'Literata',
          textAlign: 'center',
          paddingTop: '5.5%',
          marginBottom: '50px',
          textShadow: '0px 1px 1px rgba(0,0,0,0.22)',
        }}
      >
        Ferramentas
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card
          className='tool-card'
          elevation={cardElevation}
          sx={{
            maxWidth: cardWidth,
            transition: 'transform',
            transitionDuration: '0.5s',
            marginBottom: cardMarginBottom,
          }}
        >
          {/* TRANSFORM SCALE COM EM HOVER NA IMAGEM */}
          <CardMedia
            component='img'
            height={cardHeight}
            image={Hypnosis}
            alt='Hipnose Clínica'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              fontFamily='Literata'
            >
              Hipnose Clínica
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              fontFamily='Literata'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
        <Card
          className='tool-card'
          sx={{
            maxWidth: cardWidth,
            marginX: {
              md: '50px',
            },
            transition: 'transform',
            transitionDuration: '0.5s',
            marginBottom: cardMarginBottom,
          }}
          elevation={cardElevation}
        >
          <CardMedia
            component='img'
            height={cardHeight}
            image={Cbt}
            alt='Terapia Cognitivo Comportamental'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              fontFamily='Literata'
            >
              Terapia Cognitivo Comportamental
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              fontFamily='Literata'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>{' '}
        <Card
          className='tool-card'
          sx={{
            maxWidth: cardWidth,
            transition: 'transform',
            transitionDuration: '0.5s',
            marginBottom: cardMarginBottom,
          }}
          elevation={cardElevation}
        >
          <CardMedia
            component='img'
            height={cardHeight}
            image={Mindfullness}
            alt='Meditação Guiada Mindfullness'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              fontFamily='Literata'
            >
              Meditação Guiada Mindfullness
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              fontFamily='Literata'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
export default Tools;
