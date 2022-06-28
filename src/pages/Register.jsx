import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2)
  ),
    url("https://images.pexels.com/photos/8562239/pexels-photo-8562239.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position-x: 430px;
`;

const Wrapper = styled.div`
  width: 430px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-right: 320px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  width: 70%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Foot = styled.div`
  margin-top: 20px;
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
  margin-bottom: 15px;
`

const Register = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/login");
      })
      .catch((err) => {
        setErrorMsg(err.message.substr(9));
      });
  };


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
          <Input onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} placeholder="name" />
          <Input onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} placeholder="email" />
          <Input onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} placeholder="password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Error>{errorMsg}</Error>
          <Button onClick={handleSubmission}> CREATE </Button>
          <Foot>Already have an account? <span><Link to="/login"><Butt>Login</Butt></Link></span></Foot>
      </Wrapper>
    </Container>
  );
};

export default Register;