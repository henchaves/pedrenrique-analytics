import ReactCardCarousel from "react-card-carousel";
import { Card } from "rbx";

const styles = {
    slides: {
        position: "relative",
        height: "50vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "top"
    },

    container: {
        backgroundColor: "#FF9100",
        height: "200px",
        width: "323px"
    },

    header: {
        color: "#FFF",
        fontSize: "1.5em"
    },

    content: {
        color: "#FFF",
        fontSize: "1.25em"
    }
}

export default function MyCarousel(props) {
    // slides["container"]["height"] = props.height;
    // slides["container"]["width"] = props.width;
    return (
      <div style={styles.slides}>
        <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
          <Card style={styles.container}><Card.Header><Card.Header.Title style={styles.header}>Auxílio Médico</Card.Header.Title></Card.Header><Card.Content style={styles.content}>Diagnóstico com IA</Card.Content></Card>
          <Card style={styles.container}><Card.Header><Card.Header.Title style={styles.header}>Auxílio Médico</Card.Header.Title></Card.Header><Card.Content style={styles.content}>Prognóstico com IA</Card.Content></Card>
          <Card style={styles.container}><Card.Header><Card.Header.Title style={styles.header}>Auxílio Médico</Card.Header.Title></Card.Header><Card.Content style={styles.content}>Tratamento com IA</Card.Content></Card>
          <Card style={styles.container}><Card.Header><Card.Header.Title style={styles.header}>Infraestrutura Hospitalar</Card.Header.Title></Card.Header><Card.Content style={styles.content}>Gerenciamento</Card.Content></Card>
          <Card style={styles.container}><Card.Header><Card.Header.Title style={styles.header}>Infraestrutura Hospitalar</Card.Header.Title></Card.Header><Card.Content style={styles.content}>Monitoramento em tempo real</Card.Content></Card>
          <Card style={styles.container}><Card.Header><Card.Header.Title style={styles.header}>Infraestrutura Hospitalar</Card.Header.Title></Card.Header><Card.Content style={styles.content}>Predição de falhas de máquinas com IA</Card.Content></Card>
        </ReactCardCarousel>
      </div>
    );
}