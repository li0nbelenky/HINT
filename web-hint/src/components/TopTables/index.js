import React, { Component } from 'react';
import { Header, Image, Table } from 'semantic-ui-react'

class TopTables extends Component {
    render() {
        return (
            <div className="TopTables">
                <h1>Top HINT resolvers</h1>
                <Table basic='very' celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Employee</Table.HeaderCell>
                            <Table.HeaderCell>Resolution Points</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='/assets/images/avatar/small/lena.png' rounded size='mini' />
                                    <Header.Content>
                                        Lior Haiman
                                        <Header.Subheader>Infra - Project Manager </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                122
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='/assets/images/avatar/small/matthew.png' rounded size='mini' />
                                    <Header.Content>
                                        Daniel Zinger
                                        <Header.Subheader>AppQuarium Guru</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                115
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='/assets/images/avatar/small/lindsay.png' rounded size='mini' />
                                    <Header.Content>
                                        Shany Shmuely
                                        <Header.Subheader>Atom - RND Manager</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                112
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='/assets/images/avatar/small/mark.png' rounded size='mini' />
                                    <Header.Content>
                                        Mark
                                        <Header.Subheader>Executive</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                11
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default TopTables;
