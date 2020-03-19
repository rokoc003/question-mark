import React from "react";
import Card from "../components/Card";
import { useParams, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import Form from "../components/Form";
import Button from "../components/Button";
import { patchPoll, getPoll } from "../api/polls";
import LoadingSpinner from "../components/LoadingSpinner";

const Label = styled.label`
  display: block;
`;

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);
  const [isLoadingPatchPoll, setIsLoadingPatchPoll] = React.useState(false);
  const [isLoadingGetPoll, setIsLoadingGetPoll] = React.useState(true);

  React.useEffect(() => {
    async function doGetPoll() {
      setIsLoadingGetPoll(true);
      const poll = await getPoll(pollId);
      setIsLoadingGetPoll(false);
      setPoll(poll);
    }

    doGetPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoadingPatchPoll(true);

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await patchPoll(pollId, newPoll);
    history.push(`/polls/${poll.id}`);
  }
  if (isLoadingGetPoll) {
    return <LoadingSpinner>Loading...</LoadingSpinner>;
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
            checked={answer === "answerOne"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerOne}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerTwo"
            checked={answer === "answerTwo"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerTwo}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerThree"
            checked={answer === "answerThree"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerThree}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerFour"
            checked={answer === "answerFour"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerFour}
        </Label>
        <Button disabled={isLoadingPatchPoll}>Vote</Button>
      </Form>
    </Card>
  );
}
export default Vote;
