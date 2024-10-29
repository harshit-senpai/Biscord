"use client";

import { useSocket } from "@/provider/SocketProvider";
import { Badge } from "../ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge
        variant={"outline"}
        className="bg-yellow-500 text-white border-none"
      >
        Fallback: Polling every 1s
      </Badge>
    );
  }

  return (
    <Badge
      variant={"outline"}
      className="bg-emerald-600 text-white border-none"
    >
      Live
    </Badge>
  );
};
