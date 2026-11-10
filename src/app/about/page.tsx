import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="pt-26 p-6">
      <section className="grid grid-cols-2 pt-6">
        
        <article className="flex flex-col items-start gap-4 overflow-hidden rounded-xl p-4">
          <div className="space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
            <h1 className="text-6xl text-center mb-4">About Me</h1>
            <p className="mt-2">
              I&apos;m Ozioma Marylinda, a frontend developer passionate about building websites and web applications that solve real-world problems for businesses, organizations, and individuals. I take ideas and turn them into functional, responsive, and user-friendly products that make everyday tasks easier.</p>
              <p> I work with{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                React, TypeScript, Next.js, and Tailwind CSS
              </span> 
              , and I&apos;m continuously learning and improving my skills as I grow towards becoming a well-rounded software engineer. </p>
              <p> I enjoy learning, exploring new technologies, and taking on challenges that push me to become better at what I do.</p>
              <p> Have an idea for a website or web application? I&apos;d love to hear about it. Let&apos;s connect and explore what we can build together
            </p>
          </div>
       
        <h3 className="text-lg font-semibold tracking-wide text-gray-900 dark:text-white mb-0">
          Contact
        </h3>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-400">
          
          <Link href="/contact" 
            className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Form
          </Link>

          <Link
            href="mailto:oziomamarylinda@gmail.com"
            className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Email
          </Link>

          <Link
            href="https://wa.me/2349167809274"
            className="transition-colors duration-200 hover:text-green-600 dark:hover:text-green-400"
          >
            WhatsApp
          </Link>

          <Link
            href="https://www.linkedin.com/in/ozioma-marylinda/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            LinkedIn
          </Link>

          <Link
            href="https://x.com/OziomaMarylinda"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
          >
            X
          </Link>
        </div>
        </article>
       <article>
         <Image
            src="/images/personal/my profile picture.jpeg"
            alt="my profile picture"
            width={1200}
            height={100}
            className="h-auto w-full rounded-2xl"
          />
       </article>
      </section>
    </main>
  )
}