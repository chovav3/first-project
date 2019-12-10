import classes from '*.module.css'
import React, { FunctionComponent } from 'react'
import { Box, Card, CardActionArea, CardActions, CardContent, IconButton } from '@material-ui/core'
import MoreVert from '@material-ui/icons/MoreVert'
import ProjectCardStatus from './project-card-status'

const ProjectCard: FunctionComponent = () => {
    return <>
        <Card className="flex">
            <CardActionArea>
                <CardContent className="flex content-between padding-0">
                    <span
                        style={{ display: 'flex', alignItems: 'center', width: `80%` }}>
                        <h3 className="margin-left-1.5 fs-1 margin-right-2.5"
                            style={{ color: 'dark Gray', fontWeight: 'bold' }}>
                            Bounce
                 </h3>

                        <h3 className="fs-0.8 margin-right-1.5"
                            style={{ color: 'Gray', fontWeight: 'normal' }}>
                            Started at: 19/08/2019 16:30
                </h3>
                        <h3 className="fs-0.8 margin-right-1.5"
                            style={{ color: 'Gray', fontWeight: 'normal' }}>
                            Last update: 19/08/2019 16:30 by: Shlomo Bar - Project manager
                </h3>
                    </span>
                    <ProjectCardStatus />
                </CardContent>
            </CardActionArea >
            <CardActions>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </CardActions>
        </Card>
    </>
}
export default ProjectCard