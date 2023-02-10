import React from 'react'
import { Link } from "react-router-dom"
import "./home.css"

/**
 * Home is a function component that returns two buttons to choose the user profile to navigate to.
 * @returns the home page content
 */

function Home() {
    return (
        <div>
            <p>Choisissez un user pour accéder à son profil</p>
                <div>
                    <Link key={12} to={`user/12`}>
                        <button>User 12</button>
                    </Link>

                    <Link key={18} to={`user/18`}>
                        <button>User 18</button>
                    </Link>
                </div>    
        </div>
    )
}

export default Home