import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Markdown from './Markdown';


const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./posts/theorydiscussions', false, /\.md$/)).sort();

const SelectedTheoryDiscussions = () => {
  const[posts, setPosts] = useState([]);
  const { articleName } = useParams();
  let name = articleName;
  if(name.includes('-')) {
    name = name.split("-").join(" ");
  }

  useEffect(() => {
    async function solveMd() {
      const newPosts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text()))).catch((err) => console.error(err));
      const selectedArticle = newPosts.filter((item) => {
        if(item.toLowerCase().includes(name)) {
          return item
        }
        return null
      })
      
      setPosts([...selectedArticle])
    }
    solveMd();
  }, [name])

  return (
        <main>
          <Grid container spacing={4} sx={{mb: 6, mt: 2}}>
            {/* CARDS */}
            <Grid item xs={12}>
              <Card sx={{ display: 'flex', p:3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                  <CardContent sx={{ flex: '1 0 auto', justifyContent: 'center' }}>
                    <Typography variant="h5" component="div">
                      {posts.map((post) => (
                        <Markdown className="markdown" key={post.substring(0, 40)}>
                          {post}
                        </Markdown>
                      ))}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>            
          </Grid>
    
        </main>
  )
}

export default SelectedTheoryDiscussions