import ContactForm from "#/components/ContactForm";
import Introduction from "#/components/Introduction";
import AdvisoryServicesSection from "#/components/Services";
import AdvisoryLeaders from "#/components/Teams";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <Introduction />
      <AdvisoryServicesSection />
      <AdvisoryLeaders />
      <ContactForm />
    </>
  );
}
