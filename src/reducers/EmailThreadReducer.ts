import type { Email } from "../types/Email";
import type { EmailThread } from "../types/EmailThread";

export type EmailThreadAction = { kind: "Add"; payload: Email };

export function threadsReducer(
  state: EmailThread,
  action: EmailThreadAction,
): EmailThread {
  switch (action.kind) {
    case "Add":
      return { ...state, emails: [...state.emails, action.payload] };
    default:
      return state;
  }
}
