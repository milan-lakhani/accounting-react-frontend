import React from 'react'
import auth from '../../services/authservice'
import { Switch, Route ,Link , NavLink } from 'react-router-dom';
import  './dashboard.css';
import $ from 'jquery';
import SalesEntry from '../content/sales/salesentry';
import PurchaseEntry from '../content/purchase/purchaseentry';
import Ledger from '../content/ledger/ledger';
import AddProduct from '../content/addproduct/addproduct';
import AddParty from '../content/addparty/addparty';

class Dashboard extends React.Component {


  constructor() {
    super();
    this.state = { 
    };

    this.currentuser = auth.getCurrentUser();

  }

  componentDidMount() {
    console.log(this.props)
    $(document).ready(function() {
      $(".ui.toggle.button").click(function() {
        $(".mobile.only.grid .ui.vertical.menu").toggle(100);
      });

      $(".switchitem").click(function() {
       
        console.log("path changed")
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
    <div className="ui inverted borderless top fixed fluid menu ">
      
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
        <div className="ui hidden divider"></div>
        <NavLink className="item switchitem" activeClassName="active" to={`${this.props.match.url}/sales`}>Sales</NavLink>
        <NavLink className="item switchitem" activeClassName="active" to={`${this.props.match.url}/purchase`}>Purchase</NavLink>
        <NavLink className="item switchitem" activeClassName="active" to={`${this.props.match.url}/ledger`}>Ledger</NavLink>
      
        <div className="ui hidden divider"></div>
        <NavLink className="item switchitem" activeClassName="active" to={`${this.props.match.url}/addproduct`}>Add Product</NavLink>
        <NavLink className="item switchitem" activeClassName="active" to={`${this.props.match.url}/addparty`}>Add Party</NavLink>
       

        
      </div>
    </div>
    <div className="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column" id="content">
      <div className="ui padded grid">
        <div className="row">
          <h1 className="ui huge dividing header">Dashboard</h1>
        </div>

        <Switch>
        <Route exact path={`${this.props.match.path}/`} component={SalesEntry}/>
        <Route path={`${this.props.match.path}/purchase`} component={PurchaseEntry}/>
        <Route exact path={`${this.props.match.path}/sales`} component={SalesEntry}/>
        <Route exact path={`${this.props.match.path}/addparty`} component={AddParty}/>
        <Route exact path={`${this.props.match.path}/addproduct`} component={AddProduct}/>
        <Route exact path={`${this.props.match.path}/ledger`} component={Ledger}/>
        </Switch>
        
        <div className="ui hidden section divider" />
        
        </div>
    </div>
  </div>
</div>
);
  }
}
export default Dashboard;
