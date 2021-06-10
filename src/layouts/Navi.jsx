import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted fix = "top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='job adverts'
                    />

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button primary>Sign In</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
