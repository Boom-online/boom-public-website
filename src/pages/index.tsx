import {Typography} from '@mui/material';
import {StaticImage} from 'gatsby-plugin-image';
import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

export default function IndexPage() {
    return <Layout>
        <StaticImage
            src="../images/example.png"
            loading="eager"
            width={64}
            quality={95}
            formats={['auto', 'webp', 'avif']}
            alt=""
            style={{marginBottom: `var(--space-3)`}}
        />
        <Typography variant={'h1'} sx={{fontSize: '2rem', fontWeight: 800, mb: 4}}>
            Welcome to <b>BOOM!</b>
        </Typography>
    </Layout>;
}

export const Head = () => <Seo title="Home"/>;
