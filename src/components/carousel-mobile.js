import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css';
import { Typography } from '@material-ui/core';
import endpoint from '../helpers/api_service';
export default class CarouselComponenet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: this.props.items,
            isMobile: this.props.isMobile
        }
    }

    render() {
        return (
            <Carousel fade style={{ zIndex: -2 }} indicators={false} controls={false} className='carousel-root-mobile'>
                {this.state.items.map((item) => (
                    <Carousel.Item>
                        <>
                            {this.props.isMobile ?
                                <div className='carousel-slide-title-mobile-small'>
                                    <Typography variant='h5' component='h5' className='carousel-slide-title-text'>
                                        {item.title}
                                    </Typography>
                                </div>
                                :
                                <div className='carousel-slide-title-mobile'>
                                    <Typography variant='h3' component='h3' className='carousel-slide-title-text'>
                                        {item.title}
                                    </Typography>
                                </div>
                            }
                            <img
                                className="carousel-slide-img"
                                src={`${endpoint}/${item.src}`}
                                alt="First slide"
                                // width="100%"
                            />
                        </>
                    </Carousel.Item>
                ))}
            </Carousel>)
    }
}