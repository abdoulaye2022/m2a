import React from 'react';
import "./ArtcileCard.css";

export default function ArticleCard() {
    return (
        <div>
            <div>Image</div>
            <div>
                <div>
                    <div className='author'>
                        <div className='Avatar'>Avatar</div>
                        <small>Abdoulaye Mohamed</small>
                        <time>22/03/2022 (il y'a un jour)</time>
                    </div>
                    <div>
                        <h3>Titre</h3>
                        <p>ce que faite l'artcile est mit ici pour que je peuise je ;ldire.</p>
                    </div>
                    <div className='tag'>#html #css #php</div>
                    <div className='footer'>
                        <div>Reaction</div>
                        <div>Commentaire</div>
                        <div>Minute de lecture</div>
                        <div>Favoris</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
