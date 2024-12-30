import type { EmailThread } from "./types/EmailThread";

const fakeData: EmailThread[] = [
  {
    sender: "hello@example.com",
    subject: "hello",
    emails: [
      {
        sender: "hello@example.com",
        timestamp: "1234",
        body: "hello hello",
      },
    ],
  },
];

export default fakeData;
