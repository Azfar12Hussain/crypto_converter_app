<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
import './App.css' ;
class App extends React.Component {
  state = { advice: '' };

  componentDidMount() {
    this.fatchAdvice();
  
  }
  fatchAdvice = () => {
     axios.get('https://api.adviceslip.com/advice').
           then((response) => {
            const { advice } = response.data.slip;
            this.setState({advice});


           }).catch((error) => {
            console.log(error);

           });
  }

  render() {
    const { advice } = this.state;
    return (  
       <div className='app'>
        <div className='card'>
             <h1 className='heading'>{advice}</h1>
             <button className='button' onClick={this.fatchAdvice}>
                <span>Give Me Advice</span>
             </button>
        </div>
       </div> 
    );
  }
}

export default App;

=======

import './App.css';
import Converter1 from './Converter1';
function App() {
  return (
    <div className="App">
      <Converter1 />
    </div>
  );
}

export default App;
>>>>>>> 7f17224 (updated code)
