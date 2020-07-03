import React from 'react'
import auth from '../../services/authservice'
import  './dashboard.css';
import $ from 'jquery';
class Dashboard extends React.Component {


  constructor() {
    super();
    this.state = { 
    };

    this.currentuser = auth.getCurrentUser();

  }

  componentDidMount() {
    $(document).ready(function() {
      $(".ui.toggle.button").click(function() {
        $(".mobile.only.grid .ui.vertical.menu").toggle(100);
      });
    });
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
  <div className="ui tablet computer only padded grid">
    <div className="ui inverted borderless top fixed fluid menu">
      <a className="header item">Accounting</a>
      <div className="right menu">
        <div className="item">Hello, {this.currentuser.displayName}</div>
        <a className="item" onClick={this.logoutUser.bind(this)}>Logout</a>
        
        
      </div>
    </div>
  </div>
  <div className="ui mobile only padded grid">
    <div className="ui top fixed borderless fluid inverted menu">
      <a className="header item">Project Name</a>
      <div className="right menu">
        <div className="item">
          <button className="ui icon toggle basic inverted button">
            <i className="content icon" />
          </button>
        </div>
      </div>
      <div className="ui vertical borderless inverted fluid menu">
      <div className="item">Hello, {this.currentuser.displayName}</div>
      <a className="item" onClick={this.logoutUser.bind(this)}>Logout</a>
      
      </div>
    </div>
  </div>
  <div className="ui padded grid">
    <div className="three wide tablet only three wide computer only column" id="sidebar">
      <div className="ui vertical borderless fluid text menu">
        <a className="active item">Overview</a> <a className="item">Reports</a>
        <a className="item">Analytics</a> <a className="item">Export</a>
        <div className="ui hidden divider" />
        <a className="item">Nav item</a> <a className="item">Nav item again</a>
        <a className="item">One more nav</a> <a className="item">Another nav item</a>
        <a className="item">More navigation</a>
        <div className="ui hidden divider" />
        <a className="item">Macintosh</a> <a className="item">Linux</a>
        <a className="item">Windows</a>
      </div>
    </div>
    <div className="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column" id="content">
      <div className="ui padded grid">
        <div className="row">
          <h1 className="ui huge dividing header">Dashboard</h1>
        </div>
        <div className="center aligned row">
          <div className="eight wide mobile four wide tablet four wide computer column">
            <img className="ui centered small circular image" src="./static/images/wireframe/square-image.png" />
            <div className="ui large basic label">Label</div>
            <p>Something else</p>
          </div>
          <div className="eight wide mobile four wide tablet four wide computer column">
            <img className="ui centered small circular image" src="./static/images/wireframe/square-image.png" />
            <div className="ui large basic label">Label</div>
            <p>Something else</p>
          </div>
          <div className="eight wide mobile four wide tablet four wide computer column">
            <img className="ui centered small circular image" src="./static/images/wireframe/square-image.png" />
            <div className="ui large basic label">Label</div>
            <p>Something else</p>
          </div>
          <div className="eight wide mobile four wide tablet four wide computer column">
            <img className="ui centered small circular image" src="./static/images/wireframe/square-image.png" />
            <div className="ui large basic label">Label</div>
            <p>Something else</p>
          </div>
        </div>
        <div className="ui hidden section divider" />
        <div className="row">
          <h1 className="ui huge dividing header">Section title</h1>
        </div>
        <div className="row">
          <table className="ui single line striped selectable unstackable table">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>Integer</td>
                <td>nec</td>
                <td>odio</td>
                <td>Praesent</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>libero</td>
                <td>Sed</td>
                <td>cursus</td>
                <td>ante</td>
              </tr>
              <tr>
                <td>1,004</td>
                <td>dapibus</td>
                <td>diam</td>
                <td>Sed</td>
                <td>nisi</td>
              </tr>
              <tr>
                <td>1,005</td>
                <td>Nulla</td>
                <td>quis</td>
                <td>sem</td>
                <td>at</td>
              </tr>
              <tr>
                <td>1,006</td>
                <td>nibh</td>
                <td>elementum</td>
                <td>imperdiet</td>
                <td>Duis</td>
              </tr>
              <tr>
                <td>1,007</td>
                <td>sagittis</td>
                <td>ipsum</td>
                <td>Praesent</td>
                <td>mauris</td>
              </tr>
              <tr>
                <td>1,008</td>
                <td>Fusce</td>
                <td>nec</td>
                <td>tellus</td>
                <td>sed</td>
              </tr>
              <tr>
                <td>1,009</td>
                <td>augue</td>
                <td>semper</td>
                <td>porta</td>
                <td>Mauris</td>
              </tr>
              <tr>
                <td>1,010</td>
                <td>massa</td>
                <td>Vestibulum</td>
                <td>lacinia</td>
                <td>arcu</td>
              </tr>
              <tr>
                <td>1,011</td>
                <td>eget</td>
                <td>nulla</td>
                <td>Class</td>
                <td>aptent</td>
              </tr>
              <tr>
                <td>1,012</td>
                <td>taciti</td>
                <td>sociosqu</td>
                <td>ad</td>
                <td>litora</td>
              </tr>
              <tr>
                <td>1,013</td>
                <td>torquent</td>
                <td>per</td>
                <td>conubia</td>
                <td>nostra</td>
              </tr>
              <tr>
                <td>1,014</td>
                <td>per</td>
                <td>inceptos</td>
                <td>himenaeos</td>
                <td>Curabitur</td>
              </tr>
              <tr>
                <td>1,015</td>
                <td>sodales</td>
                <td>ligula</td>
                <td>in</td>
                <td>libero</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
);
  }
}
export default Dashboard;
