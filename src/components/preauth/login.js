import React from 'react';
import auth from '../../services/authservice';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    auth.authChecker();
  }

  submitForm(e) {
    e.preventDefault();
    console.log('Login Form submitted');
    auth
      .loginUser(this.state.email, this.state.password)
      .then((data) => {
        
        if(data.user){
          localStorage.setItem('user' , JSON.stringify(data.user))
          console.log(data);this.props.history.push('/dashboard')
        }
      })
      .catch((err) => {
        // console.log('inside err', err);
        window.alert(err.message)
      });
  }

  render() {
    return (
      <div className='page-login' style={{ marginTop: '50px' }}>
        <div className='ui centered grid container'>
          <div className='one column row'>
            <h2 className='ui centered'>Login</h2>
          </div>
          <div className='nine wide column'>
            <div className='ui fluid card'>
              <div className='content'>
                <form className='ui form' onSubmit={this.submitForm.bind(this)}>
                  <div className='field'>
                    <label>Email</label>
                    <input
                      type='text'
                      name='user'
                      onChange={(e) => this.setState({ email: e.target.value })}
                      placeholder='User'
                    />
                  </div>
                  <div className='field'>
                    <label>Password</label>
                    <input
                      type='password'
                      name='pass'
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      placeholder='Password'
                    />
                  </div>
                  <button
                    className='ui primary labeled icon button'
                    type='submit'
                  >
                    <i className='unlock alternate icon' />
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='one column row'>
            <div>
              Not a User? <a href='/register'>Register</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
