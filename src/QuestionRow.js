import styled from "styled-components";


export function QuestionRow() {
  const StyledQuestionRow = styled.div`
      background-color: rgba(255, 255, 255, 0.05);
      padding: 15px 15px 10px;
      display: grid;
      grid-template-columns: repeat(3, 50px) 1fr;
      border-top: 1px solid #555;
    `;
  const QuestionStat = styled.div`
      margin: 7px;
      color: #aaa;
      text-align: center;
      display: inline-block;
      font-size: 1.2rem;
      span {
        font-size: 0.7rem;
        display: block;
        font-weight: 300;
        margin-top: 4px;
      }
    `;
  const QuestionTitleArea = styled.div`
      padding: 0px 30px;
    `;
  const Tag = styled.span`
      display: inline-block;
      margin-right: 5px;
      background-color: #3e4a52;
      color: #9cc3db;
      padding: 7px;
      border-radius: 5px;
      font-size: 0.9rem;
    `;
  const QuestionedLink = styled.a`
      text-decoration: none;
      color: #3ca4ff;
      font-size: 1.1rem;
      display: block;
      margin-bottom: 5px;
    `;
  const WhoandWhen = styled.div`
      display: inline-block;
      color: #aaa;
      font-size: 0.8rem;
      float: right;
      padding:10px 0px;
    `;
  const UserLink = styled.a`
    color: #3ca4ff;
    `;
  return (
    <StyledQuestionRow>
      <QuestionStat>
        0 <span>Votes</span>
      </QuestionStat>
      <QuestionStat>
        1 <span>Answers</span>
      </QuestionStat>
      <QuestionStat>
        6 <span>Views</span>
      </QuestionStat>
      <QuestionTitleArea>
        <QuestionedLink>Getting String in Quats in JavaScript</QuestionedLink>
        <Tag>JavaScript</Tag>
        <Tag>Parsing</Tag>
        <Tag>Quotes</Tag>
        <Tag>Litarels</Tag>
        <WhoandWhen>
          Asked 10min ago
          <UserLink>
            David
          </UserLink>
        </WhoandWhen>
      </QuestionTitleArea>
    </StyledQuestionRow>
  );
}
