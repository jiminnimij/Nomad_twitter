import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { 
  Error,
  Input,
  Switcher,
  Title,
  Wrapper,
  Form,
 } from "../components/auth-components";
import GithubButton from "../components/github-btn";

export default function SendPassword() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { target: {name, value} } = e;
    if(name === "email"){
      setEmail(value);
    }
  }
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if(isLoading || email === "" ) return;
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      navigate("/Login");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <Wrapper>
      <Title>Find 𝕏</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <Input type="submit" value={isLoading ? "Sending..." : "Send email"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Back to log in?{" "}
        <Link to="/Login">Log in &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}