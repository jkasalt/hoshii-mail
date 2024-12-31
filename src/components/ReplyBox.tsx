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
    <div className="m-2 mx-12 bg-slate-800 text-slate-50 rounded-lg flex flex-col shadow-2xl">
      <div className="flex max-w">
        <p>Replying to {toWhom}</p>
        <button
          className="ml-auto m-1 p-1 bg-red-600"
          type="button"
          onClick={onClickClose}
        >
          X
        </button>
      </div>
      <textarea
        className="text-black min-h-80 flex-auto"
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={onClickSend}>
        Send
      </button>
    </div>
  );
}
