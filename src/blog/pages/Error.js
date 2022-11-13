import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Error = () => {

  return (
      <Container maxWidth="lg" sx={{mb: 6}}>
        <Typography variant="h3" align="center" sx={{p:2, fontWeight: '500', borderBottom: 1, borderColor: 'divider'}}>
            Page Does Not Exist
        </Typography>
        <main>
          <Grid container spacing={4} sx={{mt: 1}}>
            {/* CARDS */}
            <Grid item xs={12}>
              <Card sx={{ display: 'flex', p:3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                  <CardContent sx={{ flex: '1 0 auto', justifyContent: 'center' }}>
                    <Typography variant="h5" component="div" textAlign={'center'}>
                        The URL provided does not exist! Refer Back to Home Page
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>            
          </Grid>
        </main>
      </Container>
  )
}

export default Error
