import React, { Component } from 'react'
import './Footer.css';
import endpoint from '../../../helpers/api_service';
import { Button } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationArrow, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import MediaQuery from 'react-responsive';
export default class FooterTop extends Component {
    render() {
        return (
            <div className='footer-top'>

                <img className='footer-top__left' src={`${endpoint}/Shape-01.png`} />
                <div className='footer-top__root'>
                    <MediaQuery maxWidth={900}>
                        <div className='footer-top__mobile'>

                            <Button id='request-btn' variant='link' href='/consultations' className='footer-top__content__mob footer-top__content__right__btn--size'>
                                Request Consultancy
                            </Button>

                        </div>
                    </MediaQuery>
                    <MediaQuery minWidth={900}>
                        <div className='footer-top__content'>

                            <div className='footer-top__content__left'>
                                <div className='footer-top__content__left__row'>
                                    <Button variant='link' className='bmcfooter__center__social__btn'>
                                        <img src={`${endpoint}/Icons 2-01.png`} className='footer-top__center__social__btn__img' />
                                    </Button>

                                    <Button variant='link' className='bmcfooter__center__social__btn'>
                                        <img src={`${endpoint}/Icons 2-02.png`} className='footer-top__center__social__btn__img' />
                                    </Button>

                                    <Button variant='link' className='bmcfooter__center__social__btn'>
                                        <img src={`${endpoint}/Icons 2-03.png`} className='footer-top__center__social__btn__img' />
                                    </Button>

                                </div>
                            </div>
                            <div className='footer-top__content__center'>
                                <div className='footer-top__content__divider'></div>
                            </div>
                            <div className='footer-top__content__right'
                            >
                                <Button id='request-btn' variant='link' href='/consultations' className='footer-top__content__right__btn footer-top__content__right__btn--size'>
                                    Request Consultancy
                                </Button>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
                <img className='footer-top__right' src={`${endpoint}/Shape-02.png`} />

            </div>
        )
    }
}
