import type { Email } from "../types/Email";

export default function EmailDisplay({ sender, timestamp, body }: Email) {
  return (
    <>
      <strong>From:</strong>
      {` ${sender}`}
      <br />
      <strong>Sent at:</strong>
      <time>{` ${timestamp}`}</time>
      <br />
      {body}
    </>
  );
}
