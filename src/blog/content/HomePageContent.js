import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const CaseExamplesContent = [
    {
        title: 'Moneyball',
        description: "You are thinking of starting a sports coaching center in Mumbai. You have to find a way to set the price of individual subscriptions for memberships at your coaching center. How will you do this?"
    },
    {
        title: 'Bifurcated State',
        description:
        'A state in India has been bifurcated. Calculate the space and cost space of the office of the secretariat.'
    },
    {
        title: 'Saving Zomato',
        description:
        `You’re a consultant hired by the CEO of Zomato. They’ve approached you to reduce their delivery costs. How would you go about doing this?`
    },
    {
        title: 'App Case',
        description:
        `You, being a founder of an app, need 1 lakh students in 1 year. What will be the relevant revenue streams and how will you be reaching this target of achieving one Lakh students?`
    },
    {
        title: 'Vistara Case',
        description:
        `Estimate the number of breakfasts that Vistara needs to prepare for its flights from Delhi in a day.`
    }
];


const mainFeaturedPost = {
  title: 'The Pyramid Principle',
  description:
    "The Case and Consultancy Club of St. Xavier’s College (Autonomous) Mumbai, is immensely proud to present its first ever casebook!", 
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Theory discussions',
    date: 'Nov 12',
    description:
      "Indepth Discussions about Porter's 5 principles, C3C-1P Approach, MECE, 80/20",
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Case Structures',
    date: 'Nov 11',
    description:
      'Two main case types that are predominantly witnessed in case interviews for students.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description: 'The E-Cell Case & Consultancy, under the Entrepreneurship Cell & Skill Hub of St. Xavier\'s College (Autonomous), regularly organizes case solving sessions, and guesstimates, about businesses, NGOs, governments and non-profits. These sessions promote strategic and structural thinking, and help incorporate multivariate perspectives.',
  archives: [
    { title: 'Saving Zomato'},
    { title: 'Crumbling Biscuits Revenue'},
    { title: 'Boiler Case'},
    { title: 'Soya Chip Case'},
    { title: 'Moneyball'},
    { title: 'Legal Publishing Market'},
    { title: 'Pet Food Case'},
    { title: 'Water Powder Case'},
    { title: 'App Case'},
    { title: 'Olympic Resurgence'},
    { title: 'Bifurcated State'},
    { title: 'Starbucks Case'},
    { title: 'Vistara Case'},
    { title: 'Swimming Pools Case'},
    { title: 'No. of coins in a mall'}
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};


const sections = [
  { title: 'About'},
  { title: 'Case Structures' },
  { title: 'Theory Discussions' },
  { title: 'Cases' },
];


export {CaseExamplesContent, mainFeaturedPost, featuredPosts, sidebar, sections}