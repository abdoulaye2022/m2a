import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./HeaderApp.css";
import { useNavigate } from "react-router-dom";

export default function HeaderApp() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h3 onClick={() => navigate('/')}>M2ACODE</h3>
            <ul>
                <li>
                    <span onClick={() => navigate("/se-connecter")}>
                        Se connecter
                    </span>
                </li>
                {/* <li>
                    <Button className="create">
                        <Icon name="pencil alternate" /> Creer un post
                    </Button>
                </li> */}
                <li>
                    <Button className="create" style={{ backgroundColor: "#183a1d", color: "white" }} onClick={() => navigate("/creer-un-compte")}>Creer un compte</Button>
                </li>
                {/* <li>
                    <Button icon="user" className="create"></Button>
                </li> */}
            </ul>
        </div>
    );
}
