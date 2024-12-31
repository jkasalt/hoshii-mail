import type { Email } from "./types/Email";
import { faker } from "@faker-js/faker";
import type { EmailThread } from "./types/EmailThread";

function fakeEmail(me: string, you: string): Email {
  return {
    sender: Math.random() < 0.5 ? me : you,
    timestamp: faker.date.recent(),
    body: faker.lorem.lines(),
  };
}

function fakeThread(id: number): EmailThread {
  const me = "me@example.com";
  const you = faker.internet.email();
  return {
    id,
    sender: you,
    subject: `${faker.word.adjective()} ${faker.word.noun()} ${faker.word.verb()} ${faker.word.noun()}`,
    emails: faker.helpers.multiple(() => fakeEmail(me, you), {
      count: { min: 1, max: 100 },
    }),
  };
}

const fakeData: EmailThread[] = Array.from(
  { length: 500 },
  (_, key) => key,
).map((id) => fakeThread(id));

export default fakeData;
