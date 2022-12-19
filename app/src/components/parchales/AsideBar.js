import React from 'react';
import { Icon } from 'semantic-ui-react';
import "./AsideBar.css";

export default function AsideBar() {
    return (
        <div className='content_aside'>
            <ul>
                <li>
                <Icon name="home" /> Accueil
                </li>
                <li>
                    <Icon name="book" /> liste des lectures
                </li>
                <li>
                    <Icon name="announcement" /> Annonces
                </li>
                <li>
                    <Icon name="tag" />Mots clés
                </li>
                <li>
                    <Icon name="info" /> A propos
                </li>
            </ul>
            <h3>Mes mots clefs</h3>
            <ul>
                <li>
                    #html
                </li>
                <li>
                    #css
                </li>
                <li>
                    #php
                </li>
                <li>
                    #laravel
                </li>
                <li>
                    #React Js
                </li>
            </ul>
        </div>
    )
}
