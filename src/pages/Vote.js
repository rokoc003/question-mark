import React from "react";
import Card from "../components/Card";
import { useParams, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import Form from "../components/Form";
import Button from "../components/Button";

const Label = styled.label`
  display: block;
`;

const pollApiURL =
  process.env.REACT_APP_POLLS_API ||
  "https://my-json-server.typicode.com/rokoc003/question-mark/polls";

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${pollApiURL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();
    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await fetch(`${pollApiURL}/${pollId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoll)
    });
    history.push(`/polls/${poll.id}`);
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <h2>{poll?.question}</h2>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerOne"
            chacked={answer === "answerOne"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerOne}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerTwo"
            chacked={answer === "answerTwo"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerTwo}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerThree"
            chacked={answer === "answerThree"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerThree}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerFour"
            chacked={answer === "answerFour"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerFour}
        </Label>
        <Button>Vote</Button>
      </Form>
    </Card>
  );
}
export default Vote;
