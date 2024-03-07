import React from 'react'
import "./Feature.css"
import { useEffect, useState } from "react"
import { register } from "swiper/element/bundle"
import { book1, book2, book3, book4, book5, book6, book7, book8, book9, book10 } from "./import.js"

const Feature = () => {
    const [numSlides, setNumSlides] = useState("4")
    // Para inicializar swiper JS
    useEffect(() => {
        register()
    })

    // Modificando las slides por views
    useEffect(() => {
        const changeNumberSlides = () => {
            if (window.innerWidth > 950) setNumSlides(4)
            else if (window.innerWidth <= 950 && window.innerWidth > 700) setNumSlides(3)
            else if (window.innerWidth <= 700 && window.innerWidth > 460) setNumSlides(2)
            else if (window.innerWidth <= 460) setNumSlides(1)
        }

        changeNumberSlides()

        window.addEventListener("resize", changeNumberSlides)

        return () => {
            window.removeEventListener("resize", changeNumberSlides)
        }
    })

    const data = [
        {
            id: 1,
            altImg: "El señor de los anillos",
            title: "Libro destacado",
            price: "$11.99",
            oldPrice: "$19.99",
            btnText: "Agregar al carrito",
            img: book1
        },
        {
            id: 2,
            altImg: "Sencillo y minimalista",
            title: "Libro destacado",
            price: "$11.99",
            oldPrice: "$19.99",
            btnText: "Agregar al carrito",
            img: book2
        },
        {
            id: 3,
            altImg: "Cartel silenciado",
            title: "Libro destacado",
            price: "$11.99",
            oldPrice: "$19.99",
            btnText: "Agregar al carrito",
            img: book3
        },
        {
            id: 4,
            altImg: "Vertiendo sueños",
            title: "Libro destacado",
            price: "$11.99",
            oldPrice: "$19.99",
            btnText: "Agregar al carrito",
            img: book4
        },
        {
            id: 5,
            altImg: "Personaliza tu ropa de otoño",
            title: "Libro destacado",
            price: "$11.99",
            oldPrice: "$19.99",
            btnText: "Agregar al carrito",
            img: book5
        },
        {
            id: 6,
            altImg: "Diseñado para el trabajo",
            title: "Libro destacado",
            price: "$11.99",
            oldPrice: "$19.99",
            btnText: "Agregar al carrito",
            img: book6
        },
        {
            id: 7,
            altImg: "Planta árboles para el futuro",
            title: "Libro destacado",
            price: "$11.99",
            oldPrice: "$19.99",
            btnText: "Agregar al carrito",
            img: book7
        },
        {
            id: 8,
            altImg: "Cartel abstracto moderno",
            title: "Libro destacado",
            price: "$11.99",
            oldPrice: "$19.99",
            btnText: "Agregar al carrito",
            img: book8
        },
        {
            id: 9,
            altImg: "Parque de aves",
            title: "Libro destacado",
            price: "$11.99",
            oldPrice: "$19.99",
            btnText: "Agregar al carrito",
            img: book9
        },
        {
            id: 10,
            altImg: "Recuerdos de espada",
            title: "Libro destacado",
            price: "$11.99",
            oldPrice: "$19.99",
            btnText: "Agregar al carrito",
            img: book10
        },
    ]

    return (
        <section className="features" id="features">
            <h2 className="features-title">Libros Destacados</h2>
            <swiper-container
                slides-per-view={numSlides}
                speed="300"
                loop="true"
                navigation="true"
                space-between="20"
            >
            
            {
                // Recorriendo al array de datos y crando un slide por cada item
                data.map((item) => {
                    return (
                        <swiper-slide key={item.id} >
                            <img className="features__article-img" src={item.img} alt={item.altImg} />
                            <h3 className="features__article-title">{item.title}</h3>
                            <p className="features__article__price">
                                <span className="features__article__price-current">{item.price}</span>
                                <span className="features__article__price-old">{item.oldPrice}</span>
                            </p>
                            <button className="features__article-cta">{item.btnText}</button>

                            <div className="features__article__buttons">
                                <i className="ri-heart-3-line"></i>
                                <i className="ri-search-line"></i>
                                <i className="ri-eye-line"></i>
                            </div>
                        </swiper-slide>
                    )
                })
            }

            </swiper-container>
        </section>
    )
}

export default Feature