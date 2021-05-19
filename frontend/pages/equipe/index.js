import CustomHead from "/components/CustomHead";
import CustomNavbar from "/components/CustomNavbar";
import Link from "next/link";
import { Generic, Card, Image, Media, Title, Content} from "rbx";
import styles from "/styles/Home.module.css";

export default function Home() {
    return (
    <>
        <CustomHead title="Equipe 🤝 Pedrenrique Analytics" description="Pedrenrique" />
        <CustomNavbar />
        <Generic className={styles.container}>
            <Card>
                <Card.Content>
                    <Media>
                    <Media.Item as="figure" align="left">
                        <Image.Container as="p" size={128}>
                        <Image
                            alt="Pedro Boechat"
                            src="pedro.jpeg"
                        />
                        </Image.Container>
                    </Media.Item>
                    <Media.Item>
                        <Title as="p" size={4}>
                            Pedro Boechat
                        </Title>
                        <Title as="p" subtitle size={6}>
                            <br />
                            <b>Co-Fundador</b>
                            <br />
                            Diretor de Infraestrutura Hospitalar
                            <br /><br />
                            <Link href="https://github.com/pedroboechat">GitHub</Link>   |   <Link href="https://www.linkedin.com/in/pedroboechat">LinkedIn</Link>   |   <Link href="mailto:pedro@boech.at">Email</Link>
                        </Title>
                    </Media.Item>
                    </Media>
                </Card.Content>
            </Card>
            <br />
            <Card>
                <Card.Content>
                    <Media>
                    <Media.Item as="figure" align="left">
                        <Image.Container as="p" size={128}>
                        <Image
                            alt="Henrique Chaves"
                            src="henrique.jpeg"
                        />
                        </Image.Container>
                    </Media.Item>
                    <Media.Item>
                        <Title as="p" size={4}>
                            Henrique Chaves
                        </Title>
                        <Title as="p" subtitle size={6}>
                            <br />
                            <b>Co-Fundador</b>
                            <br />
                            Diretor de Assistência Médica
                            <br /><br />
                            <Link href="https://github.com/henchaves">GitHub</Link>   |   <Link href="https://www.linkedin.com/in/henchaves">LinkedIn</Link>   |   <Link href="mailto:henriquechaves@poli.ufrj.br">Email</Link>
                        </Title>
                    </Media.Item>
                    </Media>
                </Card.Content>
            </Card>
        </Generic>
    </>
    )
}
