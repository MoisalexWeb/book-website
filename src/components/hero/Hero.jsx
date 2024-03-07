import React from 'react'
import "./Hero.css"
import { useEffect } from "react"
import { register } from "swiper/element/bundle"
import { book1, book2, book3, book4 } from "./import.js"

const Hero = () => {
    
    useEffect(() => {
        register()
    })

    return (
        <header className="hero" id="home">
            <div className="hero__container">
                <div className="hero__texts">
                    <h1 className="hero__texts-title">Navega<br></br>Selecciona libros</h1>
                    <p className="hero__texts-description">Encuentra los mejores libros electrónicos de tus escritores favoritos, explora cientos de libros con todas las categorías posibles, aprovecha el 50% de descuento y mucho más.</p>
                    <a href="#features" className="hero__texts-cta">Explora ahora</a>
                </div>
                {/* Swiper JS */}
                <swiper-container
                    slides-per-view="3"
                    speed="300"
                    loop="true"
                    navigation="true"
                >
                    <swiper-slide>
                        <img className="swiper-img" src={book1} alt="Libro" />
                    </swiper-slide>

                    <swiper-slide>
                        <img className="swiper-img" src={book2} alt="Libro" />
                    </swiper-slide>

                    <swiper-slide>
                        <img className="swiper-img" src={book3} alt="Libro" />
                    </swiper-slide>

                    <swiper-slide>
                        <img className="swiper-img" src={book4} alt="Libro" />
                    </swiper-slide>
                </swiper-container>
            </div>
        </header>
    )
}

export default Hero

/*

*/ 