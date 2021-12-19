import { BlueButtonLink } from "./BlueButton";
import React from "react";
import { Input } from "./Input";
import styled from "styled-components";
import axios from "axios";
import { Component } from "react";

  const Header1 = styled.h1`
    font-size: 1.8rem;
    margin-bottom: 20px;
  `;
  const Container = styled.div`
    padding: 30px 20px;
  `;
export class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state= {
      username :"",
      password: "",
    }
  }
  login() {
    axios.post("http://localhost:3030/", {
      email: this.state.email,
      password: this.state.password,
    });
  }
  render() {
    return (
      <Container>
        <Header1>Login</Header1>
        <Input
          placeholder={"Email"}
          type={"email"}
          value={this.state.email}
          onChange={(ev) => this.setState({ email: ev.target.value })}
        />
        <Input
          placeholder={"password"}
          type={"password"}
          value={this.state.password}
          onChange={(ev) => this.setState({ password: ev.target.value })}
        />
        <BlueButtonLink onClick={() => this.login()}>Login</BlueButtonLink>
      </Container>
    );
  }
}
