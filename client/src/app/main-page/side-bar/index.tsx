import React, { FunctionComponent } from 'react'
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import color from '@material-ui/core/colors/lightBlue'
import Folder from '@material-ui/icons/Folder'
import Inbox from '@material-ui/icons/Inbox'
import Settings from '@material-ui/icons/Settings'
import makeStyles from '@material-ui/styles/makeStyles'
import SideBarButton from './side-bar-button'
import SideBarProfile from './side-bar-profile'

const useStyles = makeStyles({
  drawer: {
    '& .MuiPaper-root': {
      justifyContent: `space-between`
    }
  }
})

const SideBar: FunctionComponent = () => {

  const { drawer } = useStyles({})

  return <>
    <Drawer anchor="right"
      variant="permanent"
      className={`${drawer} fs-0.6`}
    >
      <List className="padding-top-4.5">
        <SideBarButton text="Projects" > <Folder /> </SideBarButton>
        <SideBarButton text="Archive"> <Inbox /> </SideBarButton>
      </List>
      <List>
        <SideBarButton text="Settings"> <Settings /> </SideBarButton>
        <SideBarProfile />
      </List>
    </Drawer>
  </>
}

export default SideBar