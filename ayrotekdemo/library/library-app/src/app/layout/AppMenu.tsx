/*
 * Author: Koray Cil
 * Date: 01/03/2023
 */
import React from 'react';
import { Menu } from 'semantic-ui-react';

function AppMenu() {
    return (
        <Menu secondary inverted size='huge' style={{ backgroundColor: '#003153', color: '#fff' }}>
            {/* Increase the weight of the font to make it more readable */}
            <Menu.Item as="a" href="/verify" icon="address card" fontWeight="bold">
                Onaylama
            </Menu.Item>
            <Menu.Item as="a" href="/connection" fontWeight="bold">
                Bağlantı
            </Menu.Item>

            {/* Align the greeting with the search box */}
            <Menu.Item position='right' style={{ margin: '20px' }}>
                <span>Library Club</span>
            </Menu.Item>
        </Menu>
    );
}

export default AppMenu;