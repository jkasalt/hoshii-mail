import { useState } from "react";

type ButtonWithDropDownProps = {
  name: string;
  allOptions: string[];
  clickedOptions: Set<string>;
  onClickOption: (opt: string) => void;
};

export default function ButtonWithDropDown({
  name,
  allOptions,
  clickedOptions,
  onClickOption,
}: ButtonWithDropDownProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="ml-auto px-1">
      <button
        className="bg-sky-300 p-1 rounded-full"
        type="button"
        onClick={() => setShow(!show)}
      >
        {name}
      </button>
      {show && (
        <div className="absolute">
          {allOptions.map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={clickedOptions.has(opt)}
                onChange={() => onClickOption(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
