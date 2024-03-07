import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__logo">
                    <a href="#home" className="footer__logo-link">
                        <i className="ri-book-3-line"></i>
                        E-book
                    </a>
                    <p className="footer__logo-description">Encuentra y explora los mejores libros de todos tus escritores favoritos.</p>
                </div>

                <div className="footer__grid">
                    <div className="footer__grid__item">
                        <h3 className="footer__grid__item-title">Acerca de</h3>
                        <a href="#" className="footer__grid__item-link">Premios</a>
                        <a href="#" className="footer__grid__item-link">Preguntas frecuentes</a>
                        <a href="#" className="footer__grid__item-link">Política de privacidad</a>
                        <a href="#" className="footer__grid__item-link">Términos de servicio</a>
                    </div>

                    <div className="footer__grid__item">
                        <h3 className="footer__grid__item-title">Compañía</h3>
                        <a href="#" className="footer__grid__item-link">Blogs</a>
                        <a href="#" className="footer__grid__item-link">Comunidad</a>
                        <a href="#" className="footer__grid__item-link">Nuestro equipo</a>
                        <a href="#" className="footer__grid__item-link">Centro de ayuda</a>
                    </div>

                    <div className="footer__grid__item footer__grid__item--dir">
                        <h3 className="footer__grid__item-title">Contacto</h3>
                        <address className="footer__grid__item-dir">
                            Av. Peñalver <br />
                            El Tigre 6050, Venezuela
                        </address>
                        <p className="footer__grid__item-dir">
                            e.book@email.com<br />
                            0987-654-321
                        </p>
                    </div>

                    <div className="footer__grid__item footer__grid__item--social">
                        <h3 className="footer__grid__item-title">Redes</h3>
                        <div className="footer__grid__item-social">
                            <i className="ri-facebook-circle-line"></i>
                            <i className="ri-instagram-line"></i>
                            <i className="ri-twitter-x-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <p className="footer-copy">&copy; Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer