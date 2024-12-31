import type { ChangeEvent } from "react";

type ReplyBoxProps = {
  toWhom: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickClose: () => void;
  onClickSend: () => void;
};

export default function ReplyBox({
  toWhom,
  value,
  onChange,
  onClickClose,
  onClickSend,
}: ReplyBoxProps) {
  return (
    <div className="fixed bottom-4 right-4">
      <p>Replying to {toWhom}</p>
      <button type="button" onClick={onClickClose}>
        X
      </button>
      <textarea value={value} onChange={onChange} />
      <button type="button" onClick={onClickSend}>
        Send
      </button>
    </div>
  );
}
