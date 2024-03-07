import React from 'react'
import bg from "/images/join-bg.jpg"
import "./Newsletter.css"

const Newsletter = () => {
    return (
        <section className="newsletter" id="newsletter">
            <img src={bg} alt=" " className="newsletter-bg" />
            <div className="newsletter__content">
                <h2 className="newsletter-title">Suscríbete para recibir las últimas noticias</h2>
                <input type="text" className="newsletter-input" placeholder="Ingresa un correo" />
                <button className="newsletter-btn">Suscribirse</button>
            </div>
        </section>
    )
}

export default Newsletter