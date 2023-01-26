import { Box, Link, Typography } from '@mui/material';
import { useContext, useRef, useState } from 'react';
import { Balloon } from './Balloon.component';
import { daysLeft } from '../utils/utils';
import useLocalStorageState from '../hooks/useLocalStorageState';
import { PageContext } from '../contexts/Page.context';

export const Form = (props) => {
  const { cashAmount, setCashAmount, setIsShowingMsg } =
    useContext(PageContext);
  const [donors, setDonors] = useLocalStorageState('donors', 0);
  const target = 250;
  const dateTarget = '2023-03-01T00:00:00';

  const [cashField, setCashField] = useState(0);
  const [msgAlert, setMsgAlert] = useState(false);
  const [msg, setMsg] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [showText, setShowtext] = useState(false);

  const daystogo = daysLeft(dateTarget);
  const scaleCash = useRef(0);
  const inputRef = useRef();

  // handle and run verification of form input
  const handleChange = (e) => {
    if (e.target.value > 0) {
      setIsDisabled(false);
      if (e.target.value > 250) {
        setIsDisabled(true);
        setMsgAlert(true);
        setMsg('You should enter an amount lower than $250.');
      } else {
        setMsgAlert(false);
        setMsg('');
      }
    } else {
      setIsDisabled(true);
      setMsgAlert(false);
      setMsg('');
    }
    setCashField(e.target.value);
  };

  // handle submit button
  const handleDonation = (e) => {
    e.preventDefault();
    inputRef.current.value = '';
    let cash = parseFloat(cashField) + parseFloat(cashAmount);
    setCashAmount(cash.toFixed(2));
    setDonors(donors + 1);
    setCashField(0);
    setIsDisabled(true);

    setIsShowingMsg(true);
    setTimeout(popup, 4000);
  };

  const popup = () => {
    setIsShowingMsg(false);
  };

  // handle donation scale porcentage
  scaleCash.current = Math.floor(
    ((target - (target - cashAmount)) * 100) / target
  );

  // handle messages depending on the amount of donors
  const donorsMessage = () => {
    if (donors === 0) {
      return 'Be the first one to donate.';
    } else if (donors === 1) {
      return 'Join the other donor who have already supported this project. Every dollar helps.';
    } else {
      return `Join the ${donors} other donors who have already supported this project. Every dollar helps.`;
    }
  };

  // calculate the amount of money to reach the target
  const cashToGo = () => {
    let cash = target - cashAmount;
    if (cash % 1 > 0) {
      return cash.toFixed(2);
    } else {
      return cash;
    }
  };

  return (
    <Box sx={container}>
      <Box sx={balloon}>
        {cashAmount >= 250 ? (
          <Typography variant='body' sx={balloonTxt}>
            We've reached <strong>${cashAmount}</strong>!
          </Typography>
        ) : (
          <Typography variant='body' sx={balloonTxt}>
            <strong>${cashToGo()}</strong> still needed for this project
          </Typography>
        )}

        <Balloon cash={cashAmount} />
      </Box>
      <Box sx={ruler}>
        <Box sx={[measurement, { width: `${scaleCash.current}%` }]}></Box>
      </Box>
      <Box sx={content}>
        <Typography variant='body' sx={text}>
          <span style={{ color: '#E25041' }}>
            <strong>{daystogo} </strong>
          </span>
          to fund this project.
        </Typography>
        <Box sx={margin} />
        <Box sx={donorsContainer}>
          <Typography variant='body' sx={[text, { fontWeight: '600' }]}>
            {donorsMessage()}
          </Typography>
        </Box>
        <form>
          <Box sx={[message, { color: msgAlert && '#E25041' }]}>{msg}</Box>
          <Box sx={form}>
            <span
              style={{
                fontSize: '2.5rem',
                marginBottom: '1.2rem',
                marginRight: '-4.5rem',
                zIndex: 2,
              }}
            >
              $
            </span>
            <input
              type='number'
              min='0.01'
              step='0.01'
              max='250'
              maxLength='3'
              onChange={handleChange}
              ref={inputRef}
            />
            <Box
              component='button'
              disabled={isDisabled}
              sx={btn}
              onClick={handleDonation}
            >
              Give now
            </Box>
          </Box>
          <br />
          <Box sx={{ display: 'flex' }}>
            <Link
              variant='body1'
              sx={link}
              onMouseLeave={() => setShowtext(false)}
              onMouseEnter={() => setShowtext(true)}
            >
              {cashField > 0 ? `Why give $${cashField}?` : 'Why give money?'}
            </Link>
            <Typography
              variant='body2'
              sx={{
                marginLeft: '1rem',
                opacity: showText ? 1 : 0,
                transition: 'Opacity .5s linear',
              }}
            >
              Because every little helps.
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

const container = (theme) => ({
  width: '40rem',
  padding: '2.5rem 2rem 0 2rem',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('tablet')]: {
    paddingTop: '1rem',
    paddingBottom: '0',
  },
});

const balloon = (theme) => ({
  width: '36rem',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
});

const balloonTxt = (theme) => ({
  position: 'absolute',
  color: 'white',
  transform: 'translateY(1.8rem)',
  fontSize: '1.6rem',
});

const ruler = (theme) => ({
  width: '36rem',
  height: '1rem',
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '1rem',
  background: theme.palette.grey.six,
  borderRadius: '5rem',
  border: `2px solid ${theme.palette.grey.six}`,
});

const measurement = (theme) => ({
  height: '.6rem',
  background: theme.palette.secondary.main,
  borderRadius: '5rem',
});

const content = (theme) => ({
  padding: '2rem',
  [theme.breakpoints.down('tablet')]: {
    paddingTop: '1rem',
  },
});

const text = (theme) => ({
  color: theme.palette.grey.two,
  fontSize: '1.6rem',
  margin: '0 auto',
  [theme.breakpoints.down('tablet')]: {
    lineHeight: '2rem',
  },
});

const donorsContainer = (theme) => ({
  height: '5rem',
  [theme.breakpoints.down('tablet')]: {
    height: '3rem',
  },
});

const form = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '1.5rem',
  alignItems: 'flex-end',
  '& input': {
    width: '15rem',
    height: '6rem',
    borderRadius: '3px 3px 0 0',
    border: `2px solid ${theme.palette.grey.six}`,
    borderBottom: `2px solid ${theme.palette.grey.six}`,
    fontSize: '3rem',
    fontWeight: '600',
    color: theme.palette.tertiary.main,
    paddingLeft: '2.5rem',
    transition: 'all .5s linear',
    '&:focus': {
      outline: 'none',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  '& label': {
    position: 'absolute',
    fontSize: '2.5rem',
    fontWeight: '400',
    transform: 'translateY(-1.2rem) translateX(1rem)',
  },
});

const btn = (theme) => ({
  width: '15rem',
  height: '6rem',
  borderRadius: '3px',
  border: `2px solid ${theme.palette.secondary.main}`,
  fontSize: '2rem',
  background: theme.palette.secondary.main,
  color: 'white',
  cursor: 'pointer',
  transition: 'all .3s linear',
  '&:disabled': {
    background: theme.palette.grey.five,
    border: `2px solid ${theme.palette.grey.five}`,
    cursor: 'default',
  },
  '&:hover:enabled': {
    boxShadow: '2px 2px 5px 0 rgba(0,0,0,.3)',
    background: theme.palette.secondary.light,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  '&:active:enabled': {
    boxShadow: 'inset 2px 2px 5px 0 rgba(0,0,0,.3)',
    background: theme.palette.secondary.dark,
    border: `2px solid ${theme.palette.secondary.dark}`,
  },
});

const link = (theme) => ({
  fontSize: '1.4rem',
  fontStyle: 'italic',
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  cursor: 'pointer',
  '&:visited, &:link, &:hover ': {
    color: theme.palette.secondary.main,
  },
  [theme.breakpoints.down('tablet')]: {
    marginLeft: '.3rem',
  },
});

const message = (theme) => ({
  fontSize: '1.2rem',
  height: '2rem',
  minWidth: '2rem',
  marginTop: '2rem',
  marginBotom: 0,
  paddingBottom: 0,
});

const margin = (theme) => ({
  marginTop: '2rem',
  [theme.breakpoints.down('tablet')]: {
    marginTop: '.5rem',
  },
});
