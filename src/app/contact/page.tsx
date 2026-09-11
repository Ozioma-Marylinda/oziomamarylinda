import ContactForm from "@/src/components/contact/ContactForm"

export default function ContactPage() {
  return (
    <main className="p-40">
       <section>
        <header className="mb-10">
          <h1 className="text-4xl font-bold">
            Contact Me
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Have a project, opportunity, or idea?
            Send me a message and I&apos;ll get back to you.
          </p>
        </header>
        <ContactForm />
       </section>
       
    </main >
  );
}