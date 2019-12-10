import React, { FunctionComponent } from 'react'
import { Container } from '@material-ui/core'
import SearchBar from '../search-bar'
import ProjectCard from '../project-card'
import ProjectsSelector from '../projects-selector'

export class ArchivePageProps { }

const ArchivePage: FunctionComponent<ArchivePageProps> = () => {
    return <>
        <Container className="margin-top-2.5">
            <SearchBar />
            <ProjectsSelector/>
            <ProjectCard />
        </Container>
    </>
}

export default ArchivePage