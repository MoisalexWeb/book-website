import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <a href="#" className="nav-link">
                    <i className="ri-book-3-line"></i>
                    E-book
                </a>

                <ul className="nav__menu">
                    <li>
                        <a className="nav__menu-link" href="#home">Inicio</a>
                    </li>
                    <li>
                        <a className="nav__menu-link" href="#features">Destacados</a>
                    </li>
                    <li>
                        <a className="nav__menu-link" href="#discount">Descuentos</a>
                    </li>
                    <li>
                        <a className="nav__menu-link" href="#new">Nuevos Libros</a>
                    </li>
                    <li>
                        <a className="nav__menu-link" href="#newsletter">Newsletter</a>
                    </li>
                </ul>

                <div className="nav__buttons">
                    <button className="nav__buttons-btn" id="search">
                        <i className="ri-search-line"></i>
                    </button>

                    <button className="nav__buttons-btn" id="user">
                        <i className="ri-user-3-line"></i>
                    </button>

                    <button className="nav__buttons-btn" id="change-theme" data-theme="moon">
                        <i className="ri-moon-line"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
