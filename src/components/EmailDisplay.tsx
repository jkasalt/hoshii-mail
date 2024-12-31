import { useContext } from "react";
import type { Email } from "../types/Email";
import { UsernameContext } from "../contexts/UsernameContext";

export default function EmailDisplay({ sender, timestamp, body }: Email) {
  const username = useContext(UsernameContext);
  const styleMe = "bg-sky-50 text-right rounded-bl-lg rounded-br-none";
  const styleYou = "bg-sky-200 text-left rounded-br-lg rounded-bl-none";
  const style = `m-1 p-1 rounded-tl-lg rounded-tr-lg ${username === sender ? styleMe : styleYou}`;
  return (
    <div className={style}>
      <strong>From:</strong>
      {` ${sender}`}
      <br />
      <strong>Sent at:</strong>
      <time>{` ${timestamp}`}</time>
      <br />
      {body}
    </div>
  );
}
