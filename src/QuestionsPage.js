import styled from "styled-components";
import { BlueButtonLink } from "./BlueButton";
import { Header1 } from "./Header1";
import { QuestionRow } from "./QuestionRow";

export function QuestionsPage() {
  const StylesHeader = Header1();
  const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    padding: 30px 20px;
  `;
  return (
    <main>
      <HeaderRow>
        <StylesHeader>Top Questions</StylesHeader>
        <BlueButtonLink to={"/Ask"}>Ask&nbsp;Question</BlueButtonLink>
      </HeaderRow>
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
    </main>
  );
}

