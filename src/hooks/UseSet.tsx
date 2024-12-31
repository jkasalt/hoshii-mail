import { useCallback, useRef, useState } from "react";

// Thank you https://stackoverflow.com/a/75153322
export default function useSet<T>(initialValue?: T[]) {
  const [_, setFlag] = useState(false);

  const set = useRef(new Set<T>(initialValue));

  const add = useCallback((item: T) => {
    if (set.current.has(item)) {
      return;
    }
    setFlag((flag) => !flag);
    set.current.add(item);
  }, []);

  const remove = useCallback((item: T) => {
    if (!set.current.has(item)) {
      return;
    }
    setFlag((flag) => !flag);
    set.current.delete(item);
  }, []);

  return [set.current, add, remove] as const;
}
