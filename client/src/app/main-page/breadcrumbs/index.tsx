import React, { FunctionComponent } from 'react'
import MUIBreadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Typography, Link } from '@material-ui/core';

const Breadcrumbs: FunctionComponent = () => {
    const urls = [
        {
            title: `Projects`,
            pathname: `/`
        },
        {
            title: `Bounce`,
            pathname: `/`
        }
    ]
    return <>
        <MUIBreadcrumbs className="padding-left-2 fs-0.8 padding-vertical-0.2"
            style={{ backgroundColor: '#B4B4B4' }}
            separator={<NavigateNextIcon fontSize="small" style={{ color: 'white' }} />}>
            {
                urls.map(({ title, pathname }) => <Link href={pathname} key={pathname} style={{ color: 'white' }}>
                    {title}
                </Link>)
            }
            <Typography className="fs-0.8" style={{ color: 'white' }}>Breadcrumb</Typography>
        </MUIBreadcrumbs>
    </>
}

export default Breadcrumbs