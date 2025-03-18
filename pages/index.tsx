"use client"; // ✅ Ensures client-side execution

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Ince Insurance</h1>
      <p>Your AI-powered auto insurance comparison platform.</p>
      <Link href="/get-a-quote">
        <button style={{ padding: "10px 20px", marginTop: "20px", fontSize: "18px" }}>
          Get a Quote
        </button>
      </Link>
    </div>
  );
}


















