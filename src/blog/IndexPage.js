import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

//Content
import { sections } from './content/HomePageContent';

const theme = createTheme({
    typography: {
      fontFamily: [
        "Playfair Display", "Georgia", "Times New Roman", "serif/*rtl:Amiri, Georgia, Times New Roman, serif*/"
      ].join(','),
    },
    palette: {
      mode: 'dark',
      // primary: '#f9d342'
    }
} 
);

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Case & Consultancy Club" subtitle="Entrepreneurship Cell, St.Xavier's College, Mumbai" sections={sections} />
        <Outlet/>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}