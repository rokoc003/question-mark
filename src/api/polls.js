const pollApiURL =
  process.env.REACT_APP_POLLS_API ||
  "https://my-json-server.typicode.com/rokoc003/question-mark/polls";

export async function getPoll(pollId) {
  const response = await fetch(`${pollApiURL}/${pollId}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const poll = await response.json();
  return poll;
}

export async function postPoll(poll) {
  const response = await fetch(pollApiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(poll)
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const createdPoll = await response.json();
  return createdPoll;
}

export async function patchPoll(pollId, poll) {
  const response = await fetch(`${pollApiURL}/${pollId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(poll)
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const patchedPoll = await response.json();
  return patchedPoll;
}
