import React, { FunctionComponent } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        borderRadius: ("1.5rem")
    },
    input: {
        display: 'none',
    },
}));

const ShareWithClient: FunctionComponent = () => {
    const classes = useStyles({});
 
    return <>

        <Button variant="contained" color-secondary size="small" className={classes.button}  >
            <span>Share project</span>
      </Button>

    </>
}
export default ShareWithClient