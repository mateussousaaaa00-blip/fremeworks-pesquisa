"use client"
import Link from 'next/link'

export default function NavBar(){
  return (
    <nav className="nav">
      <Link href="/">Início</Link>
      <Link href="/frameworks">Frameworks</Link>
      <Link href="/styling">Bibliotecas de Estilo</Link>
      <Link href="/next15">Next.js 15</Link>
      <Link href="/ferramentas">Ferramentas</Link>
    </nav>
  )
}
