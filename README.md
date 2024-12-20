# NextAuth.js 400 Error on Protected Route After Login in Next.js 15 App

This repository demonstrates a bug in a Next.js 15 application using NextAuth.js where a 400 error is thrown when accessing a protected route after successful login.  The issue seems related to how NextAuth handles sessions in conjunction with server-side props and the new App Router in Next.js 15.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Login via the NextAuth provider (e.g., email/password). 
5. Navigate to the `/about` route.
6. Observe the 400 error.

## Potential Causes and Solutions (Speculative)

The error likely stems from a mismatch between how NextAuth manages sessions and how the App Router handles requests.  Solutions might include adjusting session handling in NextAuth, ensuring correct configuration of getServerSideProps, or potentially refactoring the authentication to use a different approach.

## Solution

The solution might involve switching to a different method like `getStaticProps` or using the new `app` directory routing methods in a manner compatible with NextAuth.js.