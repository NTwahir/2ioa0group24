import React, { Component } from "react";
import "tabler-react/dist/Tabler.css";
import { Grid, Card } from "tabler-react";
import CSS from "../CSS/About.module.css"

const { about, iframe } = CSS;

class About extends Component {
    render() {
        return (
            <>
            <Grid.Row cards deck className={about}>
            <Grid.Col md={4}>
            <Card>
                <Card.Status color="yellow" side />
                    <Card.Header>
                        <Card.Title>The tool</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        This interactive web-based tool provides 2 different visualisations 
                        to present dynamic network data.
                    </Card.Body>
            </Card>
            </Grid.Col>
            <Grid.Col md={4}>
            <Card>
                <Card.Status color="orange" side />
                    <Card.Header>
                        <Card.Title>The data</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    The sample data used is the email traffic of former energy service company Enron, 
                    with 149 employees with unique IDs (nodes) and 31.401 emails between them (edges).
                    </Card.Body>
            </Card>
            </Grid.Col>
            <Grid.Col md={4}>
            <Card>
                <Card.Status color="red" side />
                    <Card.Header>
                        <Card.Title>Our team</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    Nagib Twahir, Julia Dobladez Brisquet, Samir Saidi, Thomas Schoenmakers, and Poyraz Yapali are
                    Bachelor students at the Eindhoven University of Technology. 
                    This site has been created as a part of the Q4 course titled DBL HTI + Webtech (2IOA0).
                    </Card.Body>
            </Card>
            </Grid.Col>
            </Grid.Row>
            <Grid.Row cards deck className={about}>
            <Grid.Col md={5}>
            <Card className={iframe}>
                <Card.Status color="black" side />
                    <Card.Header>
                        <Card.Title>Video</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3VHdJkp0vKk" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                    </Card.Body>
            </Card>
            </Grid.Col>
            </Grid.Row>
            </>
        );
      }
}


export default About;
