import axios from 'axios'
import firebaseApp from '../firebase'
  class Auth {
    constructor(){
        // this.apiURL = "https://accounting-backend-1.herokuapp.com/api"
        this.apiURL = "http://localhost:5000/api";
        this.firebaseauth = firebaseApp.auth();

       
    }

    logoutUser(){
      return this.firebaseauth.signOut();
    }

    getCurrentUser(){
      return JSON.parse(localStorage.getItem('user'));
    }

    isAuthenticated(){
      var currentuser = this.getCurrentUser();
      console.log("User inside isAuthenticated" , currentuser)
      if(currentuser){
        return true;
      }else{
        return false;
      }
    }

    authChecker(){
      console.log("auth checker called")
      this.firebaseauth.onAuthStateChanged(function(user) {
        console.log("Auth state has changed in firebase with user data as" , user);
        
        if (user) {
          console.log("inside if user" , )
          localStorage.setItem('user' , JSON.stringify(firebaseApp.auth().currentUser))
        } else {
          console.log("inside else" , firebaseApp.auth().currentUser)
          localStorage.removeItem('user')
        }
      });
    }

    createUser(username , password , email){

      console.log("Inside create users");

      return this.firebaseauth.createUserWithEmailAndPassword(email, password)
      
       
      // return axios
      // .post(this.apiURL + '/createuser', {
      //   username,
      //   password,
      //   email
      // })
    }

    loginUser(email , password){
      // return axios
      // .post(this.apiURL + '/signin' , {
      //   email,
      //   password
      // })

      return this.firebaseauth.signInWithEmailAndPassword(email, password);


    }
  }

  export default new Auth();