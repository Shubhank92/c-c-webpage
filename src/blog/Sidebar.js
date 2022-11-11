import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import SidebarArchives from './components/SidebarArchives';
// import { Link as RoutingLink} from 'react-router-dom'

function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={1} sx={{ p:2, bgcolor: 'primary' }}>
        <Typography variant="h5" fontWeight="bold" fontStyle="italic" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h5" fontWeight="bold" fontStyle="italic" gutterBottom sx={{ mt: 3 }}>
        Case Archives
      </Typography>
      <SidebarArchives archives={archives} />


      <Typography variant="h5" fontWeight="bold" fontStyle="italic" gutterBottom sx={{ mt: 3 }}>
        Socials
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href={network.url}
          key={network.name}
          target="blank"
          sx={{ mb: 0.5, color: 'rgb(249, 211, 66)', textDecoration: 'none' }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;