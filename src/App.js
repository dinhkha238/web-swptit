import {Routes, Route, Switch,Link} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Infor from './pages/Infor';
import Member from './pages/member';
import Contact from './pages/contact';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Infor' element = {<Infor/>}/>
        <Route path='/Member' element = {<Member/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
