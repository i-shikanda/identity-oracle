"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  
  const {push} =useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };

  return (
    <div>
      <div>
        <h1>Enter Your name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          name=""
          placeholder="Type Your Name ..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
