import Head from "next/head";

export default function CustomHead(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&family=Ubuntu&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
