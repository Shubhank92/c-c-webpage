import * as React from 'react';

// COMPONENTS
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

// DATA
import { CasesSummary } from './content/CasesSummaryData';

const PostsPage = () => {

  return (
      <Container maxWidth="lg" sx={{mb: 6}}>
        <Typography variant="h3" align="center" sx={{p:2, fontWeight: '500', borderBottom: 1, borderColor: 'divider'}}>
            Cases
        </Typography>
        <main>
          <Grid container spacing={4} sx={{mt: 1}}>
            {/* CARDS */}

            {CasesSummary.map((item) => {
              if(!item.image) {
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
                            See Solution
                          </Link>
                        </CardContent>
                      </Box>
                    </Card>
                  </Grid>    
                )
              } else {
                return (<Grid item xs={12} key={item.title}>
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
                            See Solution
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
                  </Grid>)
              }  
            }
            )}
          </Grid>
        </main>
      </Container>
  )
}

export default PostsPage