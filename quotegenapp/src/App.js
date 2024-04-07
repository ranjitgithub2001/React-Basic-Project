import React from 'react'
import './App.css'
import axios from 'axios'
class App extends React.Component{
    state={
        advice: ''
    } 

   
    componentDidMount(){
        this.fetchAdvice()
        
    }
    fetchAdvice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {advice}=response.data.slip;
            this.setState({advice})
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    onclickHandle=()=>{
        this.fetchAdvice()
    }
    render(){
        const {advice}=this.state;

        return(
            <>
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.onclickHandle}>
                        <span>GIVE ME ADVICE!!</span>
                    </button>
                </div>
            </div>
            <div className="footer">
                <div className="footer-info">
                    Developed by{" "}
                    <a target="_blank" href="https://github.com/ranjitgithub2001">
                        Ranjit Kale
                    </a>
                </div>
            </div>
          </>
        )
    }
}

export default App