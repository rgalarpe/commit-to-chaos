import React, { CSSProperties } from 'react'
import { Html, Body, Container, Tailwind, Text, Link, Preview } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome to Our Service</Preview>
            <Tailwind>
                <Body className='bg-white'>
                    <Container>
                        <Text className='font-bold text-3xl'>Hello, {name}!</Text>
                        <Text >Thank you for signing up for our service. We're excited to have you on board!</Text>
                        <Link href="https://rommelportfolio.netlify.app/">View My Profile</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
};

//use CSSProperties to style the email template
const body: CSSProperties = {
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
};

const heading: CSSProperties = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '10px',
};

export default WelcomeTemplate
