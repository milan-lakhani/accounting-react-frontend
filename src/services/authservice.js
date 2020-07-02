import axios from 'axios'
import firebaseApp from '../firebase'
  class Auth {
    constructor(){
        // this.apiURL = "https://accounting-backend-1.herokuapp.com/api"
        this.apiURL = "http://localhost:5000/api"
    }

    createUser(username , password , email){

      console.log("Inside create users");

      return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      
       
      // return axios
      // .post(this.apiURL + '/createuser', {
      //   username,
      //   password,
      //   email
      // })
    }

    loginUser(email , password){
      return axios
      .post(this.apiURL + '/signin' , {
        email,
        password
      })
    }
  }

  export default new Auth();