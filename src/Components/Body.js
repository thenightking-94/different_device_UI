import React from 'react';
import '../css/main_css.css';
import { Grid, Typography } from '@material-ui/core';
import oildrums from '../assets/PEAK_PNG.png';

function Body() {


    return (
        <div>



            <div id='background_compo'>

                <Grid container id='body_grid_container'>

                    <Grid id='first_grid' item sm={6} xs={12} md={6}>
                        <Typography style={{ color: 'white', fontSize: window.innerWidth > `${400}` ? '35px' : '20px' }}><strong>Save 10%</strong></Typography>
                        <Typography style={{ color: 'white', fontSize: window.innerWidth > `${400}` ? '25px' : '15px', fontWeight: 'lighter' }}>Ipsum delicata sed ex</Typography>
                        <Typography style={{ color: 'white', fontWeight: 'light', fontSize: window.innerWidth > `${400}` ? '16px' : '13px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
                    </Grid>

                    <Grid className='image_grid' item sm={6} xs={12} md={6}>
                        <img src={oildrums} style={{ float: window.innerWidth > `${1024}` ? 'right' : '', width: window.innerWidth > `${1024}` ? '60%' : '90%', height: '90%' }} />
                    </Grid>

                </Grid>

            </div>



            {/*using JavaScript window.innerWidth method to determine pixel width
            window.innerWidth> 0px && window.innerWidth <= 400px ===========> Mobile devices
            window.innerWidth> 400px && window.innerWidth <= 1024px ===========> Tablet devices
            window.innerWidth>  1024px ===========> Desktop devices
            */}



            <Grid container className='second_body_container' >

                <Grid item sm={(window.innerWidth > `${400}` && window.innerWidth <= `${1024}`) ? 6 : 4} xs={12} md={(window.innerWidth > `${400}` && window.innerWidth <= `${1024}`) ? 6 : 4} style={{ padding: '20px' }}>
                    <div id='grid1'>
                        <p id='center_text'>#35d3b4</p>
                    </div>
                </Grid>
                <Grid item sm={(window.innerWidth > `${400}` && window.innerWidth <= `${1024}`) ? 6 : 4} xs={12} md={(window.innerWidth > `${400}` && window.innerWidth <= `${1024}`) ? 6 : 4} style={{ padding: '20px' }}>
                    <div id='grid2'>
                        <p id='center_text'>#1b2191</p>
                    </div>
                </Grid>
                <Grid item sm={(window.innerWidth > `${400}` && window.innerWidth <= `${1024}`) ? 6 : 4} xs={12} md={(window.innerWidth > `${400}` && window.innerWidth <= `${1024}`) ? 6 : 4} style={{ padding: '20px', marginLeft: window.innerWidth > `${400}` && window.innerWidth <= `${1024}` ? '20%' : '' }}>
                    <div id='grid3'>
                        <p id='center_text'>#d822ee</p>
                    </div>
                </Grid>

                {
                    window.innerWidth > 0 && window.innerWidth <= `${400}` &&

                    <Grid item xs={12} style={{ padding: '20px' }}>
                        <div id='grid4' />
                    </Grid>
                }

            </Grid>


        </div >
    );
}

export default Body;
