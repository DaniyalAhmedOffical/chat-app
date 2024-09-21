import React from "react";
import "./style.css";
import { connect } from "react-redux";
import {  facebook_login } from "../../store/action";



class Home extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log("props==>", props);
  }

  render() {
    // let users = {name : "mohsin" , email :"mohsin@gmail.com"}
    console.log("props==>", this.props);
    return (
      <div>
        <h1>Home</h1>
        <button onClick={() => this.props.facebook_login()}>
          Facebook login
        </button>
          </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  // set_data: (data) => dispatch(set_data(data)),
  facebook_login: () => dispatch(facebook_login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
