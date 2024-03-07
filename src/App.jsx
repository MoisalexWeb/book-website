import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

import Nav from "./components/nav/Nav.jsx"
import Hero from "./components/hero/Hero.jsx"
import Properties from "./components/properties/Properties.jsx"
import Feature from "./components/feature/Feature.jsx"
import Discount from "./components/discount/Discount.jsx"
import NewBooks from "./components/newBooks/NewBooks.jsx"
import Newsletter from "./components/newsletter/Newsletter.jsx"
import Footer from "./components/footer/Footer.jsx"

function App() {
    // Para renderizar el menu en mobile
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        const renderMobileMenu = () => {
            if (window.innerWidth <= 920) setMobileMenu(true)
            else setMobileMenu(false)
        }

        if (window.innerWidth <= 920) setMobileMenu(true)

        window.addEventListener("resize", renderMobileMenu)

        return () => {
            window.removeEventListener("resize", renderMobileMenu)
        }
    }, [])

    return (
        <>
            <Nav />
            <Hero />
            <Properties />
            <Feature />
            <Discount />
            <NewBooks />
            <Newsletter />
            <Footer />

            {
                mobileMenu &&
                <div className="menu__mobile">
                    <a className="menu__mobile-link" href="#home" aria-label="Ir al inicio">
                        <i className="ri-home-2-line"></i>
                    </a>
                    <a className="menu__mobile-link" href="#features" aria-label="Ir a destacados">
                        <i className="ri-book-3-line"></i>
                    </a>
                    <a className="menu__mobile-link" href="#discount" aria-label="Ir a los descuentos">
                        <i className="ri-price-tag-3-line"></i>
                    </a>
                    <a className="menu__mobile-link" href="#new" aria-label="Ir a los nuevos libros">
                        <i className="ri-bookmark-line"></i>
                    </a>
                    <a className="menu__mobile-link" href="#newsletter" aria-label="Ir a los testimonios">
                        <i className="ri-message-3-line"></i>
                    </a>
                </div>
            }
        </>
    )
}

export default App
