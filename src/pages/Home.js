import React, { Component } from "react";
import "tabler-react/dist/Tabler.css";
import { Tab, TabbedCard, Grid, Card } from "tabler-react";
import CSS from "../CSS/Home.module.css"

const { home } = CSS;

class Home extends Component {
    render() {
        return (
                <TabbedCard initialTab="The tool">
                <Tab title="The tool" className={home}>
                This interactive web-based tool provides 2 different visualisations to present dynamic network data.
                Simply click on the Visualisations tab in the navigation bar above, and the 2 visualisations will load.
                They are both node-link graphs; the first is a network diagram, where you can click a node to see all its
                immediate connections. The second is an arc diagram, which presents the data on one axis, and on hovering
                over a node, will highlight all its edges. Both diagrams provide a tooltip to view data about the node.<br />
                <br />
                The data comes from the Enron corpus, the history of which is also covered in more detail here. The data used
                contains 149 employees, each unique employee represented by a node, and 31,401 emails between them, being represented
                as edges. This is only a subset of the corpus, the full version of which contains over 600,000 emails and 158 employees,
                with a revised version containing over 1.7 million emails, which offers one of the largest and richest set of 
                publically available, general-purpose corporate emails to date. The corpus also contains the actual email content 
                of the emails that were sent out from employees, however, for our project, we do not consider email content. Rather, 
                we work with a sentiment value that measures the "tone" of the email on an interval of [-1, 1]. <br />
                <br />
                The corpus is a widely used and popular dataset used by many researchers in their studies on social networking 
                and computer-mediated communication. Linguistic comparison with more recent corpora has shown changes in
                the linguistic register of formal e-mail communication in the English language since the data was collected in 2002. 
                Jitesh Shetty and Jafar Adibi from the University of Southern California processed the data in 2004 and published a
                MySQL version, in addition to a link analysis of which users emailed which, revealing more about the relationship between 
                various employees. The corpus is also used as test or training data for machine learning models and natural language processing.
                </Tab>
                <Tab title="The project">The project is part of the Eindhoven University of Technology course 2IOA0 - DBL HTI + Webtech, 
                where we develop a web based application to interactively visualise dynamic network data; anything that can be modeled as a network is covered under this project. 
                Additionally, networks change over time, they are rarely static, so it can be very useful to visualise the structural changes 
                of a network over time. This site has been created as a part of the project, by Nagib Twahir, Julia Dobladez Brisquet, Samir Saidi, 
                and Poyraz Yapali.</Tab>
                <Tab title="Enron">
                    <Grid.Row cards deck className={home}>
                    <Grid.Col md={4}>
                        <Card>
                        <Card.Status color="yellow" side />
                            <Card.Header>
                                <Card.Title>History</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                Enron Corporation was an American energy company based in Houston, Texas, founded by Kenneth Lay in 1985 
                                as a merger between Houston Natural Gas and InterNorth. <br />
                                <br />
                                Enron employed approximately 29,000 staff, and was a major electricity, gas, communications and pulp and paper 
                                company before its bankruptcy on December 3, 2001, and had claimed revenues of $101 billion during 2000, a 
                                658% increase in just four years, from 1996 when their revenue was $13 billion. <br />
                                <br />
                                Their growth and success made them a very attractive company for investors, and was one of the world's leaders in business, 
                                comparable to how we view companies like Apple and Google today. Based on the information people knew then, investing 
                                in Enron in the stock market was the best choice due to this unprecedented and unheard of growth that seemed to have no 
                                signs of slowing down or stopping. <br />
                                <br />
                                As it turns out, only a year later in 2001 things would go quite badly as Enron went bankrupt and thousands of people lost 
                                their jobs, all the money they had invested into Enron, including retirement funds and 401k plans. This was due to a massive 
                                scandal involving Enron that was publicized in October of that year. 
                            </Card.Body>
                        </Card>
                    </Grid.Col>
                    <Grid.Col md={4}>
                    <Card>
                        <Card.Status color="orange" side />
                            <Card.Header>
                                <Card.Title>Scandal</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                Several years after the formation of Enron, in 1990, Jeffrey Skilling was hired as chairman and CEO of Enron Finance Corp., after 
                                impressing Kenneth Lay during Skilling's work with Enron as a consultant for McKinsey & Company. Skilling was promoted to manage 
                                other companies under Enron, such as Enron Gas Servies Co., Enron Capital and Trade Resources, and later, became president and COO of Enron, 
                                second only to Lay.<br />
                                <br />
                                During Skilling's management, Enron adopted an accounting strategy called "mark-to-market", where the anticipated future profits from 
                                any deal were accounted for by estimating their present value, not their historical cost. For example, in 2000, Enron signed a 20 year contract 
                                with Blockbuster Video. Enron thought the contract would result in profits in excess of $100 million. The contract did not work out, however, 
                                and it was doomed from the start. The technology that Blockbuster signed the contract for did not actually work, and Blockbuster ended 
                                the deal.<br />
                                <br />
                                The problem with the mark-to-market strategy is that Enron recognized profits of $100 million from this deal, while they did not 
                                actually earn that money. Yet, they did report profits of $100 million from the deal. Repeated applications of this strategy made it seem like 
                                Enron was a very profitable company, by essentially creating profit out of thin air when it never actually existed. Enron used this 
                                as a way to cover up their failed deals, which, alongside many other accounting loopholes and shady business practices, caused this 
                                unprecedented growth in Enron's profit (which also means that, yes, the 658% increase in profit over 4 years previously mentioned 
                                was actually faked, however, financial advisors obviously did not know about this, and advised clients to invest in Enron due to this 
                                extremely large growth). <br />
                                <br />
                                They had also faked their debts/liabilities by creating offshore companies and they would push the 
                                debt over to them, making it seem like Enron had little debts, as it was no longer on their financial reports, and therefore nonexistent 
                                as far as investors are concerned. Due to this, Enron had manipulated the stock market by fooling investors and financial advisors into 
                                making it seem like Enron was very profitable.<br />
                                <br />
                                Enron's auditors, Arthur Andersen, would have exposed Enron's business practices and manipulation, but Enron had paid the auditors 
                                at Arthur Andersen to look the other way and ignore the issues. All of this led to lawsuits filed by Enron's shareholders, 
                                and investigations into Enron started by the United States Securities and Exchange Commission. The Federal Energy Regulatory Commission 
                                also investigated Enron, and produced the Enron corpus, generated from their email servers in the years leading up to the company's collapse, 
                                which is the dataset we are analysing. Enron filed for bankruptcy by December 2, 2001.
                            </Card.Body>
                        </Card>
                    </Grid.Col>
                    <Grid.Col md={4}>
                    <Card>
                        <Card.Status color="red" side />
                            <Card.Header>
                                <Card.Title>Aftermath</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                The aftermath of the scandal introduced a new set of rules that dramatically changed the accounting industry due to its flaws at the time that led 
                                to this happening. Now, auditors have much stricter independence rules, and the CEO and CFO have to certify the financial statements, so they cannot deny 
                                that they ever saw them (which happened with Enron...) and additionally, penalties were increased for destroying, altering, or fabricating records in 
                                federal investigations or for attempting to defraud shareholders. <br />
                                <br />
                                A result of a class action lawsuit by Enron employees who had lost their jobs and their pensions was a settlement of $3,100 for each employee. Investors 
                                received $4.2 billion in settlement from several banks in 2005. In 2008, a $7.2 billion settlement was reached on behalf of the shareholders.
                                <br />
                                Lay had long supported former president George W. Bush and donated to his campaigns, including his successful campaign in 2000, which increased criticism of the Bush administration in light of the scandal (due to the money that was used to donate to his campaign) 
                                and the Economist on January 2002 claimed Lay had been a close personal friend of Bush's family, and had backed him financially since his Congress bid in 1978, 
                                and he was rumored to be running as Secretary of Energy under Bush's administration, and in the same month, Time magazine accused the administration of 
                                attempting to distance themselves from the scandal.
                            </Card.Body>
                        </Card>
                    </Grid.Col>
                    </Grid.Row>
                </Tab>
                </TabbedCard>
        );
      }
}

export default Home;
