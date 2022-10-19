import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import PostsPage from './PostsPage';


function Header(props) {
  const { sections, title,subtitle } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      {/* <Grid direction='column' justifyContent="center" alignItems="center"> */}
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          fontStyle="italic"
          noWrap
          sx={{ flex: 1, p:2 }}
        >
          {title}
          <Typography
            component="h4"
            variant="h6"
            color="inherit"
            align="center"
            fontStyle="italic"
            noWrap
            sx={{ flex: 1 }}
          >
            {subtitle}
          </Typography>
        </Typography>
      {/* </Grid> */}
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        gutterBottom
      >
        {sections.map((section) => (
          <Link 
            component={PostsPage}
            // noWrap
            key={section.title}
            to={`${section.title.split(" ").join("-").toLowerCase()}`}
            style={{ padding: 1, flexShrink: 0, color: 'white' }}
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
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;