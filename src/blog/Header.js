import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import { Grid } from '@mui/material';

function Header(props) {
  const { sections, title, subtitle } = props;
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Grid container direction='column' justifyContent="center" alignItems="center" sx={{p: {xs:0, sm:0, md: 1}}}>
          <Grid item>
            <Typography component="h2" variant="h4" color="inherit" align="center" fontStyle="italic" noWrap sx={{ flex: 1, fontSize: {xs: 17, sm: 30, md: 40} }}>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h4" variant="h6" color="inherit" align="center" fontStyle="italic" noWrap sx={{ flex: 1, fontSize: {xs: 12, sm: 18, md: 25} }} >
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-evenly', overflowX: 'auto', borderBottom: 1, borderColor: 'divider', fontSize: {xs: 12, sm: 18} }}
      >
        {sections.map((section) => (
          <Link 
            key={section.title}
            to={section.title === 'Home' ? '/' : `${section.title.split(" ").join("-").toLowerCase()}`}
            style={{ p: 1, flexShrink: 0, color: 'white' }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;