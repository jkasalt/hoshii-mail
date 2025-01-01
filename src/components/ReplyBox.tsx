import { useEffect, useRef, type ChangeEvent } from "react";

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
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      const len = textAreaRef.current.value.length;
      textAreaRef.current.focus();
      textAreaRef.current.setSelectionRange(len, len);
    }
  }, []);

  return (
    <div className="m-2 mx-12 bg-slate-800 text-slate-50 rounded-lg flex flex-col shadow-2xl">
      <div className="flex max-w items-center">
        <p>Replying to {toWhom}</p>
        <button
          className="ml-auto m-1 p-1 bg-red-600"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onClickClose();
          }}
        >
          X
        </button>
      </div>
      <textarea
        className="resize-none text-black min-h-80 flex-auto"
        ref={textAreaRef}
        value={value}
        onKeyDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation()}
        onChange={onChange}
      />
      <button
        className="p-2 flex-none"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClickSend();
        }}
      >
        Send
      </button>
    </div>
  );
}
