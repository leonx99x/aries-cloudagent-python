import React from 'react';
import QRCode from 'qrcode.react';
import { Header } from 'semantic-ui-react';

const ConnectionPage = () => {
    const link = 'http://31.169.73.233:8020?c_i=eyJAdHlwZSI6ICJkaWQ6c292OkJ6Q2JzTlloTXJqSGlxWkRUVUFTSGc7c3BlYy9jb25uZWN0aW9ucy8xLjAvaW52aXRhdGlvbiIsICJAaWQiOiAiNTc4ODM4MGItMmE5YS00NjE0LWE4ZmItMTNhMjFkODljZGFlIiwgInJlY2lwaWVudEtleXMiOiBbIjNjcmN3cFl0S2FWWFA2d3BMM2R5aHMzUG1hYmQ3MjVTak05OFBKS0ZwVFdLIl0sICJzZXJ2aWNlRW5kcG9pbnQiOiAiaHR0cDovLzMxLjE2OS43My4yMzM6ODAyMCIsICJsYWJlbCI6ICJTY2hvb2wifQ==';

    //make qr stay at center of screen
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
            <div style={{ marginTop: 40 }}>
                <Header as="h3">Bağlantı İçin Tarayın</Header>
            </div>
            <div style={{ marginTop: 40 }}>
                <QRCode value={link} size={400} />
            </div>
        </div>
    );
};

export default ConnectionPage;