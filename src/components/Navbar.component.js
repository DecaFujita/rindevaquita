import { Box, Link, Typography } from '@mui/material';
import Logo from '../imgs/logo_rinde_vaquinha.png';
import { IconTrash } from '../components/IconTrash.component';
import { useState } from 'react';

export const NavBar = (props) => {
  const [isShowing, setIsShowing] = useState(false);
  const clearStorage = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  return (
    <Box sx={container}>
      <Box sx={content}>
        <Box component='img' src={Logo} sx={navLogo} />
        <Typography variant='h6' sx={tagline}>
          Together we make it possible.
        </Typography>
      </Box>
      <Box
        sx={localStorage}
        onClick={clearStorage}
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
        <Link
          sx={[
            linkLocalStorage,
            { opacity: isShowing ? 1 : 0, transition: 'all .3s linear' },
          ]}
        >
          Clean Local Storage
        </Link>
        <IconTrash />
      </Box>
    </Box>
  );
};

const container = (theme) => ({
  width: '100%',
  height: '12rem',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('mobile')]: {
    alignItems: 'flex-start',
    paddingTop: '2rem',
    height: '12rem',
    transform: 'translateX(1rem)',
  },
});

const content = (theme) => ({
  width: '85%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('tablet')]: {
    width: '100%',
  },
  [theme.breakpoints.down('mobile')]: {
    flexDirection: 'column',
  },
});

const navLogo = (theme) => ({
  height: '6rem',
  marginLeft: '3rem',
});

const tagline = (theme) => ({
  marginLeft: '2rem',
  [theme.breakpoints.down('table')]: {
    margin: 0,
  },
});

const localStorage = (theme) => ({
  marginRight: '3rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('tablet')]: {
    marginRight: '1rem',
    marginLeft: '1rem',
  },
});

const linkLocalStorage = (theme) => ({
  color: theme.palette.grey.two,
  textDecoration: 'none',
  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },

  '&:link, &:visited': {
    color: 'inherit',
  },
  '&:hover': {
    color: theme.palette.primary.main,
  },
});
