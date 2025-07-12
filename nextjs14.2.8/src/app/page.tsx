"use client";

import { useUser } from "@clerk/nextjs";

export default function TestPage() {
  const { user } = useUser();

  return (
    <div>
      test page(Next.js 15.3.9)
      {user && <p>Welcome, {user.firstName}!</p>}
    </div>
  );
}
