import React from 'react';
import '../css/main_css.css';
import { Paper, Grid, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


function Header() {


    return (
        <div>

            <div id='left_aligned_box_component' />

            <div id='nav'>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Paper id='paper_component'>
                        <input className='searchbox' type='text' />
                        <SearchIcon style={{ color: 'white', cursor: 'pointer' }} />
                    </Paper></Grid>
            </div>

            <Divider id='divider_component' />



        </div >
    );
}

export default Header;
