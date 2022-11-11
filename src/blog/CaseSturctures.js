import * as React from 'react';

// COMPONENTS
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

// DATA
import { CaseStructuresSummary } from './content/CaseStructuresSummary';

const CaseStructures = () => {
  return (
      <Container maxWidth="lg" sx={{mb: 6}}>
        <Typography variant="h3" align='center' sx={{p:2, fontWeight: '500', borderBottom: 1, borderColor: 'divider'}}>
            Case Structures
        </Typography>
        <Typography variant="h5" align='center' sx={{p:2, fontWeight: '400', borderBottom: 1, borderColor: 'divider'}}>
            There are two main case types that are predominantly witnessed in case interviews for undergraduate students. The discussion that follows attempts to simplify these two types for the ease of tackling the problems:-
        </Typography>
        <main>
          <Grid container spacing={4} sx={{mt: 1}} >
            {CaseStructuresSummary.map((item) => {
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
  )
}

export default CaseStructures