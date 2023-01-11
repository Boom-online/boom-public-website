import {Container} from '@mui/material';
import * as React from 'react';
import {ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return <Container>
        {children}
    </Container>;
}
