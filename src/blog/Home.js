import * as React from 'react';
// import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

// Content
import { CaseExamplesContent, featuredPosts, mainFeaturedPost, sidebar, sections } from './content/HomePageContent';

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

// const importAll = (r) => r.keys().map(r);
// const markdownFiles = importAll(require.context('./posts', false, /\.md$/)).sort().reverse();

export default function Blog() {
  // const[posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function solveMd() {
  //     const newPosts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text()))).catch((err) => console.error(err));
  //     setPosts([...newPosts])
  //   }
  //   solveMd();
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Case & Consultancy Club" subtitle="Entrepreneurship Cell, St.Xavier's College, Mumbai" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ w: 1 ,mt: 3 }}>
            <Main title="Case Examples" posts={CaseExamplesContent}/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}