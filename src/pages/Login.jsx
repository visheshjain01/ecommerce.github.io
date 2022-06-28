import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2)
  ),
    url("https://burst.shopifycdn.com/photos/male-model-posing-outdoors.jpg?width=925&format=pjpg&exif=1&iptc=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  margin-left: 400px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  width: 80%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Foot = styled.div`
  margin-top: 10px;
`
const Butt = styled.button`
  outline: none;
  border: none;
  background-color: white;
  font-size: 20px;
  font-weight: 500px;
  color: purple;
`
const Error = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
`

const Login = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }

    setErrorMsg("");

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {        
        navigate("/");
      })

      .catch((err) => {
        setErrorMsg(err.message.substr(9));
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
          <Input onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} placeholder="email" />
          <Input onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} placeholder="password" />
          <Error>{errorMsg}</Error>
          <Button onClick={handleSubmission} >LOGIN</Button>
          <Foot>Don't have an account? <span><Link to="/register"><Butt>Create an account</Butt></Link></span></Foot>
      </Wrapper>
    </Container>
  );
};

export default Login;