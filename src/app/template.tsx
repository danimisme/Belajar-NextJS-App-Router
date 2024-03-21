"use client";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <h1 className="text-blue-800">Template {count}</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>Click template</button> */}
      {children}
    </div>
  );
}
