import React from 'react';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Image from '../media/images/testimonials-background.jpg';
import avatarA from '../media/images/avatar-a.jpg';
import avatarB from '../media/images/avatar-b.jpg';
import avatarC from '../media/images/avatar-c.jpg';

const marginY = '5%';

const avatarSize = {
  xs: 100,
  md: 80,
  lg: 80,
  xl: 100,
};

const nameSize = {
  xs: '40px',
  md: '34px',
  lg: '36px',
  xl: '40px',
};
const quoteSize = {
  md: '18px',
  lg: '18px',
  xl: '22px',
};

const Testimonials = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Image})`,
        height: '100%',
        minHeight: '50vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: {
            xs: 'center',
            md: 'start',
          },
          minWidth: {
            xs: '100%',
            md: 'auto',
          },
          marginY: marginY,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt='avatar-a'
            src={avatarA}
            sx={{
              width: avatarSize,
              border: '3px solid #ffffff',
              height: avatarSize,
            }}
          />
          <Typography
            sx={{
              marginLeft: '20px',
              color: '#ffffff',
              fontFamily: 'Literata',
              fontSize: nameSize,
              fontWeight: '400',
            }}
          >
            Bárbara
          </Typography>
        </Box>
        <Typography
          sx={{
            marginTop: '10px',
            color: '#ffffff',
            fontFamily: 'Literata',
            fontSize: quoteSize,
            fontWeight: '200',
          }}
        >
          "A Dr. Cécile mudou a minha vida."
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: {
            xs: 'center',
            md: 'start',
          },
          marginX: {
            md: '30px',
            lg: '170px',
            xl: '250px',
          },
          minWidth: {
            xs: '100%',
            md: 'auto',
          },
          marginY: marginY,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt='avatar-b'
            src={avatarB}
            sx={{
              width: avatarSize,
              border: '3px solid #ffffff',
              height: avatarSize,
            }}
          />
          <Typography
            sx={{
              marginLeft: '20px',
              color: '#ffffff',
              fontFamily: 'Literata',
              fontSize: nameSize,
              fontWeight: '400',
            }}
          >
            João
          </Typography>
        </Box>
        <Typography
          sx={{
            marginTop: '10px',
            color: '#ffffff',
            fontFamily: 'Literata',
            fontSize: quoteSize,
            fontWeight: '200',
          }}
        >
          "A prática clínica é altamente."
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: {
            xs: 'center',
            md: 'start',
          },
          minWidth: {
            xs: '100%',
            md: 'auto',
          },
          marginY: marginY,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt='avatar-c'
            src={avatarC}
            sx={{
              width: avatarSize,
              border: '3px solid #ffffff',
              height: avatarSize,
            }}
          />
          <Typography
            sx={{
              marginLeft: '20px',
              color: '#ffffff',
              fontFamily: 'Literata',
              fontSize: nameSize,
              fontWeight: '400',
            }}
          >
            Alzira
          </Typography>
        </Box>
        <Typography
          sx={{
            marginTop: '10px',
            color: '#ffffff',
            fontFamily: 'Literata',
            fontSize: quoteSize,
            fontWeight: '200',
          }}
        >
          "Sinto que tenho 20 anos outra vez."
        </Typography>
      </Box>
    </Box>
  );
};

export default Testimonials;
