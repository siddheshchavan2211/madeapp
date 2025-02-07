"use client";
import { HeroUIProvider } from "@heroui/react";
import { Inputs, Messages, Signup } from "@/components";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io(
"https://fantastic-trout-69997vg6rw47cxw9-8000.app.github.dev/"
);

console.log(socket);
export default function Home() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const session = sessionStorage.getItem("user");
    if (session) {
      setUser(session);
    }
  }, []);
  return (
    <HeroUIProvider>
      <div className="min-h-screen max-h-screen">
        {!user ? (
          <Signup setUser={setUser} socket={socket} />
        ) : (
          <>
            <Messages />
            <Inputs />
          </>
        )}
      </div>
    </HeroUIProvider>
  );
}
