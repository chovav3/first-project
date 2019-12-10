import React, { FunctionComponent } from 'react'
import { Fab, makeStyles } from '@material-ui/core'
import CreateNewFolder from '@material-ui/icons/CreateNewFolder';

const CreateProjectBtn: FunctionComponent = () => {
    return <>
        <Fab variant="extended" size="small" color="secondary">
            <CreateNewFolder className="margin-horizontal-0.5" />
            <span className="margin-right-0.5">Create new project</span>
        </Fab>
    </>
}
export default CreateProjectBtn