import React, { FunctionComponent } from 'react'
import { FormControl, Select, MenuItem } from '@material-ui/core'

export class ProjectsSelectorProps { }

const ProjectsSelector: FunctionComponent<ProjectsSelectorProps> = () => {
    const values = [
        {
            title: `All Projects`
        },
        {
            title: `My Projects`
        },
        {
            title: `Shared With Me`
        }
    ]
    return <>
        <FormControl className="margin-top-1.5 margin-bottom-1" style={{ color: 'gray', fontWeight: 'bold' }}>
            <Select
                value={0}
                name="sdfsdfsdf"
            >
                {
                    values.map(({ title }, index) => <MenuItem key={index} value={index} style={{ color: 'gray', fontWeight: 'bold' }}>{title}</MenuItem>)
                }
            </Select>
        </FormControl>
    </>
}

export default ProjectsSelector