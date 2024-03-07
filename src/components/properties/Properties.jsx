import React from 'react'
import "./Properties.css"

const Properties = () => {
    return (
        <section className="properties">
            <article className="properties__article">
                <i className="ri-truck-line"></i>
                <h2 className="properties__article-title">Envío Gratis</h2>
                <p className="properties__article-description">Ordene más de $100</p>
            </article>

            <article className="properties__article">
                <i className="ri-lock-2-line"></i>
                <h2 className="properties__article-title">Pago Seguro</h2>
                <p className="properties__article-description">Pago 100% Seguro</p>
            </article>

            <article className="properties__article">
                <i className="ri-customer-service-2-line"></i>
                <h2 className="properties__article-title">Soporte 24/7</h2>
                <p className="properties__article-description">Llámanos cuando quieras</p>
            </article>
        </section>
    )
}

export default Properties