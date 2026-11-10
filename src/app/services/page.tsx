import { MonitorSmartphone, LayoutTemplate, PanelsTopLeft, RefreshCw } from "lucide-react"

export default function ServicePage() {
  return (
    <main className="pt-26 p-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-center">My Services</h1>
        <p className="mt-4 text-base md:text-lg text-gray-200 max-w-4xl text-center mx-auto">
            I build responsive, accessible, and user-friendly websites and web applications, with a focus on clean interfaces, functionality, and performance. Whether you&apos;re starting from scratch or improving an existing product, I can help turn your ideas into working frontend solutions.
        </p>
      </section>
      <section>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

  <article className="group rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-lg dark:border-gray-700">
    <MonitorSmartphone className="mb-5 h-8 w-8 text-green-600" />
    <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
      Website Development
    </h2>
    <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
      Building responsive websites for businesses, organizations, and individuals.
    </p>
  </article>

  <article className="group rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-lg dark:border-gray-700">
    <PanelsTopLeft className="mb-5 h-8 w-8 text-green-600" />
    <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
      Web Application Development
    </h2>
    <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
      Creating interactive web applications with functional interfaces and intuitive navigation.
    </p>
  </article>

  <article className="group rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-lg dark:border-gray-700">
    <LayoutTemplate className="mb-5 h-8 w-8 text-green-600" />
    <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
      Landing Page Development
    </h2>
    <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
      Creating focused landing pages for products, services, campaigns, and events.
    </p>
  </article>

  <article className="group rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-lg dark:border-gray-700">
    <RefreshCw className="mb-5 h-8 w-8 text-green-600" />
    <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
      Website Redesign
    </h2>
    <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
      Improving existing websites with cleaner layouts, better responsiveness, and improved usability.
    </p>
  </article>

</div>
      </section>
    </main>
  )
}