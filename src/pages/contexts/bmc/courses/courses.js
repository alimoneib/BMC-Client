import React, { Component } from 'react'
import './courses.css';
import axios from 'axios';
import endpoint from '../../../../helpers/api_service';
import { Grid, Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';

export default class CoursesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/courses?company=BMC`)
            .then((res) => {
                console.log('rainbow')
                this.setState({
                    courses: res.data,
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${endpoint}/bg-our-story.png)`, backgroundSize: 'cover' }}>
                <div className='courses-list-root'>
                    {this.state.courses.map((course) => (
                        <div className='course-list-row'>
                            <Grid container>
                                <Grid item xs={6} className='course-list-left'>
                                    <img className='course-list-img' src={`${endpoint}/${course.images[0].src}`} />
                                </Grid>
                                <Grid item xs={6} className='course-list-right'>
                                    <p className='bukra-bold course-title-size'>
                                        {course.displayTitle}
                                        <hr></hr>
                                    </p>
                                    <p className='bukra-regular course-list-desc'>
                                        {course.description}
                                    </p>
                                    <br></br>
                                    <Button variant='danger' className='course-list-btn' href={`/courses/${course.title}`}>Read More</Button>
                                </Grid>
                            </Grid>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}