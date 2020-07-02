import React from 'react';
import auth from '../../services/authservice';
import history from '../../utilities/history'
var Loader = require('react-loader');
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      isEmailTrue: false,
      isPasswordTrue: false,
      isRPassSame: false,
      isUsernameTrue: true,
      allCredentials: false,
      loaded: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  checkAllCredentials() {
    
    return (
      this.state.isEmailTrue &&
      this.state.isPasswordTrue &&
      this.state.isRPassSame &&
      this.state.isUsernameTrue
    );
  }

 

  handleInputChange(e) {
    let target = e.target;
    let value = target.value;
    if (target.name === 'email') {
      console.log('email');
      if (value.includes('@') && value.includes('.')) {
        console.log('email OK');
        this.setState({
          isEmailTrue: true,
          email: target.value,
        });
      } else {
        this.setState({
          isEmailTrue: false,
          email: target.value,
        });
      }

      if (this.checkAllCredentials()) {
        this.setState({
          allCredentials: true,
        });
      } else {
        if (this.state.allCredentials) {
          this.setState({
            allCredentials: false,
          });
        }
      }
    } else if (target.name === 'pass') {
      let passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      console.log('Pass');
      if (target.value.match(passregex)) {
        console.log('pass OK');
        this.setState({
          isPasswordTrue: true,
          password: target.value,
        });
      } else {
        console.log('Pass NOT ok');
        this.setState({
          isPasswordTrue: false,
          password: target.value,
        });
      }

      if (this.checkAllCredentials()) {
        this.setState({
          allCredentials: true,
        });
      } else {
        if (this.state.allCredentials) {
          this.setState({
            allCredentials: false,
          });
        }
      }
    } else if (target.name === 'rpass') {
      console.log('RPass');
      if (this.state.password === target.value) {
        console.log('Rpass OK');
        this.setState({
          isRPassSame: true,
        });
      } else {
        console.log('RPass NOT ok');
        this.setState({
          isRPassSame: false,
        });
      }

      if (this.checkAllCredentials()) {
        console.log('every thing is true');
        this.setState({
          allCredentials: true,
        });
      } else {
        console.log('everything not true');
        if (this.state.allCredentials) {
          this.setState({
            allCredentials: false,
          });
        }
      }
    } else {
      console.log('username');
      if (target.value.length > 5) {
        this.setState({
          isUsernameTrue: true,
          username: target.value,
        });
      } else {
        this.setState({
          isUsernameTrue: false,
          username: target.value,
        });
      }

      if (this.checkAllCredentials()) {
        this.setState({
          allCredentials: true,
        });
      } else {
        if (this.state.allCredentials) {
          this.setState({
            allCredentials: false,
          });
        }
      }
    }
  }

  submitForm(e) {
    this.setState({
      loaded : false
    })
    e.preventDefault();
    console.log('Form submitted');
    if (this.state.allCredentials) {
      auth
        .createUser(this.state.username, this.state.password, this.state.email)
        .then((data) => {
          
          console.log(data);
          this.setState({
            loaded : true
          });
          window.alert("User has registered sucessfully");
          this.props.history.push('/login');
          
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            loaded : true
          })
          window.alert("Srry there was an error", err);
        });
    } else {
      alert('Provide with correct credentials');
    }
  }

  render() {
    return (
      <div>
        <Loader loaded={this.state.loaded}>
          <div className='page-login' style={{ marginTop: '50px' }}>
            <div className='ui centered grid container'>
              <div className='one column row'>
                <h2 className='ui centered'>Register</h2>
              </div>
              <div className='nine wide column'>
                <div className='ui fluid card'>
                  <div className='content'>
                    <form
                      className='ui form'
                      onSubmit={this.submitForm.bind(this)}
                    >
                      <div className='field'>
                        <label>User Name :</label>
                        <input
                          type='text'
                          name='user'
                          onChange={this.handleInputChange}
                          placeholder='Enter username'
                        />
                      </div>
                      <div className='field'>
                        <label>Email :</label>
                        <input
                          type='email'
                          name='email'
                          onChange={this.handleInputChange}
                          placeholder='email'
                        />
                      </div>
                      <div className='field '>
                        <label>Password :</label>
                        <input
                          type='password'
                          name='pass'
                          onChange={this.handleInputChange}
                          placeholder='Password'
                        />
                      </div>
                      <div className='field'>
                        <label> Re-enter Password :</label>
                        <input
                          type='password'
                          name='rpass'
                          onChange={this.handleInputChange}
                          placeholder='Re-enter Password'
                        />
                      </div>
                      <button
                        className='ui primary labeled icon button'
                        type='submit'
                        disabled={!this.state.allCredentials}
                      >
                        <i className='unlock alternate icon' />
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className='one column row'>
                <div>
                  Not a User? <a href='/login'> login</a>
                </div>
              </div>
            </div>
          </div>
        </Loader>
      </div>
    );
  }
}
export default Register;
