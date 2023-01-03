import React, { useEffect, useState } from 'react';
import { Button, Card, List } from 'semantic-ui-react';
import { ConnectionList } from '../../models/ConnectionList';
import { ConnectionService } from '../../services/ConnectionService';

interface Connection {
    name: string;
    verified: boolean;
}

const Connections: React.FC = () => {
    const [connections, setConnections] = useState<Connection[]>();
    useEffect(() => {
        async function fetchData() {
            const connectionList = await ConnectionService.getConnections();
            const connectionsArray = [];
            if (connectionList?.results) {
                connectionList.results.map(conn => {
                    if (conn.state === 'active')
                        connectionsArray.push({
                            name: conn.connection_id,
                            verified: false
                        });
                });
                setConnections(connections);
            } else {
                setConnections([]);
            }
        }
        fetchData();
    }, []);


    const handleVerify = (index: number) => {
        const newConnections = connections ?? [];
        newConnections[index].verified = true;
        setConnections(newConnections);

        // Send presentation proof request for Hyperledger Aries
        // ...
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