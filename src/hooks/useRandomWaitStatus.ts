"use client";

import { useEffect, useState } from "react";

type WaitStatus = "Kort ventetid" | "Moderat ventetid" | "Lang ventetid";

export default function useRandomWaitStatus() {
  const [status, setStatus] = useState<WaitStatus>("Kort ventetid");
  useEffect(() => {
    const statuses: WaitStatus[] = ["Kort ventetid", "Moderat ventetid", "Lang ventetid"];
    const randomIndex = Math.floor(Math.random() * statuses.length);

    setStatus(statuses[randomIndex]);
  }, []);

  return status;
}
