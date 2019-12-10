import React, { FunctionComponent } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

export class props {
    text: string
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
    color?: string
}

const SideBarButton: FunctionComponent<props> = ({ text, children, onClick = () => null }) => {
    return <>
        <ListItem button onClick={onClick} className="flex-column" >
            <ListItemIcon className="min-w-content">{children as any}</ListItemIcon>
            {/* {text} */}
            <ListItemText primary={text} disableTypography />
        </ListItem>
    </>
}

export default SideBarButton