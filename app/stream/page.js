import { Suspense } from 'react';
import PostList from '../components/PostList';
import UserProfile from '../components/UserProfile';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <Suspense fallback={<div>Loading User Profile...</div>}>
        <UserProfile />
      </Suspense>
      <Suspense fallback={<div>Loading Posts...</div>}>
        <PostList />
      </Suspense>
    </main>
  );
}
