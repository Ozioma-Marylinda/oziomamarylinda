import Button from "../common/Button"
import Link from "next/link"
import ProjectButton from "../common/ProjectButton"

export default function Hero() {
  return (
    <section  className="min-h-screen overflow-hidden">
      <div className="mt-70 flex flex-col justify-center items-center text-center">
        <h1 className="w-2xl text-5xl font-bold md:7xl text-white">Hi, I&apos;m Ozioma Marylinda.</h1>
        <p className="mt-6 max-w-4xl text-lg text-white/80 md:text-xl">
          A frontend developer focused on building clean, responsive, and user-friendly web applications that solve real-world problems for businesses, organizations, and people.
        </p>
        <div className="flex gap-4 p-6">
          <Link href="/projects"><ProjectButton>View My Work</ProjectButton></Link>
          <Link href="/contact"><Button>Contact Me</Button></Link>
        </div>
      </div>
     
    </section>
  )
}