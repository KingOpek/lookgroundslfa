import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/confirm-ground")({
  beforeLoad: () => {
    throw redirect({ to: "/confirm" });
  },
});
