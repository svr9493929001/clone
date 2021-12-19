import styled from "styled-components";
import { BlueButtonLink } from "./BlueButton";
import { Header1 } from "./Header1";
import ReactMarkdown from "react-markdown";
import React, { useState } from "react";
import gfm from "remark-gfm";
import { Input } from "./Input";
export function AskPage() {
  const Container = styled.div`
    padding: 30px 20px;
  `;


  const QuestionBodyTextArea = styled.textarea`
    font-family: inherit;
    background: none;
    border: 1px solid #777;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 20px;
    min-height: 200px;
    color: #fff;
    resize: none;
  `;
  const Header = Header1();
  const PreviewArea = styled.div`
    padding: 10px 20px;
    background-color: #444;
    border-radius: 5px;
    margin-bottom: 20px;
  `;
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  return (
    <Container>
      <Header style={{ marginBottom: "20px" }}>Ask a public question</Header>
      <Input
        type="text"
        placeholder="Title of your question"
        value={questionTitle}
        onChange={(e) => setQuestionTitle(e.target.value)} />
      <QuestionBodyTextArea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="More info about your question you can mark them here"
        onChange={(e) => setQuestionBody(e.target.value)}
        value={questionBody} />
      <PreviewArea>
        <ReactMarkdown plugins={{ gfm }} children={questionBody} />
      </PreviewArea>
      <BlueButtonLink to={"/"}>Post&nbsp;Question</BlueButtonLink>
    </Container>
  );
}
