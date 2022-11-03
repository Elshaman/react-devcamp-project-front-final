import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    
  //constructor de la clase 
  constructor(props){
      super(props)
      this.state={
        users: [],
        currentUser: {}
      }
      this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
    }

    //metodo de estado: componentDidMount
    componentDidMount(){
      const url = 'http://localhost:5050/api/v1/bootcamps'
      axios.get(url)
        .then((response)=>{
          this.setState({
            users: response.data
          })
        })
        .catch((error)=>{
          console.log(error)
        })
    }


    updateCurrentPlayer(item){
      this.setState({
        currentUser: item
      })
    }



    render(){
      return(
        <>My APP</>
      )
    }




}

export default App;
