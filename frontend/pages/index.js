import CustomHead from "/components/CustomHead";
import CustomNavbar from "/components/CustomNavbar";
import MyCarousel from "/components/MyCarousel";
import Link from "next/link";
import { Generic } from "rbx";
import styles from "/styles/Home.module.css";

export default function Home() {
    return (
    <>
        <CustomHead title="Pedrenrique Analytics" description="Pedrenrique" />
        <CustomNavbar />
        <Generic className={styles.container}>
            <div id="greetings">
                <h1 className={styles.greeting}>
                    Como podemos te ajudar a salvar vidas?
                </h1>
            </div>
            <div id="about">
                <h2 className={styles.about}>
                    Somos uma startup que começou de uma vontade de dois alunos da Universidade Federal do Rio de Janeiro e membros da <Link href="https://ufrjanalytica.ml">UFRJ Analytica</Link>, de ajudar os hospitais a lidar com os problemas de administração que foram intensificados na pandemia do Covid-19.<br />Oferecemos serviços que podem ser divididos em duas categorias: <b>assistência médica</b> e <b>infraestrutura</b>.
                </h2>
            </div>
            <MyCarousel />
            <div id="contato">
                <h1 className={styles.contact}>
                    Entre em <Link href="/contato">contato</Link> conosco!
                </h1>
            </div>
        </Generic>
    </>
    )
}
