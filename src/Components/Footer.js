import React from 'react';
import '../css/main_css.css';
import { Typography } from '@material-ui/core';


function Footer() {


    return (
        <div>

            <div id='footer'>

                <div>
                    <Typography id='footer_head'>Left Footer Links</Typography>
                    <Typography id='footer_text'>Left Footer Link ONE</Typography>
                    <Typography id='footer_text'>Left Footer Link TWO</Typography>
                </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

               <div>
                    <Typography id='footer_head'>Left Footer Links</Typography>
                    <Typography id='footer_text'>Left Footer Link ONE</Typography>
                    <Typography id='footer_text'>Left Footer Link TWO</Typography>

                </div>

            </div>


        </div >
    );
}

export default Footer;
