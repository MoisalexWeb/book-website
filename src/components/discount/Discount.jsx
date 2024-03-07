import React from 'react'
import "./Discount.css"
import book1 from "/images/discount-book-1.png"
import book2 from "/images/discount-book-2.png"

const Discount = () => {
    return (
        <section className="discount" id="discount">
            <div className="discount__images">
                <img src={book1} alt="Libro en descuento" className="discount__images-img discount__images-img--one" />
                <img src={book2} alt="Libro en descuento" className="discount__images-img discount__images-img--two" />
            </div>
            <div className="discount__texts">
                <h2 className="discount__texts-title">Hasta 50% de descuento</h2>
                <p className="discount__texts-description">Aprovecha los días de descuento que tenemos para ti, compra libros de tus escritores favoritos, mientras más compres más descuentos tenemos para ti.</p>
                <button className="discount__texts-cta">Compra ahora</button>
            </div>
        </section>
    )
}

export default Discount