import React, { FunctionComponent } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SideBarButton from '../side-bar-button'
import Person from '@material-ui/icons/Person';

export type props = {}

const SideBarProfile: FunctionComponent<props> = ({ }) => {
    const src = `/images/shlomo.png`
    return <>
        <SideBarButton text="Profile">{
            src ?
                <img src={src} width="32" height="32" className="radius" /> :
                <Person />
        }</SideBarButton>
    </>
}

export default SideBarProfile