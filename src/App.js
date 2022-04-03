import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import NoRouting from './components/NoRouting/NoRouting';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="all-components">
        <Routes>
          {/* if you give the path / it's mean that you are remaining in the original or main page */}
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Education' element={<Education></Education>}></Route>
          <Route path='/Friends' element={<Friends></Friends>}></Route>
          <Route path='*' element={<NoRouting></NoRouting>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
