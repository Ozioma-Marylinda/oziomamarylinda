import Button from "../common/Button"
import Link from "next/link"
import ProjectButton from "../common/ProjectButton"

export default function Hero() {
  return (
    
  <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0D14] px-6">
    <div className="pointer-events-none absolute inset-0">
      <div className="animate-glow absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="animate-glow-reverse absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
    </div>

  <section  className="min-h-screen overflow-hidden  ">
      <div className="mt-70 flex flex-col justify-center items-center text-center">
        <h1 className="w-2xl text-5xl font-bold md:7xl text-white">Hi, I&apos;m Ozioma Marylinda.</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          A frontend developer building clean, responsive, and user-friendly web applications that solve real-world problems for businesses, organizations, and people.
        </p>
        <div className="flex gap-4 p-6">
          <Link href="/projects"><ProjectButton>View My Work</ProjectButton></Link>
          <Link href="/contact"><Button>Contact Me</Button></Link>
        </div>
      </div>
    </section>
  <div className="relative z-10 text-center">
   
  </div>
</section>
    
  )
}