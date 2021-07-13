import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";
import Signup from "./components/Signup";
import fire from './firebase.js';



function App() {
  
  const [user, setUser] = React.useState({email:"",password:""});

  async function login(user = null) {
    setUser(user);
  }

  async function logout() 
  {

    fire.auth().signOut().then(function() {
    console.log("Sign-out successful.");
    }, function(error) {
      console.log("An error happened");
      // An error happened.
    });
    
    setUser({email:"",password:""});
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item" >
            { user.email ? (
             
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.email}
              </a>
               
            
            ) : (   

              <div>
              <Link to={"/Signup"} className="nav-link">
               SIGNUP
              </Link>

            <Link to={"/login"} className="nav-link">
              Login
            </Link>
            </div>

            )}

          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route 
            path="/restaurants/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route 
            path="/restaurants/:id"
            render={(props) => (
              <Restaurant {...props} user={user} />
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
          <Route 
            path="/Signup"
            render={(props) => (
              <Signup {...props} login={login} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;