import CustomHead from "/components/CustomHead";
import CustomNavbar from "/components/CustomNavbar";
import Link from "next/link";
import { Generic, Field, Label, Control, Input, Icon, Help, Select, Textarea, Checkbox, Radio, Button } from "rbx";
import styles from "/styles/Home.module.css";

export default function Home() {
    return (
    <>
        <CustomHead title="Contato 🤝 Pedrenrique Analytics" description="Pedrenrique" />
        <CustomNavbar />
        <Generic className={styles.container}>
        <form>
            <Field>
                <Label>Nome</Label>
                <Control>
                <Input type="text" placeholder="Seu nome" />
                </Control>
            </Field>

            <Field>
                <Label>Empresa</Label>
                <Control>
                <Input
                    placeholder="Sua empresa"
                    type="text"
                />
                </Control>
            </Field>

            <Field>
                <Label>Email</Label>
                <Control>
                <Input
                    placeholder="seu@email.com"
                    type="email"
                />
                </Control>
            </Field>

            <Field>
                <Label>Assunto</Label>
                <Control>
                <Input
                    placeholder="Motivo do contato"
                    type="text"
                />
                </Control>
            </Field>

            <Field>
                <Label>Mensagem</Label>
                <Control>
                <Textarea placeholder="Sua mensagem" />
                </Control>
            </Field>

            <Field kind="group">
                <Control>
                <Button style={{"backgroundColor": "#0F2F87"}} color="link"><strong>Enviar</strong></Button>
                </Control>
            </Field>
            </form>
        </Generic>
    </>
    )
}