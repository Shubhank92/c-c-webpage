import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';


const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'The Pyramid Principle',
  description:
    "The Pyramid Principle is an effective communication tool to quickly and clearly communicate complex issues to busy business executive", 
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description: 'The E-Cell Case & Consultancy, under the Entrepreneurship Cell & Skill Hub of St. Xavier\'s College (Autonomous), regularly organizes case solving sessions, and guesstimates, about businesses, NGOs, governments and non-profits. These sessions promote strategic and structural thinking, and help incorporate multivariate perspectives.',
  archives: [
    { title: 'Profitability', url: '#' },
    { title: 'Market Page', url: '#' },
    { title: 'Market Growth', url: '#' },
    { title: 'Pricing', url: '#' },
    { title: 'Unconventional', url: '#' },
    { title: 'Guesstimates', url: '#' }
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme(
  {
    typography: {
    fontFamily: [
      "Playfair Display", "Georgia", "Times New Roman", "serif/*rtl:Amiri, Georgia, Times New Roman, serif*/"
    ].join(','),
  }
} 
);

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./posts', false, /\.md$/)).sort().reverse();

export default function Blog() {
  const[posts, setPosts] = useState([]);

  useEffect(() => {
    async function solveMd() {
      const newPosts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text()))).catch((err) => console.error(err));
      setPosts([...newPosts])
    }
    solveMd();
    
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Case & Consulting Club" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Case Examples" posts={posts}/>
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