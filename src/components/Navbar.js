'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', newTheme)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : ''
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav id="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <Logo size="small" />
          </Link>
          <div className="nav-right">
            <ul className="nav-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
              <span id="theme-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
            </button>
            <button 
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} 
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`} id="mobileNav">
        <Link href="/about" onClick={closeMobileMenu}>About</Link>
        <Link href="/services" onClick={closeMobileMenu}>Services</Link>
        <Link href="/projects" onClick={closeMobileMenu}>Projects</Link>
        <Link href="/blogs" onClick={closeMobileMenu}>Blogs</Link>
        <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
      </div>
    </>
  )
}
