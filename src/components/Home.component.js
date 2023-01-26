import { Box, Link, Typography } from '@mui/material';
import { Fragment, useContext, useEffect, useState } from 'react';
import ImgThePublic from '../imgs/img_thepublic.png';
import ImgThePublicMobile from '../imgs/img_thepublic_mobile.png';
import { Form } from './Form.component';
import { IconBookmark } from './IconBookmark.component';
import { IconMail } from './IconMail.component';
import useLocalStorageState from '../hooks/useLocalStorageState';
import Homer from '../imgs/homer.gif';
import { IconClose } from '../components/IconClose.component';
import { PageContext } from '../contexts/Page.context';

export const Home = (props) => {
  const { cashAmount, isShowingMsg, firstToReach, setFirstToReach } =
    useContext(PageContext);
  const [isBookmarked, setIsBookmarked] = useLocalStorageState('bookmark', 0);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  useEffect(() => {
    if (cashAmount >= 250 && !firstToReach) {
      setIsPopUpOpen(true);
      setFirstToReach(true);
    }
  }, [cashAmount]);
  return (
    <Fragment>
      <Box sx={[victory, { display: isPopUpOpen ? 'block' : 'none' }]}>
        <Box sx={popupContainer}>
          <Box sx={closeIcon} onClick={() => setIsPopUpOpen(false)}>
            <IconClose />
          </Box>
          <Box component='img' src={Homer} sx={homerImg}></Box>
          <Box sx={popupTexto}>
            OMG! <br />
            You did it! <br />
            You made it happen!
          </Box>
        </Box>
      </Box>
      <Box sx={[msg, { opacity: isShowingMsg ? 1 : 0 }]}>
        <Typography sx={[textMsg]}>Thank you for being part of it! </Typography>
      </Box>
      <Box sx={container}>
        <Box component='img' sx={image} />
        <Form />
      </Box>
      <Box sx={links}>
        <Box sx={linkItem} onClick={() => setIsBookmarked(!isBookmarked)}>
          <IconBookmark isBookmarked={isBookmarked} />
          <Link sx={link}>Save for later</Link>
        </Box>
        <Box sx={linkItem}>
          <IconMail />
          <Link
            sx={link}
            href='mailto:?to=&body=Every little helps to make a great idea possible. Check out this project: ########### ,&subject=Check out this awesome project!'
          >
            Tell your friends
          </Link>
        </Box>
      </Box>
    </Fragment>
  );
};

const container = (theme) => ({
  width: '80rem',
  margin: '0 auto',
  display: 'flex',
  boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.2)',
  [theme.breakpoints.down('tablet')]: {
    width: '100%',
    boxShadow: 'none',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const image = (theme) => ({
  width: '40rem',
  backgroundImage: `url(${ImgThePublic})`,
  backgroundSize: 'auto 100%',
  [theme.breakpoints.down('tablet')]: {
    height: '20rem',
    backgroundImage: `url(${ImgThePublicMobile})`,
  },
});

const links = (theme) => ({
  margin: '0 auto',
  marginTop: '1rem',
  width: '80rem',
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('tablet')]: {
    width: '40rem',
  },
});

const linkItem = (theme) => ({
  display: 'flex',
  width: '18rem',
  cursor: 'pointer',
});

const link = (theme) => ({
  width: '18rem',
  textDecoration: 'none',
  fontSize: '1.4rem',
  color: theme.palette.grey.one,
  marginLeft: '1rem',
  '&:visited, &:link': {
    color: theme.palette.grey.one,
  },
  '&:hover ': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down('tablet')]: {
    marginLeft: '.5rem',
  },
});
const msg = (theme) => ({
  width: '80rem',
  height: '5rem',
  margin: '0 auto',
  marginTop: '3rem',
  background: theme.palette.secondary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '.5rem',
  transition: 'opacity .5s linear',
  [theme.breakpoints.down('tablet')]: {
    marginTop: '0',
    width: '100%',
    marginBottom: '0',
    height: '3rem',
  },
});

const textMsg = (theme) => ({
  color: 'white',
  fontWeight: '700',
});

const victory = (theme) => ({
  height: 'calc(100vh - 12rem)',
  minHeight: '50rem',
  width: '100%',
  background: theme.palette.primary.main,
  opacity: 1,
  position: 'absolute',
  zIndex: 3,
  transition: 'all .3s linear',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const closeIcon = (theme) => ({
  position: 'absolute',
  right: '2rem',
  top: '2rem',
  cursor: 'pointer',
});

const popupContainer = (theme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('laptop')]: {
    flexDirection: 'column',
  },
});
const popupTexto = (theme) => ({
  width: '40%',
  fontSize: '9rem',
  color: 'white',
  fontWeight: 500,
  lineHeight: '10rem',
  marginLeft: '3rem',
  [theme.breakpoints.down('laptop')]: {
    fontSize: '7rem',
    lineHeight: '8rem',
  },
  [theme.breakpoints.down('laptop')]: {
    fontSize: '4rem',
    lineHeight: '4rem',
    width: '100%',
    textAlign: 'center',
  },
});

const homerImg = (theme) => ({
  height: '40rem',
  [theme.breakpoints.down('laptop')]: {
    height: '25rem',
    marginBottom: '2rem',
  },
});
