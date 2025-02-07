# User Stories
1. A user can join the chat by entering his name
2. A user can send a text message
3. A user can send an image as a file
4. User will see all the messages that are sent by other users
5. User will see a message whenever a new user joins
6. Chat will auto-scroll on new messages 
7. A profile avatar will be shown for messages sent by others based on name initials
# Use Cases
1. Allows anonymized chat with others
2. Doesn't require to auth or signup
3. Doesn't store messages or new users in any way, making it privacy focused
4. Users can still send images even though we don't implement any image/file hosting solution
5. Is very scalable, as our server is only transmitting the messages that are sent by the client, mainly acting as a rely b/w all the connected clients
6. With Bun, it makes our express API 5x faster
7. With Docker, it allows us to deploy to almost any VM






This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
