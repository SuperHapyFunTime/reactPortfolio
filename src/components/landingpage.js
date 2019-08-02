import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profileImg from '../imgs/profile.png';


class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={profileImg}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className='banner-text'>
                            <h1>Software Engineer</h1>
                            <h2>
                            <i className="fa fa-map-marker" aria-hidden='true'></i>
                                Liberty-IT, Dublin
                            </h2>
                            <hr />
                            <p>
                                HTML/CSS | JavaScript/ES8 | NodeJs | React | AWS
                            </p>
                            <div className='social-links' >

                                {/* linkedin */}
                                <a href='https://www.linkedin.com/in/danieljamesboyle/' target='_blank' rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden='true'></i>
                                </a>

                                {/* github */}
                                <a href='https://github.com/SuperHapyFunTime' target='_blank' rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden='true'></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid >
            </div>
        )
    }
}

export default LandingPage;