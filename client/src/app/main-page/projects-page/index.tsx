import React, { FunctionComponent } from 'react'
import SearchBar from '../search-bar';
import ProjectCard from '../project-card';
import CreateProjectBtn from './create-project-btn';
import { Container } from '@material-ui/core';
import ProjectsSelector from '../projects-selector';

const ProjectsPage: FunctionComponent = () => {
    return <>
        <Container className="margin-top-2.5">
            <div className="flex content-between items-center">
                <SearchBar />
                <CreateProjectBtn />
            </div>
            <ProjectsSelector />
            <ProjectCard />
        </Container>
    </>
}

export default ProjectsPage