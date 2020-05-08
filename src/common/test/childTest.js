import React from "react";
import { connect } from "react-redux";

const ChildTest = props => {
  return (
    <div>
      Child Test
      {props.posts.map(post => (
        <span key={post.id}>{post.title}</span>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(ChildTest);
