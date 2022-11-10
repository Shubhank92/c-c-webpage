import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// COMPONENTS
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

// DATA
import { TheoryDiscussionsSummary } from './content/TheoryDiscussionsSummary';

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

const TheoryDiscussions = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h3" align='center' sx={{p:2, fontWeight: '500', borderBottom: 1, borderColor: 'divider'}}>
            Theory Discussions
        </Typography>
        <main>
          <Grid container spacing={4} sx={{mt: 1}} >
            {TheoryDiscussionsSummary.map((item) => {
              console.log(`${item.title.split(" ").join("-").toLowerCase()}`)
              return (
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
                        <Link to={`${item.title.split(" ").join("-").toLowerCase()}`} style={{color: "#f9d342"}}>
                          See More
                        </Link>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>    
              )  
            }
            )}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default TheoryDiscussions