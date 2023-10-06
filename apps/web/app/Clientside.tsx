"use client";

import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function Clientside() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    trpc.test
      .query({ name: "Hello World! from Clientside state" })
      .then((response) => {
        setGreeting(response);
      });
  }, []);
  return <div>Clientside: {greeting} </div>;
}
