import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Markdown from './Markdown';
import CardMedia from '@mui/material/CardMedia';

//image variable

import appCase from './assets/app-case.png'
import moneyball from './assets/moneyball.png'
import bifurcatedState from './assets/bifurcated-state.png'
import savingZomato from './assets/saving-zomato.png'
import boilerCase from './assets/boiler-case.png'
import crumblingBiscuitsRevenue from './assets/crumbling-biscuits-revenue.png'
import legalPublishingMarket from './assets/legal-publishing-market.png'
import numberOfCoins from './assets/number-of-coins.png'
import olympicResurgence from './assets/olympic-resurgence.png'
import PetFoodCase from './assets/pet-food-case.png'
import StarbucksCase from './assets/starbucks-case.png'
import SwimmingPoolsCase from './assets/swimming-pools-case.png'
import vistaraCase from './assets/vistara-case.png'

let caseImages = [appCase, moneyball, bifurcatedState,savingZomato,boilerCase,crumblingBiscuitsRevenue,legalPublishingMarket,numberOfCoins,olympicResurgence,PetFoodCase,StarbucksCase, SwimmingPoolsCase, vistaraCase]

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./posts/cases', false, /\.md$/)).sort();

const SelectedCase = () => {
  const[posts, setPosts] = useState([]);
  const { caseName } = useParams();
  let name = caseName;
  if(name.includes('-')) {
    name = name.split("-").join(" ");
  }

  let newImage = caseImages.filter((i) => {
    if (i.includes(caseName)) {
      return i
    }
    return null
  });

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
        <main>
          <Grid container sx={{mb: 6, mt: 2}} spacing={4}>
            {/* CARDS */}
            <Grid item xs={12}>
              <Card sx={{ display: 'flex', p:3, flexDirection: 'column' }}>
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
                {newImage === [] ? <hr/> : <CardMedia
                        component="img"
                        sx={{ width: '100%'}}
                        image={newImage[0]}
                        alt={name}
                      />}
            
              </Card>
            </Grid>            
          </Grid>
        </main>
  )
}

export default SelectedCase