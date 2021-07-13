// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import { useHistory } from "react-router-dom";

// // import { useAppContext } from "../libs/contextLib";
// // import { useFormFields } from "../libs/hooksLib";
// // import { onError } from "../libs/errorLib";
// import "./Signup.css";

// export default function Signup() {
//   const [fields, handleFieldChange] = useFormFields({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     confirmationCode: "",
//   });
//   const history = useHistory();
//   const [newUser, setNewUser] = useState(null);
//   const { userHasAuthenticated } = useAppContext();
//   const [isLoading, setIsLoading] = useState(false);

//   function validateForm() {
//     return (
//       fields.email.length > 0 &&
//       fields.password.length > 0 &&
//       fields.password === fields.confirmPassword
//     );
//   }

//   function validateConfirmationForm() {
//     return fields.confirmationCode.length > 0;
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();

//     setIsLoading(true);

//     setNewUser("test");

//     setIsLoading(false);
//   }

//   async function handleConfirmationSubmit(event) {
//     event.preventDefault();

//     setIsLoading(true);
//   }

//   function renderConfirmationForm() {
//     return (
//       <Form onSubmit={handleConfirmationSubmit}>
//         <Form.Group controlId="confirmationCode" size="lg">
//           <Form.Label>Confirmation Code</Form.Label>
//           <Form.Control
//             autoFocus
//             type="tel"
//             onChange={handleFieldChange}
//             value={fields.confirmationCode}
//           />
//           <Form.Text muted>Please check your email for the code.</Form.Text>
//         </Form.Group>
       
//       </Form>
//     );
//   }

//   function renderForm() {
//     return (
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="email" size="lg">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={fields.email}
//             onChange={handleFieldChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="password" size="lg">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={fields.password}
//             onChange={handleFieldChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="confirmPassword" size="lg">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             onChange={handleFieldChange}
//             value={fields.confirmPassword}
//           />
//         </Form.Group>
       
//       </Form>
//     );
//   }

//   return (
//     <div className="Signup">
//       {newUser === null ? renderForm() : renderConfirmationForm()}
//     </div>
//   );
// }





import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import fire from '../firebase.js';

export default function Login(props) 
{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // this.setState({email:email});
    // this.setState({password:password});
// setEmail(email);
// setPassword(password);

    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setEmail(email);
        setPassword(password);
        props.login({email:email,password:password});
        props.history.push('/');
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
        return 
      })

    //   props.login({email:email,password:password});
    //   props.history.push('/');

  }

  function login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    // this.setState({email:email});
    // this.setState({password:password});

    

    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        setEmail(email);
        setPassword(password);
        props.login({email:email,password:password});
      props.history.push('/');
          console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
        return 
      })

      

  }

  return (
    <div style={{ textAlign: 'center' }}>
    <div>
      <div>Email</div>
      <input id="email" placeholder="Enter Email.." type="text"/>
    </div>
    <div>
      <div>Password</div>
      <input id="password" placeholder="Enter Password.." type="text"/>
    </div>
    <button style={{margin: '10px'}} onClick={login}>Login</button>
    <button style={{margin: '10px'}} onClick={signUp}>Sign Up</button>
  </div>
  );
}




// import React from 'react';
// import fire from '../firebase.js';

// class Login extends React.Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {};
//         props=this.props;
//       }
    
//   signUp() {
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;

//     // this.setState({email:email});
//     // this.setState({password:password});

//     fire.auth().createUserWithEmailAndPassword(email, password)
//       .then((u) => {
//         this.props.login({email:email,password:password});
//         this.props.history.push('/');
//         console.log('Successfully Signed Up');
//       })
//       .catch((err) => {
//         console.log('Error: ' + err.toString());
//       })
//   }

//   login() {
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
//     // this.setState({email:email});
//     // this.setState({password:password});

//     fire.auth().signInWithEmailAndPassword(email, password)
//       .then((u) => {
//           this.props.login({email:email,password:password});
//           this.props.history.push('/');
//           console.log('Successfully Logged In');
//       })
//       .catch((err) => {
//         console.log('Error: ' + err.toString());
//       })
//   }

//   render() {
//     return (
//       <div style={{ textAlign: 'center' }}>
//         <div>
//           <div>Email</div>
//           <input id="email" placeholder="Enter Email.." type="text"/>
//         </div>
//         <div>
//           <div>Password</div>
//           <input id="password" placeholder="Enter Password.." type="text"/>
//         </div>
//         <button style={{margin: '10px'}} onClick={this.login}>Login</button>
//         <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
//       </div>
//     )
//   }
// }

// export default Login;





