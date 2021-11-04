import React from 'react'
import './navbar.css'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export default function Navbar() {
    return (
        <div className="container">
            <CatchingPokemonIcon className="logo"/>

            <li>Logout</li>
            <li>Account</li>
            <li></li>
            <li></li>

      
        </div>
    )
}
