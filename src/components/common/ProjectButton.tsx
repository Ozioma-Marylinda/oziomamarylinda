type ProjectButtonProps = {
   children : React.ReactNode;
}
export default function ProjectButton({children}: ProjectButtonProps) {
  return (
    <button className="rounded-full bg-white px-8 py-3 text-black">
      {children}
    </button>
  )
}