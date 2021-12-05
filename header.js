import React from 'react'

export default function Header() {
    return (
        <nav>
            <div className="logo">Roshy e-commerce </div>
            <ul>
                <li>Home</li>
                <li>Popular Products</li>
                <li>Low Prive</li>
                <li>High Prive</li>
            </ul>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
            </div>
        </nav>
    )
}
