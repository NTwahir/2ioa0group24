import React, { Component } from "react";
import "tabler-react/dist/Tabler.css";
import { Tab, TabbedCard, Grid, Card } from "tabler-react";

class Home extends Component {
    render() {
        return (
                <TabbedCard initialTab="Tab1">
                <Tab title="Tab1">Hello World</Tab>
                <Tab title="Tab2">Goodbye</Tab>
                <Tab title="Tab3">
                    <Grid.Row cards deck>
                    <Grid.Col md={4}>
                        <Card body="Card1" />
                    </Grid.Col>
                    <Grid.Col md={4}>
                        <Card body="Card2" />
                    </Grid.Col>
                    <Grid.Col md={4}>
                        <Card body="Card3" />
                    </Grid.Col>
                    </Grid.Row>
                </Tab>
                </TabbedCard>
        );
      }
}

export default Home;
