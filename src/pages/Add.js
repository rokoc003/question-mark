import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import styled from "@emotion/styled";
import Form from "../components/Form";
import { postPoll } from "../api/polls";
import { useHistory } from "react-router-dom";

const Input = styled.input`
  width: 100%;
  ::placeholder {
    color: #e892a3;
    padding-left: 5px;
  }
`;

const QuestionInput = styled(Input)`
  width: 80%;
  padding-left: 5px;
  border-radius: 5px;
  margin: 30px 0px 30px 0px;
  height: 45px;
  font-size: 1.2rem;
  outline: none;
`;

const AnswerInput = styled(Input)`
  margin: 7px;
  width: 80%;
  border-radius: 5px;
  outline: none;
  height: 2rem;
  font-size: 1.1rem;
`;

function Add() {
  const history = useHistory();
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");
  const [answerFour, setAnswerFour] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      answerFour: answerFour,
      votes: []
    };

    const createdPoll = await postPoll(poll);
    history.push(`/polls/${createdPoll.id}/vote`);
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <QuestionInput
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <AnswerInput
          type="text"
          placeholder="• First Answer"
          value={answerOne}
          onChange={event => {
            setAnswerOne(event.target.value);
          }}
        />
        <AnswerInput
          type="text"
          placeholder="• Second Answer"
          value={answerTwo}
          onChange={event => {
            setAnswerTwo(event.target.value);
          }}
        />
        <AnswerInput
          type="text"
          placeholder="• Third Answer"
          value={answerThree}
          onChange={event => {
            setAnswerThree(event.target.value);
          }}
        />
        <AnswerInput
          type="text"
          placeholder="• Fourth Answer"
          value={answerFour}
          onChange={event => {
            setAnswerFour(event.target.value);
          }}
        />
        <Button disabled={isLoading}>Create Poll</Button>
      </Form>
    </Card>
  );
}
export default Add;
