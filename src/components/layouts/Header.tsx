import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between p-6 w-full bg-transparent">
      <Link href="/">
        <h1 className="text-2xl font-extrabold">OML</h1>
      </Link>
      
      <nav>
        <ul className="flex flex-row gap-24 font-bold">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul> 
      </nav>
    </header>
  );
}