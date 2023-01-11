import {Typography} from '@mui/material';
import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

export default function NotFoundPage() {
    return <Layout>
        <Typography variant={'h1'} sx={{fontSize: '2rem', fontWeight: 800, mb: 4}}>
            404: Not Found
        </Typography>
        <Typography variant={'body1'}>
            You just hit a route that doesn&#39;t exist... the sadness.
        </Typography>
    </Layout>;
}

export const Head = () => <Seo title="404 - Page not found"/>;
