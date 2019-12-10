import React, { FunctionComponent } from 'react'
import { Box, Card } from '@material-ui/core'

const ProjectCardStatus: FunctionComponent = () => {
    return <>
        <span
            style={{ display: 'flex', alignItems: 'center' }}>
            <h3 className="fs-0.8    margin-right-1"
                style={{ color: 'Gray', fontWeight: 'normal' }}>
                In progress
             </h3>

            <h3 className="fs-0.8 margin-right-1.5"
                style={{ color: 'Gray', fontWeight: 'normal' }}>
                {"70%"}
            </h3>
        </span>
    </>
}
export default ProjectCardStatus