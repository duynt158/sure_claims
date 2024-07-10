"use client"
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Form = styled('form')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    maxWidth: '853px',
    margin: '0 auto',
  }
}));

export const Label = styled('label')(({ theme }) => ({
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '1',
  color: '#DADADA',
  [theme.breakpoints.up('md')]: {
    fontSize: '13px',
  },
  '& span': {
    color: '#FF0000'
  }
}));
export const Input = styled('input')(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '21px',
  fontWeight: '500',
  color: 'white',
  padding: '10px',
  width: '100%',
  border: '1px solid rgba(255, 255, 255, 0.21)',
  background: "transparent",
  [theme.breakpoints.up('md')]: {
    fontSize: '15px',
    padding: '10px 20px',
  }
}));

export const TextArea = styled('textarea')(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '21px',
  fontWeight: '500',
  color: 'white',
  padding: '10px',
  width: '100%',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  background: "rgba(12, 12, 12, 0.4)",
  [theme.breakpoints.up('md')]: {
    fontSize: '15px',
    padding: '10px 20px',
  }
}));

export const Select = styled('select')(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '21px',
  fontWeight: '500',
  color: 'white',
  padding: '10px 18px',
  width: '100%',
  border: '1px solid rgba(255, 255, 255, 0.21)',
  background: "black",
  // appearance: "none",
  position: "relative",
  [theme.breakpoints.up('md')]: {
    fontSize: '15px',
  }
}));

// export const Select = (props: any) => (
//   <CSelect {...props}>
//     {props.children}
//     <KeyboardArrowDownIcon sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(50%)', color: 'white' }} />
//   </CSelect>
// )

export const ErrorAlert = styled(Typography)(({ theme }) => ({
  color: 'red',
  marginTop: '5px',
  paddingLeft: '3px',
  fontSize: '12px'
}));