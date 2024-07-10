"use client"
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '38px',
  lineHeight: '42px',
  color: 'white',
  textAlign: 'center',
  fontFamily: 'russoone',
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
    lineHeight: '55px',
    textAlign: 'left',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '50px',
    lineHeight: '55px',
    textAlign: 'left',
  },
  '& .green': {
    color: '#4A6741'
  },
  '& .yellow': {
    color: '#BCA15F'
  }
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '30px',
  lineHeight: '35px',
  color: '#3F5A36',
  textAlign: 'center',
  fontFamily: 'russoone',
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
    lineHeight: '40px',
    textAlign: 'left',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '40px',
    lineHeight: '50px',
    textAlign: 'left',
  },
}));

export const SectionDescriptionContainer = styled(Box)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '15px',
  lineHeight: '25px',
  color: 'white',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    lineHeight: '30px',
    textAlign: 'left',
  }
}));

export const ContactFormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '13px',
  lineHeight: '21px',
  textAlign: 'center',
  fontFamily: 'russoone',
  color: 'white',
  textTransform: 'uppercase',
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  }
}));