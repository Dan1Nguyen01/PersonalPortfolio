
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar'
import Projects from './components/Project'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App()  {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
 
 

export default App;