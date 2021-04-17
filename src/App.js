import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Particles from 'react-particles-js';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';

function App() {
  return (
      <>
        {/* <Particles 
          params = {{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900
                }
              }
            }
          }}
        /> */}
        <Navbar />
        <Header />
        <About />
      </>
  );
}

export default App;
