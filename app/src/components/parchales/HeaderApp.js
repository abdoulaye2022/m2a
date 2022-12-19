import React from 'react';
import { Button } from 'semantic-ui-react';
import "./HeaderApp.css";

export default function HeaderApp() {
  return (
    <div className='header'>
        <h3>M2ACODE</h3>
        <ul>
            <li>
                <Button className='create'>Creer un post</Button>
            </li>
            <li>
                <Button icon="user" className='create'></Button>
            </li>
        </ul>
    </div>
  )
}
