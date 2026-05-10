import { Hero } from "#/components/Hero";
import Introduction from "#/components/Introduction";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <Hero />
      <Introduction />
    </>
  );
}
