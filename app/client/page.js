"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [currentTime, setTime] = useState("2024-11-08 16:53:09");

  useEffect(() => {
    const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
    setTime(now);
  }, []);

  return (
    <div>
      <p>Client Component: {currentTime}</p>
    </div>
  );
}
