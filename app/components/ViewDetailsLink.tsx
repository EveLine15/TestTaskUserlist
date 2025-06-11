"use client";

import Link from "next/link";

export default function ViewDetailsLink({
    userId
} : {
    userId: string
}) {

  return (
    <Link href={`/users/${userId}`}>
      Get Started
    </Link>
  );
}
