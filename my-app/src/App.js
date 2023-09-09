
//The component begins by importing the necessary dependencies, which include CSS style, LoginForm and Navigatiion. 

import './style.css';
import './App.css';
import LoginForm from "./LoginForm";
import Navigation from "./Navigation";


//the App component is a root component that defines the structure of the React application. It renders other
//components, such as navigaton menu and login form, to compose the user interface of the app. 
function App() {
  return (
    <div className='top-level-div'>
    
    <div className="App">
    <Navigation/>

    <div className='content'>
    <h2>Welcome to My World!</h2>
    </div>
    <LoginForm/>


    </div>
    </div>
  );
  } 



export default App;
