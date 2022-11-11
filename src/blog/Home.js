import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';

// Content
import { CaseExamplesContent, featuredPosts, mainFeaturedPost, sidebar } from './content/HomePageContent';

export default function Home() {
  return (
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
  );
}