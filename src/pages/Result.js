import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { getPoll } from "../api/polls";
import LoadingSpinner from "../components/LoadingSpinner";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);

  React.useEffect(() => {
    async function doGetPoll() {
      try {
        setIsLoading(true);
        const poll = await getPoll(pollId);
        setPoll(poll);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    doGetPoll();
  }, [pollId]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
