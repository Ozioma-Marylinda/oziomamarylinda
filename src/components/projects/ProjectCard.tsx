import Image from "next/image"

type ProjectCardProps = {
  image: "string";
  title: "string";
  description: "string";
  ImageAlt: "string";
};


export default function Project({ProjectsProps}: projects) {
  return (
    <main className="pt-26 p-6">
      <h1 className="text-6xl text-center">Projects</h1>
      <section className="grid grid-cols-2 pt-6">
        <article className="grid overflow-hidden rounded-xl p-4">
          <Image
            src="{project.image}"
            alt="{project.alt}"
            width={1200}
            height={100}
            className="h-auto w-full"
          />
          <div className="">
            <h2 className=" text-cyan-400 text-4xl">{project.title}</h2>
            <p>{project.description}</p>
            <button>{project.button}</button>
          </div>
        </article>
      </section>
    </main>
  )
}