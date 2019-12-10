import React, { FunctionComponent } from 'react'
import AuthGuard from '../auth-guard'
import Breadcrumbs from './breadcrumbs'
import ProjectsPage from './projects-page'
import SideBar from './side-bar'

const MainPage: FunctionComponent = () => {
  return <AuthGuard>
    <SideBar />
    <main className="margin-top-4 margin-left-4.3">
      <Breadcrumbs />
      <ProjectsPage />
      {/* <ArchivePage/> */}
    </main>
  </AuthGuard>
}

export default MainPage