import type { Email } from "../types/Email";
import type { EmailThread } from "../types/EmailThread";

export type EmailThreadAction = { kind: "Add"; payload: Email };

export function threadsReducer(
  state: Email[],
  action: EmailThreadAction,
): Email[] {
  switch (action.kind) {
    case "Add":
      return [...state, action.payload];
    default:
      return state;
  }
}
