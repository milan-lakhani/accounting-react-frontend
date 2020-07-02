import React from 'react'
import auth from '../../services/authservice'
class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { 
    };

  }

  logoutUser(){
    auth.logoutUser().then(data=>{
        console.log("data after logging out");
        localStorage.removeItem('user')
        this.props.history.push('/login')
    })
  }

 

  

  render() {
    return (
        <div>
            <h1>Dashboard Works !!</h1>
            <button onClick={this.logoutUser.bind(this)}>Logout</button>
        </div>
    );
  }
}
export default Dashboard;
