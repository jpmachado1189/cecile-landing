import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const numberSize = {
  xs: '26px',
  sm: '52px',
  md: '60px',
  lg: '66px',
  xl: '72px',
};
const textSize = {
  xs: '16px',
  sm: '18px',
  md: '22px',
  lg: '24px',
  xl: '26px',
};

const Counters = () => {
  return (
    <Box
      sx={{
        height: '25vh',
        backgroundColor: '#3D665F',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Box sx={{ textAlign: 'center', width: '290px' }}>
        <Typography
          sx={{
            lineHeight: '80px',
            fontSize: numberSize,
            color: '#ffffff',
            fontFamily: 'Literata',
            fontWeight: '500',
          }}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div style={{ height: 80 }}>
                {isVisible ? (
                  <CountUp end={13} duration={1} prefix='+' />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography
          sx={{
            fontSize: textSize,
            color: '#ffffff',
            fontFamily: 'Literata',
            fontWeight: '200',
          }}
        >
          Anos de prática clínica
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', width: '290px' }}>
        <Typography
          sx={{
            lineHeight: '80px',
            fontSize: numberSize,
            color: '#ffffff',
            fontFamily: 'Literata',
            fontWeight: '500',
          }}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div style={{ height: 80 }}>
                {isVisible ? (
                  <CountUp end={1000} duration={1} prefix='+' />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography
          sx={{
            fontSize: textSize,
            color: '#ffffff',
            fontFamily: 'Literata',
            fontWeight: '200',
          }}
        >
          Pessoas acompanhadas
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', width: '290px' }}>
        <Typography
          sx={{
            lineHeight: '80px',
            fontSize: numberSize,
            color: '#ffffff',
            fontFamily: 'Literata',
            fontWeight: '500',
          }}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div style={{ height: 80 }}>
                {isVisible ? (
                  <CountUp end={12600} duration={1} prefix='+' />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography
          sx={{
            fontSize: textSize,
            color: '#ffffff',
            fontFamily: 'Literata',
            fontWeight: '200',
          }}
        >
          Horas em consulta
        </Typography>
      </Box>

      {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PsychologyIcon sx={{ fontSize: '80px', color: '#ffffff' }} />
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '22px',
            fontFamily: 'Literata',
            fontWeight: '200',
          }}
        >
          + 13 anos de prática clínica
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginX: '150px' }}>
        <AccessTimeFilledIcon sx={{ fontSize: '80px', color: '#ffffff' }} />
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '22px',
            fontFamily: 'Literata',
            fontWeight: '200',
          }}
        >
          + 12 600 horas em consulta
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PeopleIcon sx={{ fontSize: '80px', color: '#ffffff' }} />
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '22px',
            fontFamily: 'Literata',
            fontWeight: '200',
          }}
        >
          + 1000 pessoas acompanhadas
        </Typography>
      </Box> */}
    </Box>
  );
};

export default Counters;
