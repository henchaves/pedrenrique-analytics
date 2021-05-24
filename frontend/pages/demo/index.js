import CustomHead from "/components/CustomHead";
import CustomNavbar from "/components/CustomNavbar";
import ClassificadorRX from "/components/ClassificadorRX";
import Link from "next/link";
import { Generic, Dropdown, Button } from "rbx";
import styles from "/styles/Home.module.css";
import React, {useState} from "react";

export default function Home() {

    const [state, setState] = useState("");

    return (
    <>
        <CustomHead title="Demo 🤝 Pedrenrique Analytics" description="Pedrenrique" />
        <CustomNavbar />
        <Generic className={styles.container}>
            <center id="selector">
                <h1 className={styles.selector}>Escolha um serviço para testar</h1>
                
                <Dropdown style={{"paddingTop": "20px"}}>
                    <Dropdown.Trigger>
                    <Button>
                        <span>Selecionar</span>
                    </Button>
                    </Dropdown.Trigger>
                    <Dropdown.Menu>
                    <Dropdown.Content>
                        <Dropdown.Item onClick={() => {setState("raio-x")}}>Classificador de Raio-X</Dropdown.Item>
                    </Dropdown.Content>
                    </Dropdown.Menu>
                </Dropdown>

                {state === "raio-x"? <ClassificadorRX /> : ""}
            </center>
        </Generic>
    </>
    )
}