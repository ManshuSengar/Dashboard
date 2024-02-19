import React from 'react';
import { Container, Grid, Hidden, Paper } from '@mui/material';
import './style.css'
import enhi from '../../../assets/images/enhi.jpg'
import Refresh from '../../../assets/images/Refresh_icon.png'

const Signin = () => {
  return (
    <div className='signin-page'>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          direction="row"
          className='box3'
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} sm={5} className='boxd'>
            <Paper>

              <Grid container direction="column" alignItems="center">

                <Grid item>
                  <div className='left-sidex'>
                    <div className='left-sidex2'>
                      <img src={enhi} />
                    </div>
                    <div className='left-sidex2'>
                      WelCome to SIDBI Single<br />
                      Sign On
                    </div>

                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7} className='boxd'>
            <Paper style={{ minHeight: '200px' }}>
              {/* Second child box */}
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <form className='sign-form'>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="enter capTcha" />
                    <span>Enter CapTcha</span>
                    
                    <div className='captcha-box'>
                    <span className='captch-code'>
                      cadCw2</span>
                    <button>
                    <span className='captch-refresh'>
                      <img src={Refresh} alt='Refresh' />
                    </span>
                    </button>
                    </div>
                    
                  
                    <button className='btn-submit' type="submit">Sign In</button>
                  </form>
                </Grid>
                <Grid item>
                  <ul className='grid-sign'>
                    <li>
                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                      <span>daafhfhk sdfs daafhfhk sdfs fsdfks fsfkjds fswek fwhfkewf
                        ekjerg grnregg r,gnlr fjds fsdf dge rhtrh  sjsg ggf fsdfks
                        fsfkjds fswek fwhfkewf ekjerg grnregg r,gnlr fjds fsdf dge rhtrh  sjsg ggf</span>
                    </li>
                    <li>
                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                      <span>daafhfhk sdsjsg ggf</span>
                    </li>
                    <li>
                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                      <span>daafhfhk sdsjsg ggf</span>
                    </li>
                    <li>
                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                      <span>daafhfhk sdsjsg ggf</span>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Signin;
