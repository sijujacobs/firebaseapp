import React from "react";

const SignIn = (props) => {
  return (
    <div className="signIn">
      <h2 className="title">Sign In</h2>
      <input type="text" className="username" />
      <input type="text" className="password" />
      <button className="authButton">Sign In</button>
    </div>
  );
};

export default SignIn;
