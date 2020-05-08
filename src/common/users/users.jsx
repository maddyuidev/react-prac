import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  state = {
    user: {
      name: "jaggu"
    }
  };
  render() {
    return <div>Users </div>;
  }
}

const mapStateToProps = state => {
  return {
    users: state
  };
};

export default connect(mapStateToProps)(Users);
