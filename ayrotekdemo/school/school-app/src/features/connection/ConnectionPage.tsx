import React from 'react';
import QRCode from 'qrcode.react';
import { Header } from 'semantic-ui-react';

const ConnectionPage = () => {
    const link = 'http://31.169.73.233:8030?c_i=eyJAdHlwZSI6ICJkaWQ6c292OkJ6Q2JzTlloTXJqSGlxWkRUVUFTSGc7c3BlYy9jb25uZWN0aW9ucy8xLjAvaW52aXRhdGlvbiIsICJAaWQiOiAiODBhYjU1YTQtYjQ0MC00NWRkLWEyYzUtM2FmYjFhNDcxNDc4IiwgInNlcnZpY2VFbmRwb2ludCI6ICJodHRwOi8vMzEuMTY5LjczLjIzMzo4MDMwIiwgImxhYmVsIjogIkxpYnJhcnkiLCAicmVjaXBpZW50S2V5cyI6IFsiQUtmYjJMOXVhR3JnUUx2UnBWa2JiVVZFRFl6YUI0UExxczlRNmIzTGFhV1YiXX0=';

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