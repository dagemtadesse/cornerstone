import AdvisoryLeaders from "#/components/Teams";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teams")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AdvisoryLeaders />
    </>
  );
}
