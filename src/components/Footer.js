import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

import '../styles/Footer.css';

const iconSize = {
  lg: '24px',
  xl: '26px',
};
const fontSize = {
  lg: '20px',
  xl: '22px',
};
const marginSize = {
  md: '40px',
  lg: '100px',
  xl: '200px',
};

const boxWidth = { xs: '100%', md: 'auto' };

const Footer = () => {
  return (
    <Box
      sx={{
        height: '100%',
        minHeight: '25vh',
        width: '100%',
        backgroundColor: '#0d0d0d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          width: boxWidth,
        }}
      >
        <Link
          target='blank'
          underline='none'
          color='inherit'
          href='tel:+351914167093'
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: {
                xs: 'center',
                md: 'start',
              },
            }}
            className='footer-link'
          >
            <PhoneIphoneIcon sx={{ fontSize: iconSize, color: '#ffffff' }} />
            <Typography
              sx={{
                paddingLeft: '10px',
                color: '#ffffff',
                fontFamily: 'Literata',
                fontSize: fontSize,
                fontWeight: '200',
              }}
            >
              (+351) 914 167 093
            </Typography>
          </Box>
        </Link>

        <Link
          target='blank'
          underline='none'
          color='inherit'
          href='mailto:ceciledominguespsi@gmail.com'
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: {
                xs: 'center',
                md: 'start',
              },
            }}
            className='footer-link'
          >
            <EmailIcon sx={{ fontSize: iconSize, color: '#ffffff' }} />

            <Typography
              sx={{
                paddingLeft: '10px',
                color: '#ffffff',
                fontFamily: 'Literata',
                fontSize: fontSize,
                fontWeight: '200',
              }}
            >
              ceciledominguespsi@gmail.com
            </Typography>
          </Box>
        </Link>
      </Box>
      {/* SEGUNDOOOOO */}
      <Box
        sx={{ marginX: marginSize, width: boxWidth }}
        className='footer-link'
      >
        <Link
          target='blank'
          underline='none'
          color='inherit'
          href='https://goo.gl/maps/TsSwk8kQve8anZ7t6'
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: {
                xs: 'center',
                md: 'start',
              },
            }}
          >
            <LocationOnIcon sx={{ fontSize: iconSize, color: '#ffffff' }} />
            <Typography
              sx={{
                paddingLeft: '10px',
                color: '#ffffff',
                fontFamily: 'Literata',
                fontSize: fontSize,
                fontWeight: '500',
              }}
            >
              Centro Empresarial do Porto,
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: {
                xs: 'center',
                md: 'start',
              },
            }}
          >
            <Typography
              sx={{
                paddingLeft: '10px',
                color: '#ffffff',
                fontFamily: 'Literata',
                fontSize: fontSize,
                fontWeight: '200',
              }}
            >
              Rua Engenheiro Ferreira Dias 161, Porto
            </Typography>
          </Box>
        </Link>
      </Box>

      {/* terceiro*/}
      <Box sx={{ width: boxWidth }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: {
              xs: 'center',
              md: 'start',
            },
          }}
        >
          <Stack
            direction='row'
            spacing={2}
            sx={{
              color: '#ffffff',
              marginRight: {
                xs: '0px',
                md: '80px',
              },
              filter: 'drop-shadow(1px 1px 3px rgb(0 0 0 / 0.4))',
            }}
          >
            <Link
              target='blank'
              underline='none'
              color='inherit'
              href='https://wa.me/914167093'
            >
              <WhatsAppIcon className='footer-icon' />
            </Link>
            <Link
              target='blank'
              underline='none'
              color='inherit'
              href='https://www.instagram.com/ceciledomingues_psicologa/'
            >
              <InstagramIcon className='footer-icon' />
            </Link>
            <Link
              target='blank'
              underline='none'
              color='inherit'
              href='https://www.facebook.com/watch/ceciledominguespsicologa/'
            >
              <FacebookIcon className='footer-icon' />
            </Link>
            <Link
              target='blank'
              underline='none'
              color='inherit'
              href='https://www.linkedin.com/in/c%C3%A9cile-domingues/'
            >
              <LinkedInIcon className='footer-icon' />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

// sx={{ fontSize: iconSize, color: '#ffffff', marginX: '5px' }}
