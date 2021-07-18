import React, { Fragment } from 'react'
import flogo from '../../assets/img/flogo.png'

function Footer() {
    return (
        <Fragment>

            <footer class="border-top" style={{backgroundColor: 'rgb(226, 243, 243)'}}>

                <div class="container-xl ">

                    <div class="text-center">
                        <img class="pt-1" src={flogo} alt=""/>
                        <p class="m-0" style={{fontSize: '10px'}}>Copyright @2021 InokiArdhi</p>
                    </div>

                </div>

            </footer>

        </Fragment>
    )
}

export default Footer
