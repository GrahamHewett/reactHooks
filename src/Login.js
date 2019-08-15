import React, { useState }from "react";

export default function Login() {
  const [isLoggedIn, setLogin] = useState(false);
  let wordDisplay;
  if (isLoggedIn) {
    wordDisplay = "in";
  } else {
    wordDisplay = "out";
  }
  return (
    <div>
      <h1>You are currently logged {wordDisplay}</h1>
      <button onClick={() => setLogin(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

// class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = { isLoggedIn: false };
//   }
//   render() {
//     let { isLoggedIn } = this.state;
//     return (
//       <div>
//         <p>You are currently logged {isLoggedIn ? "in" : "out"}</p>
//         <button onClick={() => this.setState({ isLoggedIn: !isLoggedIn })}>
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>
//       </div>
//     );
//   }
// }

// function Example() {
//     // Declare a new state variable, which we'll call "count"
//     const [count, setCount] = useState(0);
  
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click me
//         </button>
//       </div>
//     );
//   }