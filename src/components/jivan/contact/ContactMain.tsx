import ContactForm from "./ContactForm";
import MapAndHours from "./MapAndHours";

export default function ContactMain() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
      <ContactForm />
      <MapAndHours />
    </div>
  );
}
