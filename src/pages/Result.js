import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { getPoll } from "../api/polls";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll(pollId);
      setPoll(poll);
    }

    doGetPoll();
  }, [pollId]);

  return (
    <Card>
      <h2>{poll?.question}</h2>
      <div>{poll?.answerOne}</div>
      <div>{poll?.answerTwo}</div>
      <div>{poll?.answerThree}</div>
      <div>{poll?.answerFour}</div>
    </Card>
  );
}
export default Result;
