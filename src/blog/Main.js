import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Link} from 'react-router-dom'


function Main(props) {
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8} >
      <Typography variant="h3" fontWeight="bold" fontStyle="italic" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
          <Grid item xs={12} key={post.title} sx={{mb: 4}}>
            <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div" gutterBottom>
                    {post.description}
                  </Typography>
                  <Link to={`/cases/${post.title.split(" ").join("-").toLowerCase()}`}
                  style={{display: 'block', marginTop: 10, color: 'rgb(249, 211, 66)', textDecoration: 'none'}}
                  >
                  {/* <Typography variant="subtitle1" color="#f9d342" mt={2} component="div"> */}
                    See Solution
                  {/* </Typography> */}
                  </Link>
                </CardContent>
              </Box>        
            </Card>
          </Grid>
      ))}
    </Grid>

  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;


// function Main(props) {
//   const { posts, title } = props;
//   console.log(posts)
//   return (
//     <Grid container xs={12} md={8} sx={{}}>
//       <Typography item variant="h3" fontWeight="bold" fontStyle="italic" gutterBottom>
//         {title}
//       </Typography>
//       <Divider />
//       {posts.map((post) => (
//           <Grid item xs={12} key={post.title}>
//             <Card sx={{ display: 'flex' }}>
//               <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
//                 <CardContent sx={{ flex: '1 0 auto' }}>
//                   <Typography component="div" variant="h5" gutterBottom>
//                     {post.title}
//                   </Typography>
//                   <Typography variant="subtitle1" color="text.secondary" component="div">
//                     {post.description}
//                   </Typography>
//                   <Link to={`/cases/${post.title.split(" ").join("-").toLowerCase()}`}>
//                   {/* <Typography variant="subtitle1" color="#f9d342" mt={2} component="div"> */}
//                     See Solution
//                   {/* </Typography> */}
//                   </Link>
//                 </CardContent>
//               </Box>        
//             </Card>
//           </Grid>
//       ))}
//     </Grid>

//   );
// }
