// import React, { useState } from "react";

// const Login = props => {

//   const initialUserState = {
//     name: "",
//     id: "",
//   };

//   const [user, setUser] = useState(initialUserState);

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setUser({ ...user, [name]: value });
//   };

//   const login = () => {
//     props.login(user)
//     props.history.push('/');
//   }

//   return (
//     <div className="submit-form">
//       <div>
//         <div className="form-group">
//           <label htmlFor="user">Username</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             required
//             value={user.name}
//             onChange={handleInputChange}
//             name="name"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="id">ID</label>
//           <input
//             type="text"
//             className="form-control"
//             id="id"
//             required
//             value={user.id}
//             onChange={handleInputChange}
//             name="id"
//           />
//         </div>

//         <button onClick={login} className="btn btn-success">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

export default function Login(props) 
{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event)
   {
    props.login({email,password});
    props.history.push('/');
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}









