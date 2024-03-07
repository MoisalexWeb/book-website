import React from 'react'
import { useEffect } from "react"
import { register } from "swiper/element/bundle"
import "./NewBooks.css"
import { book1, book2, book3, book4, book5, book6, book7, book8, book9, book10 } from "./import.js"

const NewBooks = () => {

    // Para inicializar swiper JS
    useEffect(() => {
        register()
    })

    const dataBooks1 = [
        {
            id: 1,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "14.99",
            img: book1
        },
        {
            id: 2,
            title: "Nuevo libro",
            price: "$8.99",
            oldPrice: "15.99",
            img: book2
        },
        {
            id: 3,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "14.99",
            img: book3
        },
        {
            id: 4,
            title: "Nuevo libro",
            price: "$5.99",
            oldPrice: "14.99",
            img: book4
        },
        {
            id: 5,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "12.99",
            img: book5
        },
        {
            id: 6,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "10.99",
            img: book6
        },
        {
            id: 7,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "10.99",
            img: book7
        },
        {
            id: 8,
            title: "Nuevo libro",
            price: "$4.99",
            oldPrice: "10.99",
            img: book8
        },
        {
            id: 9,
            title: "Nuevo libro",
            price: "$10.99",
            oldPrice: "20.99",
            img: book9
        },
        {
            id: 10,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "17.99",
            img: book10
        }
    ]
    
    const dataBooks2 = [
        {
            id: 1,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "14.99",
            img: book10
        },
        {
            id: 2,
            title: "Nuevo libro",
            price: "$8.99",
            oldPrice: "15.99",
            img: book4
        },
        {
            id: 3,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "14.99",
            img: book9
        },
        {
            id: 4,
            title: "Nuevo libro",
            price: "$5.99",
            oldPrice: "14.99",
            img: book6
        },
        {
            id: 5,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "12.99",
            img: book1
        },
        {
            id: 6,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "10.99",
            img: book8
        },
        {
            id: 7,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "10.99",
            img: book2
        },
        {
            id: 8,
            title: "Nuevo libro",
            price: "$4.99",
            oldPrice: "10.99",
            img: book7
        },
        {
            id: 9,
            title: "Nuevo libro",
            price: "$10.99",
            oldPrice: "20.99",
            img: book3
        },
        {
            id: 10,
            title: "Nuevo libro",
            price: "$7.99",
            oldPrice: "17.99",
            img: book5
        }
    ]

    return (
        <section className="new" id="new">
            <h2 className="new-title">Nuevos Libros</h2>

            <swiper-container
                slides-per-view="auto"
                speed="300"
                loop="true"
                space-between="20"
            >
            {
                dataBooks1.map((book) => {
                    return (
                        <swiper-slide key={book.id}>
                            <img src={book.img} alt="nuevo libro" className="new-img" />
                            <div className="new__texts">
                                <h3 className="new__texts-title">{book.title}</h3>
                                <p className="new__texts-price">
                                    <span className="current-price">{book.price}</span>
                                    <span className="old-price">{book.oldPrice}</span>
                                </p>
                                <div className="new__texts__stars">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                            </div>
                        </swiper-slide>
                    )
                })
            }
            </swiper-container>

            <swiper-container
                slides-per-view="auto"
                speed="300"
                loop="true"
                space-between="20"
            >
            {
                dataBooks2.map((book) => {
                    return (
                        <swiper-slide key={book.id}>
                            <img src={book.img} alt="nuevo libro" className="new-img" />
                            <div className="new__texts">
                                <h3 className="new__texts-title">{book.title}</h3>
                                <p className="new__texts-price">
                                    <span className="current-price">{book.price}</span>
                                    <span className="old-price">{book.oldPrice}</span>
                                </p>
                                <div className="new__texts__stars">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                            </div>
                        </swiper-slide>
                    )
                })
            }
            </swiper-container>

        </section>
    )
}

export default NewBooks