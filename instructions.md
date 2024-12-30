## Take-Home Assignment for Full-stack Software Engineer Position @ Hoshii
 
#### Objective

You will build a **thread-based email client** using **React (with TypeScript)**, simulating a helpdesk/email management feature similar to Gmail, Outlook, or [Front](https://front.com/product-tour). The focus is on front-end design, state management, and user interactions.

  

#### Assignment Description

  

1.  **Email Thread List**

    - Display a list of email threads.

    - Each thread should show essential information such as sender, subject, a preview of the latest message, and a timestamp.

    - Clicking on a thread should load the entire conversation.

  

2.  **Thread Details / Conversation View**

    - Show all emails (messages) within a thread in chronological order.

    - Include at least sender, timestamp, and body text for each message.

  

3.  **Assignees and Dropdown**

    - Each thread can be assigned to one or more assignees (e.g., team members responsible for the thread).

    - Provide a dropdown or multi-select to view/change assignees.

  

4.  **Reply Component**

    - Provide an input (or textarea) to compose a reply.

    - A “Send” or “Reply” button that, when clicked, appends the new message to the thread in the front-end state.

  

#### Extra Credit

Below are optional enhancements that will earn extra credit if implemented:

  

-  **Mock Data vs. Real Backend**: Instead of storing all data in front-end state, spin up a simple backend to fetch, create, and update threads/messages.

-  **Integrating an Email Service**: Use an external API to send/receive emails.

-  **Rich Text Editor**: Add formatting features (bold, italic, etc.) to the reply editor.

  

#### Technical Requirements

  

1.  **Frontend Tech Stack**

    - Use **React** (16+), **TypeScript**, and **functional components**.

    - You may use `useState`, `useReducer`, Context, Redux, Zustand, or any preferred state management approach.

  

2.  **Styling**

    - You may use any CSS framework (Tailwind, Bootstrap, etc.) or write custom CSS.

    - The UI should be coherent and straightforward, though not necessarily pixel-perfect.

  

#### What to Deliver

  

1.  **Frontend Application**

    - A React + TypeScript project that can be started locally with commands like: `npm install && npm  start` or `yarn && yarn  start`


    - A minimal UI for viewing threads, selecting a specific thread, displaying the conversation, and sending replies.

    

#### How to Submit

  

-  **Code Repository**: Push your code to a public or private repo (GitHub, GitLab, Bitbucket, etc.). If private, please invite or share the link with us [@chihirokuya].

-  **Demo (Optional)**: If you have a live or hosted demo, feel free to share a link.

  

#### Evaluation Criteria

  

-  **Code Organization & Readability**: How well-structured, modular, and maintainable your code is.

-  **State Management & Data Flow**: How effectively you handle and update your data (mock or real).

-  **UI/UX & Functionality**: Is the interface intuitive and does it satisfy the core requirements?

-  **Extensibility & Scalability**: How easy would it be to add features like filtering, tagging, or advanced email handling?

-  **Bonus Points** for any **Extra Credit** items implemented.

  

#### Timeline

- You have **2 full business days** to complete the assignment.