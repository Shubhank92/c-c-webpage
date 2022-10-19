import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from './Footer';
import {Link} from 'react-router-dom'
import { CasesSummary } from './content/CasesSummaryData';

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

const PostsPage = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <h1>CASES</h1>
        <main>
          <Grid container spacing={4}>
            {/* CARDS */}

            {CasesSummary.map((item) => (
              <Grid item xs={12} key={item.title}>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {item.description}
                      </Typography>
                      <Link to={`${item.title.split(" ").join("-").toLowerCase()}`}>
                      {/* <Typography variant="subtitle1" color="#f9d342" mt={2} component="div"> */}
                        See Solution
                      {/* </Typography> */}
                      </Link>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: '40%'}}
                    image={item.image}
                    alt={item.imageLabel}
                  />
                </Card>
              </Grid>              
            ))}


          
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}

export default PostsPage