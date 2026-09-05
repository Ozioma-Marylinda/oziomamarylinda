type ButtonPros = {
  children: React.ReactNode;
}

export default function Button({children}: ButtonPros) {
  return (
    <button className="rounded-full border border-white px-8 py-3 text-white">
      {children}
    </button>
  )
}