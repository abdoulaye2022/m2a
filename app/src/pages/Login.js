import React from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';
import "./Login.css";

export default function Login() {
  return (
    <div className='container_login'>
        <h3>Bienvenue sur M2ACODE</h3>
        <div className='code'>
            <Icon name="angle left" className='angle_left'/>/
            <Icon name="angle right" className='angle_right' />
        </div>
        <form>
            <label>E-mail</label>
            <Input type='text' className='input' />
            <label>Mot de passe</label>
            <Input type='password' className='input'  />
            <Button className='btn_login'><Icon name='sign-in' /> Connexion</Button>
            <span>Mot de passe oublié?</span>
        </form>
    </div>
  )
}
