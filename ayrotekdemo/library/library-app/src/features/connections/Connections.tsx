import React, { useEffect, useState } from 'react';
import { Button, Card, List } from 'semantic-ui-react';
import { ConnectionList } from '../../models/ConnectionList';
import { IndyProofReqAttrSpec } from '../../models/IndyProofReqAttrSpec';
import { IndyProofReqPredSpec } from '../../models/IndyProofReqPredSpec';
import { V10PresentationExchange } from '../../models/V10PresentationExchange';
import { V10PresentationSendRequestRequest } from '../../models/V10PresentationSendRequestRequest';
import { ConnectionService } from '../../services/ConnectionService';
import { PresentProofV10Service } from '../../services/PresentProofV10Service';

interface Connection {
    name: string;
    verified: boolean;
}
const [loading, setLoading] = useState(false);
const [body, setBody] = useState<V10PresentationSendRequestRequest>();

const Connections: React.FC = () => {
    const [connections, setConnections] = useState<Connection[]>();
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


    const handleVerify = async (index: number) => {
        setLoading(true);
        const newConnections = connections ?? [];
        setBody({
            connection_id: newConnections[index].name,
            auto_verify: true,
            proof_request: {
                name: 'Proof of School Email',
                requested_attributes: {
                    email: {
                        name: "email",
                        restrictions: [
                            {
                                credential_def_id: "HEQRhnkMRimjTZEaeejm21:3:CL:19:default"
                            }
                        ]
                    }
                },
                requested_predicates: {
                    email: {
                        name: "index",
                        p_type: IndyProofReqPredSpec.p_type.BIGGEROREQUAL,
                        p_value: 0,
                        restrictions: [
                            {
                                credential_def_id: "HEQRhnkMRimjTZEaeejm21:3:CL:19:default"
                            }
                        ]

                    }
                }
            }
        });
        PresentProofV10Service.postPresentProofSendRequest(body).then((response) => {
            if (response.verified === V10PresentationExchange.verified.TRUE) {
                newConnections[index].verified = true;
                setConnections(newConnections);
            }
        }).catch((error) => {
            console.log(error);
        });
        setLoading(false);
    };

    return (
        <Card>
            <Card.Content>
                <Card.Header>Connections</Card.Header>
                <List>
                    {connections?.map((connection, index) => (
                        <List.Item key={connection.name}>
                            <List.Content floated="right">
                                {connection.verified ? (
                                    <Button disabled>Verified</Button>
                                ) : (
                                    <Button color="red" onClick={() => handleVerify(index)}>
                                        Verify
                                    </Button>
                                )}
                            </List.Content>
                            <List.Content>
                                <List.Header>{connection.name}</List.Header>
                            </List.Content>
                        </List.Item>
                    ))}
                </List>
            </Card.Content>
        </Card>
    );
};

export default Connections;