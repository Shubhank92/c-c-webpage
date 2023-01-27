import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import footerimage from '../assets/candc.png'

//ICONS
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const social = [
    { name: 'caseclubecellsxc@gmail.com', icon: EmailIcon},
    { name: "St. Xavier's College, Mumbai, Maharastra 400001, IN", icon: PlaceIcon},
    { name: '+91 9999955555', icon: WhatsAppIcon},
]

function Footer() {

  return (
    <Box component="footer">
      <Paper elevation={1} sx={{ p:5, bgcolor: 'primary' }}>
          <Grid container sx={{width: 'auto', mx: 'auto', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} spacing={2} columns={16}>
            <Grid item  sx={{p:1, textAlign: 'center'}}>
                  <img src={footerimage} alt="C&C Club" style={{width: 'auto', height:'150px', borderRadius: '50%'}}/>
                  <Typography gutterBottom variant="h4" component="div" sx={{whiteSpace: 'normal'}}>
                    Case & Consultancy Club 
                  </Typography>
            </Grid>
            <Grid item  sx={{my: 'auto',  borderTop: 2, borderColor: 'divider', }}>
              {social.map((network) => (
                  <Stack direction="row" sx={{mb: 1, textDecoration: 'none', fontSize: {xs: 16, sm: 20}}} spacing={1} alignItems="center" key={network.name}>
                    <network.icon fontSize={'large'} />
                    <span>{network.name}</span>
                  </Stack>
              ))}
            </Grid>
          </Grid>
      </Paper>
    </Box>
  );
}

export default Footer;