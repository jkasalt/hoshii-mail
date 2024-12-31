import type { EmailThread } from "./types/EmailThread";

const fakeData: EmailThread[] = [
  {
    id: 0,
    sender: "hello@example.com",
    subject: "hello",
    emails: [
      {
        sender: "hello@example.com",
        timestamp: "999999",
        body: "hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello",
      },
      {
        sender: "hello1@example.com",
        timestamp: "11234",
        body: "hello hello hello",
      },
      {
        sender: "hello2@example.com",
        timestamp: "21234",
        body: "hello hello",
      },
      {
        sender: "hello3@example.com",
        timestamp: "31234",
        body: "hello hello",
      },
      {
        sender: "hello4@example.com",
        timestamp: "41234",
        body: "hello hello",
      },
    ],
  },
  {
    id: 1,
    sender: "world@example.com",
    subject: "world",
    emails: [
      {
        sender: "world@example.com",
        timestamp: "101234",
        body: "world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world",
      },
      {
        sender: "world1@example.com",
        timestamp: "11234",
        body: "world world world",
      },
      {
        sender: "world2@example.com",
        timestamp: "21234",
        body: "world world",
      },
      {
        sender: "world3@example.com",
        timestamp: "31234",
        body: "world world",
      },
      {
        sender: "world4@example.com",
        timestamp: "41234",
        body: "world world",
      },
    ],
  },
  {
    id: 2,
    sender: "dolor@example.com",
    subject: "dolor",
    emails: [
      {
        sender: "dolor@example.com",
        timestamp: "201234",
        body: "dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor",
      },
      {
        sender: "dolor1@example.com",
        timestamp: "11234",
        body: "dolor dolor dolor",
      },
      {
        sender: "dolor2@example.com",
        timestamp: "21234",
        body: "dolor dolor",
      },
      {
        sender: "dolor3@example.com",
        timestamp: "31234",
        body: "dolor dolor",
      },
      {
        sender: "dolor4@example.com",
        timestamp: "41234",
        body: "dolor dolor",
      },
    ],
  },
  {
    id: 3,
    sender: "sit@example.com",
    subject: "sit",
    emails: [
      {
        sender: "sit@example.com",
        timestamp: "301234",
        body: "sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit",
      },
      {
        sender: "sit1@example.com",
        timestamp: "11234",
        body: "sit sit sit",
      },
      {
        sender: "sit2@example.com",
        timestamp: "21234",
        body: "sit sit",
      },
      {
        sender: "sit3@example.com",
        timestamp: "31234",
        body: "sit sit",
      },
      {
        sender: "sit4@example.com",
        timestamp: "41234",
        body: "sit sit",
      },
    ],
  },
];

export default fakeData;
