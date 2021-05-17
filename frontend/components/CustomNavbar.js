import Link from "next/link";
import { Navbar, Button } from "rbx";

export default function CustomNavbar() {
    return (
    <div>
        <Navbar color="white">
            <Link href="/"><Navbar.Brand>
                    <Navbar.Item as="div" style={{cursor: "pointer", marginLeft: "10px", marginRight: "10px"}}>
                        <img
                            src="brand.png"
                            alt="Logo"
                            role="presentation"
                        />
                    </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand></Link>

            <Navbar.Menu>
                <Navbar.Segment align="start">
                    <Link href="/"><Navbar.Item>Início</Navbar.Item></Link>
                    <Link href="/equipe"><Navbar.Item>Equipe</Navbar.Item></Link>
                    <Link href="/contato"><Navbar.Item>Contato</Navbar.Item></Link>
                    {/* <Navbar.Item dropdown hoverable>
                        <Navbar.Link>More</Navbar.Link>
                        <Navbar.Dropdown>
                        <Navbar.Item>About</Navbar.Item>
                        <Navbar.Item>Jobs</Navbar.Item>
                        <Navbar.Item>Contact</Navbar.Item>
                        <Navbar.Divider />
                        <Navbar.Item>Report an issue</Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item> */}
                </Navbar.Segment>

                <Navbar.Segment align="end">
                    <Navbar.Item as="div">
                        <Button.Group>
                            <Button color="primary">
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
