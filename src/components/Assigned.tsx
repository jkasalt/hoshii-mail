type AssignedProps = {
  assignees: string[];
  onClickRm: (assignee: string) => void;
};

export default function Assigned({ assignees, onClickRm }: AssignedProps) {
  return (
    <div className="flex">
      <strong className="mr-2">Assigned:</strong>
      {[...assignees].map((a) => (
        <div key={a} className="mx-1 flex bg-slate-200 rounded-full">
          <button
            className="px-2 bg-slate-100 rounded-full"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClickRm(a);
            }}
          >
            X
          </button>
          <p className="px-2">{a}</p>
        </div>
      ))}
    </div>
  );
}
