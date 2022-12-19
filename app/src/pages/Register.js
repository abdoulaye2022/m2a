import React from "react";
import "./Register.css";
import { Icon, Input, Button, Dropdown } from "semantic-ui-react";

const options = [
    { key: "angular", text: "Angular", value: "angular" },
    { key: "css", text: "CSS", value: "css" },
    { key: "design", text: "Graphic Design", value: "design" },
    { key: "ember", text: "Ember", value: "ember" },
    { key: "html", text: "HTML", value: "html" },
    { key: "ia", text: "Information Architecture", value: "ia" },
    { key: "javascript", text: "Javascript", value: "javascript" },
    { key: "mech", text: "Mechanical Engineering", value: "mech" },
    { key: "meteor", text: "Meteor", value: "meteor" },
    { key: "node", text: "NodeJS", value: "node" },
    { key: "plumbing", text: "Plumbing", value: "plumbing" },
    { key: "python", text: "Python", value: "python" },
    { key: "rails", text: "Rails", value: "rails" },
    { key: "react", text: "React", value: "react" },
    { key: "repair", text: "Kitchen Repair", value: "repair" },
    { key: "ruby", text: "Ruby", value: "ruby" },
    { key: "ui", text: "UI Design", value: "ui" },
    { key: "ux", text: "User Experience", value: "ux" },
];

const profils = [
    { key: 1, text: "Etudiant", value: 1 },
    { key: 2, text: "Professionnel", value: 2 },
    { key: 3, text: "Enseignant", value: 3 },
];

export default function Register() {
    return (
        <div className="container_register">
            <h3>Bienvenue sur M2ACODE</h3>
            <div className="code">
                <Icon name="angle left" className="angle_left" />/
                <Icon name="angle right" className="angle_right" />
            </div>
            <form>
                <label>Nom & prenom</label>
                <Input type="text" className="input" />
                <label>Mot clef</label>
                <Dropdown
                    className="input"
                    placeholder="Skills"
                    multiple
                    selection
                    options={options}
                />
                <label>Profil</label>
                <Dropdown options={profils} selection />
                <label>E-mail</label>
                <Input type="text" className="input" />
                <label>Mot de passe</label>
                <Input type="password" className="input" />
                <Button className="btn_register">
                    <Icon name="sign-in" /> Creer un compte
                </Button>
            </form>
        </div>
    );
}
