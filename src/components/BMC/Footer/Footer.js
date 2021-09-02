import React, { Component } from 'react'
import './Footer.css';
import endpoint from '../../../helpers/api_service';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationArrow, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';
export default class Footer extends Component {
    render() {
        return (
            <div className='bmcfooter__root' style={{
                backgroundImage: `url(${endpoint}/Footer.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='bmcfooter__row'>
                    <div className='bmcfooter__row__left'>
                        <img src={`${endpoint}/Logo (1).png`} className='bmcfooter__row__img' />
                    </div>
                    <div className='bmcfooter__row__divider--base'>
                        <div className='bmcfooter__row__divider' />
                    </div>
                    <div className='bmcfooter__row__center'>
                        <div className='bmcfooter__center__name bmcfooter__center__name--size'>
                            <img src={`${endpoint}/IMG.png`} className='bmcfooter__center__name__img' />
                        </div>
                        <br></br>
                        <div className='bmcfooter__center__social'>
                            <Button variant='link' className='bmcfooter__center__social__btn'>
                                <img src={`${endpoint}/Facebook.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn'>
                                <img src={`${endpoint}/Instagram.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn'>
                                <img src={`${endpoint}/Twitter.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn'>
                                <img src={`${endpoint}/Linkedin.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn'>
                                <img src={`${endpoint}/Youtube.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                        </div>
                    </div>
                    <div className='bmcfooter__row__divider--base'>
                        <div className='bmcfooter__row__divider' />
                    </div>
                    <div className='bmcfooter__row__right'>
                        <Typography className='bmcfooter__right__info'>
                            <span>
                                <Button variant='link' className='bmcfooter__right__info__btn'>
                                    <img src={`${endpoint}/Location.png`} className='bmcfooter__center__social__btn__img' />
                                </Button>
                                B103 90th Road, 5th
                                Settlement, New Cairo
                            </span>
                        </Typography>
                        <br></br>
                        <Typography className='bmcfooter__right__info'>
                            <span>                            <Button variant='link' className='bmcfooter__right__info__btn'>
                                <img src={`${endpoint}/Phone.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>

                                01008224224
                            </span>

                        </Typography>
                        <br></br>
                        <Typography className='bmcfooter__right__info'>
                            <span>                            <Button variant='link' className='bmcfooter__right__info__btn'>
                                <img src={`${endpoint}/Email.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>

                                info@bmceg.com
                            </span>

                        </Typography>
                    </div>
                </div>
            </div>
        )
    }
}
