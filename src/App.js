import StartingNavbar from './components/StartingPage/StartingNavbar'
import About from './components/StartingPage/pages/About'
import Home from './components/StartingPage/pages/Home'



function App() {
  console.log(window.location)

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home 
      break;
    case "/about":
      Component = About  
      break;
    default:
      Component = Home
      break;
  }

  
    return (
      <div className="App">
        <StartingNavbar />
        <Component />
      </div>
    );  
    
  
}

export default App;
