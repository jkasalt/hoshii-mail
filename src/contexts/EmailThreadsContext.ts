import { createContext, type Dispatch } from "react";
import type { EmailThread } from "../types/EmailThread";
import type { EmailThreadAction } from "../reducers/EmailThreadReducer";

export const EmailThreadsContext = createContext<EmailThread[] | null>(null);
export const EmailThreadsDispatchContext =
  createContext<Dispatch<EmailThreadAction> | null>(null);
