import Link from "next/link";
import { Navbar, Button } from "rbx";

export default function CustomNavbar() {
    return (
    <div className="top-navbar">
        <Navbar style={{"backgroundColor": "#74BDEE", "borderBottom": "1px solid #0F2F87"}} color="info">
            <Link href="/"><Navbar.Brand>
                    <Navbar.Item as="div" style={{"cursor": "pointer", "marginLeft": "20px"}}>
                        <img
                            src="logo-1.png"
                            alt="Logo"
                            role="presentation"
                        />
                    </Navbar.Item>
                    <Navbar.Item as="div" style={{"cursor": "pointer", "marginLeft": "-10px", "marginRight": "10px"}}>
                        <img
                            src="font-1.png"
                            alt="Logo"
                            role="presentation"
                        />
                    </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand></Link>

            <Navbar.Menu style={{"backgroundColor": "#74BDEE", "padding": "0px"}} >
                <Navbar.Segment align="end">
                    <Link href="/"><Navbar.Item style={{"fontSize": "1.5em", "fontFamily": "Ubuntu"}}><strong>Início</strong></Navbar.Item></Link>
                    <Link href="/equipe"><Navbar.Item style={{"fontSize": "1.5em", "fontFamily": "Comfortaa"}}><strong>Equipe</strong></Navbar.Item></Link>
                    <Link href="/contato"><Navbar.Item style={{"fontSize": "1.5em", "fontFamily": "Ubuntu"}}><strong>Contato</strong></Navbar.Item></Link>
                    <Navbar.Item as="div">
                        <Button.Group>
                            <Button style={{"backgroundColor": "#0F2F87", "fontSize": "1.5em"}} color="link">
                                <Link href="/demo"><strong>Demo</strong></Link>
                            </Button>
                            {/* <Button color="light">Log in</Button> */}
                        </Button.Group>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    </div>
    )
}
