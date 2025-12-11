"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function FloatingNav(){
  const router = useRouter()

  return (
    <nav className="floating-nav" aria-label="Navegação rápida">
      <Link href="/frameworks" className="floating-btn" aria-label="Ir para Frameworks">FW</Link>
      <Link href="/styling" className="floating-btn" aria-label="Ir para Bibliotecas de Estilo">Est</Link>
      <Link href="/next15" className="floating-btn" aria-label="Ir para Next.js 15">Next</Link>
      <Link href="/ferramentas" className="floating-btn" aria-label="Ir para Ferramentas">Tools</Link>
      <button type="button" className="floating-btn back" onClick={() => router.back()} aria-label="Voltar">↩</button>
    </nav>
  )
}
