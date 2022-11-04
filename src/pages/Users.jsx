import React from 'react';
//import './App.css';
import axios from 'axios';
//componentes locales
import UserForm from '../components/Users/UserForm';
import UserList from '../components/Users/UserList';
import UserSingle from '../components/Users/UserSingle';

class Users extends React.Component {
    
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
        <div className="container-fluid">
            <div className="row">
                <div className="col s12">
                    Menu
                </div>
            </div>
            <div className="row">
                <div className="col s3">
                    <UserList />
                </div>
                <div className="col s9">
                    <UserSingle />
                </div>
            </div>
            <div className="row">
                <div className="col s3">
                    <UserForm />
                </div>
            </div>
        </div>   
      )
    }




}


export default Users;