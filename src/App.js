import Home from './blog/Home';
import PostsPage from './blog/PostsPage';
import About from './blog/pages/About';
import CaseSturctures from './blog/CaseSturctures';
import TheoryDiscussions from './blog/TheoryDiscussions';
import SelectedCase from './blog/SelectedCase';
import { Routes, Route } from "react-router-dom";
import IndexPage from './blog/IndexPage';
import SelectedTheoryDiscussions from './blog/SelectedTheoryDiscussion';

function App() {
  return (
    <Routes>
        <Route path="/" element={<IndexPage/>} >
          <Route index path="home" element={<Home />} />
          <Route path="cases" element={<PostsPage />} />
          <Route path="cases/:caseName" element={<SelectedCase />} />
          <Route path="about" element={<About />} />
          <Route path="theory-discussions" element={<TheoryDiscussions />} />
          <Route path="theory-discussions/:articleName" element={<SelectedTheoryDiscussions />} />
          <Route path="case-structures" element={<CaseSturctures />} />
        </Route>
    </Routes>
  );
}

export default App;
