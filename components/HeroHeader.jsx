"use client"
import React from 'react'

export default function HeroHeader({ logo = '/logo.svg', icon, title, subtitle, showLogo = true }){
  return (
    <section className="hero card" style={{marginBottom:16, padding: '1rem', background: 'rgba(255,255,255,0.02)'}}>
      <div style={{display:'flex',alignItems:'center',gap:18}}>
        {/* logo or compact icon */}
        {showLogo ? (
          <img src={logo} alt="logo" style={{width:112,height:112,borderRadius:12,objectFit:'cover',maxWidth:'100%'}}/>
        ) : (
          icon ? (
            <div style={{width:84,height:84,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(180deg,var(--accent),#06b3af)',boxShadow:'0 8px 20px rgba(2,6,23,0.5)'}}>
              <img src={icon} alt="ícone" style={{width:40,height:40,borderRadius:8,objectFit:'cover',display:'inline-block',filter:'brightness(0.98)'}} />
            </div>
          ) : null
        )}

        <div style={{flex:1}}>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <h2 className="hero-title" style={{margin:0, padding:0, fontSize: '1.6rem'}}>{title}</h2>
          </div>
          {subtitle ? <p className="hero-sub muted-small" style={{marginTop:8,maxWidth:720}}>{subtitle}</p> : null}
        </div>
      </div>
    </section>
  )
}
