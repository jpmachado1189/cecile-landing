import React from 'react';

import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Slide from '@mui/material/Slide';

import '../styles/NavBar.css';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
        <AppBar position='fixed' color='transparent' elevation={0}>
          <Toolbar
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'start',
              },
            }}
          >
            <Typography
              variant='h6'
              component='div'
              sx={{
                marginLeft: {
                  sm: '80px',
                },
                flexGrow: 1,
                color: '#ffffff',
                fontFamily: 'Literata',
                fontSize: '22px',
                fontWeight: '200',
                textShadow: '0px 1px 5px rgba(0,0,0,0.62)',
              }}
            >
              EQUILIBRARE
            </Typography>
            <Stack
              direction='row'
              spacing={2}
              sx={{
                display: {
                  xs: 'none',
                  sm: 'block',
                },
                color: '#ffffff',
                marginRight: '80px',
                filter: 'drop-shadow(1px 1px 3px rgb(0 0 0 / 0.4))',
              }}
            >
              <Link
                target='blank'
                underline='none'
                color='inherit'
                href='https://wa.me/914167093'
              >
                <WhatsAppIcon className='nav-icon' />
              </Link>
              <Link
                target='blank'
                underline='none'
                color='inherit'
                href='https://www.instagram.com/ceciledomingues_psicologa/'
              >
                <InstagramIcon className='nav-icon' />
              </Link>
              <Link
                target='blank'
                underline='none'
                color='inherit'
                href='https://www.facebook.com/watch/ceciledominguespsicologa/'
              >
                <FacebookIcon className='nav-icon' />
              </Link>
              <Link
                target='blank'
                underline='none'
                color='inherit'
                href='https://www.linkedin.com/in/c%C3%A9cile-domingues/'
              >
                <LinkedInIcon className='nav-icon' />
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
};

export default NavBar;
