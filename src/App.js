import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'

import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Posts from "./components/posts/Posts";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Resister from "./pages/resister/Resister";
import Post from "./components/post/Post";
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';

function App() {
  const user = false;
  return (
    <BrowserRouter>
     <TopBar />
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/resister" element={user? <Home/> : <Resister />} />
        <Route path="/login" element={user? <Home/> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/write" element={user? <Write /> : <Resister/>} />
        <Route path="/settings" element={user? <Settings /> : <Resister/>} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/*" element={<Error />} />     
     </Routes>
    </BrowserRouter>
  );
}

export default App;
