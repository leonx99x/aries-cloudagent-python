import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Button, Card, List } from 'semantic-ui-react';
import { ConnectionList } from '../../models/ConnectionList';
import { IndyProofReqAttrSpec } from '../../models/IndyProofReqAttrSpec';
import { IndyProofReqPredSpec } from '../../models/IndyProofReqPredSpec';
import { V10PresentationExchange } from '../../models/V10PresentationExchange';
import { V10PresentationSendRequestRequest } from '../../models/V10PresentationSendRequestRequest';
import { ConnectionService } from '../../services/ConnectionService';
import { PresentProofV10Service } from '../../services/PresentProofV10Service';
import '../../app/layout/styles.css';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

interface Connection {
    name: string;
    verified: boolean;
}


const Connections: React.FC = () => {
    const [connections, setConnections] = useState<Connection[]>();
    const [loading, setLoading] = useState(false);
    const [requestStates, setRequestStates] = useState<{ [index: number]: boolean }>({});
    const [body, setBody] = useState<V10PresentationSendRequestRequest>();
    useEffect(() => {
        async function fetchData() {
            const connectionList = await ConnectionService.getConnections();
            const connectionsArray: Connection[] = [];
            if (connectionList?.results) {
                connectionList.results.map(conn => {
                    if (conn.state === 'active')
                        connectionsArray.push({
                            name: conn.connection_id ?? '',
                            verified: false
                        });
                });
                setConnections(connectionsArray);
            } else {
                setConnections([]);
            }
        }
        fetchData();
    }, []);


    const handleVerify = (index: number) => {
        setLoading(true);
        const newConnections = connections ?? [];
        PresentProofV10Service.getPresentProofRecords(newConnections[index].name).then((res) => {
            if (res?.results) {
                res.results.map((record) => {
                    if (record.state === 'verified') {
                        newConnections[index].verified = true;
                        setConnections(newConnections);
                    }
                })
            }
        })
        setLoading(false);
    };
    function handleSent(index: number): void {
        const newConnections = connections ?? [];
        const newRequestStates = { ...requestStates };
        newRequestStates[index] = true;
        setRequestStates(newRequestStates);
        setBody({
            'connection_id': newConnections[index].name,
            'proof_request': {
                'name': 'Proof of Email',
                'requested_attributes': {
                    'email': {
                        'name': 'email',
                        'restrictions': [
                            {
                                'cred_def_id': 'HEQRhnkMRimjTZEaeejm21:3:CL:19:default'
                            }
                        ]
                    }
                },
                'requested_predicates': {
                },
                "version": "1.0"
            },
            "trace": false

        });
        PresentProofV10Service.postPresentProofSendRequest(body as V10PresentationSendRequestRequest).then((res) => {
            console.log(res);

        });
    }

    return (
        <div className="container" >

            {<Card className="card">
                <Card.Content>
                    <Card.Header>Connections</Card.Header>
                    <Table>
                        <List>
                            {connections?.map((connection, index) => (
                                <List.Item key={connection.name}>
                                    <List.Content floated="right">
                                        {connection.verified ? (
                                            <Button color="green" disabled>Verified</Button>
                                        ) : (
                                            <Button color="red" onClick={() => handleVerify(index)}>
                                                Verify
                                            </Button>
                                        )}
                                    </List.Content>
                                    <List.Content floated="right">
                                        {requestStates[index] ? (
                                            <Button color="grey" disabled>Sent</Button>
                                        ) : (
                                            <Button color="yellow" onClick={() => handleSent(index)}>
                                                Send Request
                                            </Button>
                                        )}
                                    </List.Content>
                                    <List.Content className="list-content">
                                        <List.Header>{connection.name}</List.Header>
                                    </List.Content>
                                </List.Item>
                            ))}
                        </List>
                    </Table>
                </Card.Content>
            </Card>}
        </div>
    );
};

export default Connections;