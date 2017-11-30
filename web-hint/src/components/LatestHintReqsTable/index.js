import React, { Component } from 'react';
import { Header, Image, Table, Item, Card, Button } from 'semantic-ui-react'

class LatestHintReqsTable extends Component {
    render() {
        return (
            <div className="LatestHintReqsTable">
                <h1>Latest Trending Hints</h1>
                <Card>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>
                                Daniel Zinger
                            </Card.Header>
                            <Card.Meta>
                                AppQuarium Guru
                            </Card.Meta>
                            <Card.Description>
                                Please help me take over the universe
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>Offer Help</Button>
                                <Button basic color='red'>Ignore</Button>
                            </div>
                        </Card.Content>
                    </Card>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>
                                Shany Shmuely
                            </Card.Header>
                            <Card.Meta>
                                Software Development Team Leader
                            </Card.Meta>
                            <Card.Description>
                                Please help me start a "bring food from home" initiative in IronSource
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>Offer Help</Button>
                                <Button basic color='red'>Ignore</Button>
                            </div>
                        </Card.Content>
                    </Card>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>
                                Lior Haiman
                            </Card.Header>
                            <Card.Meta>
                                Project Manager
                            </Card.Meta>
                            <Card.Description>
                                Please drink the tea
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>Offer Help</Button>
                                <Button basic color='red'>Ignore</Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Card>
            </div>
        );
    }
}

export default LatestHintReqsTable;
