import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import Footer from "./layout/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../travel_app/redux/store";
import CardContainer from "./home/CardContainer";
import SearchBar from "./layout/SearchBar";
import ImageCard from "./home/ImageCard";
import ReservationForm from "./choose_trip/reservationForm";
import ChangePassword from "./accounts/ChangePassword";

class App extends Component {
  state = {
    isAuthenticated: false
  };

  componentDidMount() {
    console.log(localStorage);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <SearchBar />
                    <CardContainer />
                  </Fragment>
                )}
              />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/city-selected" component={ReservationForm} />
              <Route exact path="/change_password" component={ChangePassword} />
            </Switch>
            <Footer />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
