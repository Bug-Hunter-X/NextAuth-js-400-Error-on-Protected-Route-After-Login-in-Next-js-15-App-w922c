```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  // Ensure session is properly handled
  if(!session){
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session && <p>You are logged in as {session.user.email}</p>}
    </div>
  );
}
```