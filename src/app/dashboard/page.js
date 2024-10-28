"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserDashboard() {
  const { data: session } = useSession();

  if (!session) return <p>Loading...</p>;

  return (
    <>
        <nav>
            {/* Common Links */}
            <Link href="/dashboard">Dashboard</Link>

            {/* Admin-specific link */}
            {session?.user?.role === "admin" && (
                <Link href="/dashboard/admin">Admin Dashboard</Link>
            )}

            {/* Logout Button */}
            {session ? (
                <button onClick={() => signOut()}>Logout</button>
            ) : (
                <Link href="/portal">Login</Link>
            )}
        </nav>
        <div className="p-6">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <p>Welcome, {session.user.email}</p>
          <p>Role: {session.user.role}</p>
          {/* You can add more content here based on your user needs */}
        </div>
    </>
  );
}
