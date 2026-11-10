import Image from "next/image"
import Link from "next/link"
export default function Projects() {
  return (
    <main className="pt-26 p-6">
      <h1 className="text-6xl text-center">Projects</h1>
      <section className="grid grid-cols-2 pt-6">
        <Link href="https://futroapp.vercel.app/"> 
        <article className="grid overflow-hidden rounded-xl p-4">
          <Image
            src="/images/projects/Futro 3a.png"
            alt="Futo website preview"
            width={1200}
            height={100}
            className="h-auto w-full"
          />
          <div className="">
            <h2 className=" text-cyan-400 text-4xl mt-2">Futro</h2>
            <p className="mt-2">FUTRO is an all-in-one digital ecosystem built for students of the Federal University of Technology Owerri (FUTO).
              It combines shopping, errands, campus deliveries, and student-powered commerce into one seamless digital experience.
            </p>
           <h3 className="mt-2 ">Visit site</h3>
          </div>
        </article>
        </Link>
        <Link href="https://whatsapp.com/channel/0029VbDYRjgHrDZgVyadgV10">
        <article className="grid overflow-hidden rounded-xl p-4">
          <Image
            src="/images/projects/OppPlanet.png"
            alt="OppPlanet website preview"
            width={1200}
            height={100}
            className="h-auto w-full"
          />
          <div className="">
            <h2 className=" text-cyan-400 text-4xl mt-2">OppPlanet</h2>
            <p className="mt-2">OppPlanet is a growing community that connects people with life-changing opportunities — from jobs and internships to scholarships, grants, tech programs, fellowships, and career growth resources. We bridge the gap between talented individuals and opportunities that help them learn, grow, and succeed. 
              OppPlanet is currently WhatsApp-Channel only.
            </p>
            <h3 className="mt-2">Visit site</h3>
          </div>
        </article>
        </Link>
      </section>
    </main>
  )
}