import React, { FunctionComponent } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const SearchBar: FunctionComponent = () => {
    return <>
        <Box
            boxShadow={1}
            style={{
                backgroundColor: 'white', borderRadius: '0.4rem', width: '38rem',
                display: 'flex'
            }}>
            <InputBase className="margin-vertical-0.4 margin-horizontal-1" placeholder="Search project ..."
                style={{ flex:1 }}/>
            <SearchIcon
                className="margin-right-0.6"
                style={{ alignSelf: 'center', color: 'gray' }} />
        </Box>

    </>
}

export default SearchBar