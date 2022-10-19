import Blog from './blog/Home';
import PostsPage from './blog/PostsPage';
import About from './blog/About';
import CaseSturctures from './blog/CaseSturctures';
import TheoryDiscussions from './blog/TheoryDiscussions';
import SelectedCase from './blog/SelectedCase';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Blog/>} index />
        <Route path="/cases" element={<PostsPage />} />
        <Route path='/cases/:caseName' element={<SelectedCase />} />
        <Route path="about" element={<About />} />
        <Route path="theory-dicussions" element={<TheoryDiscussions />} />
        <Route path="case-sturctures" element={<CaseSturctures />} />
    </Routes>
  );
}

export default App;
