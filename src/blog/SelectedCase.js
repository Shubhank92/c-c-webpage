import * as React from 'react';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from './Footer';
import Markdown from './Markdown';

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

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./posts', false, /\.md$/)).sort();

const SelectedCase = () => {
  const[posts, setPosts] = useState([]);
  const { caseName } = useParams();
  let name = caseName;
  if(name.includes('-')) {
    name = name.split("-").join(" ");
  }

  useEffect(() => {
    async function solveMd() {
      const newPosts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text()))).catch((err) => console.error(err));
      const selectedCase = newPosts.filter((item) => {
        if(item.toLowerCase().includes(name)) {
          return item
        }
        return null
      })
      
      setPosts([...selectedCase])
    }
    solveMd();
  }, [name])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={4}>
            {/* CARDS */}
            <Grid item xs={12}>
              <Card sx={{ display: 'flex', p:3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    {/* <Typography component="div" variant="h2" fontWeight='bold'>
                      {name.toUpperCase()}
                    </Typography> */}
                    <Typography variant="h5" component="div">
                      {posts.map((post) => (
                        <Markdown className="markdown" key={post.substring(0, 40)}>
                          {post}
                        </Markdown>
                      ))}
                    </Typography>
                  </CardContent>
                </Box>
                {/* <CardMedia
                  component="img"
                  sx={{ width: 500, height: 300 }}
                  image="https://source.unsplash.com/random"
                  alt="Live from space album cover"
                /> */}
              </Card>
            </Grid>            
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

export default SelectedCase