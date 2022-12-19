import React from 'react';
import { Icon } from 'semantic-ui-react';
import "./ArtcileCard.css";

export default function ArticleCard() {
    return (
        <div className='card'>
            <div className='image'>Image</div>
            <div className='content_card'>
                <div className='author'>
                    <div className='author_avatar'>Avatar</div>
                    <div className='author_info'>
                        <span>Abdoulaye Mohamed</span>
                        <time>22/03/2022 (il y'a un jour)</time>
                    </div>
                </div>
                <div className='subject'>
                    <h3>Titre</h3>
                </div>
                <div className='tag'>
                    <span>#html</span>
                    <span>#css</span>
                    <span> #php</span>
                </div>
                <div className='footer'>
                    <div className='reaction'>
                        <div>
                            <Icon name="like" />
                            32 Reaction
                        </div>
                        <div>
                            <Icon name="comment" />
                            9 Commentaire
                        </div>
                    </div>
                    <div className='favoris'>
                        <div>Minute de lecture</div>
                        <div>
                            <Icon name='favorite' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
