import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import Footer from '../Footer';
import ecom from "../../assets/Projects/ecom.png"
import reactblog from "../../assets/Projects/reactblog.png";
import foodapp from "../../assets/Projects/foodapp.png"
import dgclock from "../../assets/Projects/dgclock.png";
import redux from "../../assets/Projects/redux.png";
import weather from "../../assets/Projects/weather.png";

import SUMMARY from "../../assets/Projects/ORDER SUMMARY.jpg";
import Overview from '../../assets/Projects/1-A1-Overview-Pollution Data.jpg';
import AirBnB from '../../assets/Projects/6-B1-Overview-AirBnB Data.jpg';
import Supply from '../../assets/Projects/8-C5-Supply Chain Management.jpg';
import HR from '../../assets/Projects/11-D-HR Employee Data Analysis.jpg';
import Call from '../../assets/Projects/12-E-Call Centre Call Review Analysis.jpg';
import Airline from '../../assets/Projects/43-Airline Analysis-(a).jpg';
import Customer from '../../assets/Projects/41-Customer Churn Analysis-(a).jpg';
import Life from '../../assets/Projects/44-Life Expectancy-(a).jpg';
import Covid from '../../assets/Projects/42-Covid-19 Analysis.jpg';


import Store from '../../assets/Projects/30-Creating-report.jpg';
import Assig2 from '../../assets/Projects/32-Assignment-2-solution.jpg';
import Assig3 from '../../assets/Projects/35-Assignment-3-solution.jpg';
import Assig4 from '../../assets/Projects/36-Assignment-4-solution.jpg';
import Map1 from '../../assets/Projects/12-Map.jpg';
import map2 from '../../assets/Projects/13-Filled-map.jpg';
import map3 from '../../assets/Projects/31-Create-map.jpg';
import Inserting from '../../assets/Projects/27-Inserting Objects.jpg';
import Bookmarks from '../../assets/Projects/29-Bookmarks.jpg';
import Area from '../../assets/Projects/07-Area-chart.jpg';
import Combo from '../../assets/Projects/08-Combo-chart.jpg';
import Bar from '../../assets/Projects/01-Bar-chart.jpg';




function Projects() {
    return (
        <section>
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading">
                        My Recent <strong className="purple">Works </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Here are a few projects I've worked on recently.
                    </p>

                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={ecom}
                                isBlog={false}
                                title="E-commerce"
                                description="An E-commerce website, specially designed for people who love to shop sitting at home with just one click. In Which User and Admin both can access the website. This project is built by using ReactJS, CSS, NodeJS and MongoDB as a database."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={reactblog}
                                isBlog={false}
                                title="Personal Blog"
                                description="I've created a blogging website featuring trending topics from a variety of domains, including Bollywood, Hollywood, the latest advancements in technology, and mouthwatering food recipes. This project was developed using React, incorporating the Context API, and styled using CSS with styled-components.."
                                ghLink="https://github.com/krishankanhay/reactjs_blog_web_app_01"
                                demoLink="https://reactjs-blog-web-app-01.netlify.app/"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={foodapp}
                                isBlog={false}
                                title="FoodRecipe App"
                                description="I've designed a website that an extensive collection of recipes, complete with step-by-step instructions for each dish. These recipes have been sourced and integrated into the platform via an external API. Users can search for specific items and even save their favourite recipes for future reference. And also User can add their own recipes"
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={dgclock}
                                isBlog={false}
                                title="Digital clock and Alarm"
                                description="This project is a dynamic digital clock in which the user can see the real time and also set the alarm. And according to the set time the images will change. This project was developed using Html, CSS and JavaScript"
                                ghLink="https://github.com/krishankanhay/js_reminder_clock_app_01"
                                demoLink="https://krishankanhay.github.io/js_reminder_clock_app_01/"
                            />
                        </Col>


                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={redux}
                                isBlog={false}
                                title="Redux Shopping Card"
                                description="An website, created by using Redux which is one of the best for state  management and data flow librery. You can shop electrical products online."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={weather}
                                isBlog={false}
                                title="Weather App"
                                description="I've created a straightforward application for retrieving weather information for any global location. This app utilizes a weather API to fetch the necessary data."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>



                        {/* ------------------------ */}

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={SUMMARY}
                                isBlog={false}
                                title="ORDER SUMMARY"
                                description="Summary..."
                                ghLink="#"
                                demoLink="https://datastudio.google.com/reporting/a244b161-bda6-4062-a552-ca64e0685c2f/page/n3Z0F"
                            />
                        </Col>
                        

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Overview}
                                isBlog={false}
                                title="US Pollution Analysis"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>


                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={AirBnB}
                                isBlog={false}
                                title="AirBnB Data Analysis"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Supply}
                                isBlog={false}
                                title="Supply Chain Management"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={HR}
                                isBlog={false}
                                title="HR Employee Data Analysis"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>


                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Call}
                                isBlog={false}
                                title="Call Centre Call Review Analysis"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Airline}
                                isBlog={false}
                                title="Airline Analysis"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Customer}
                                isBlog={false}
                                title="Customer Churn Analysis"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Life}
                                isBlog={false}
                                title="Life Expectancy"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Covid}
                                isBlog={false}
                                title="Covid-19 Analysis"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>


                    </Row>
                </Container>





                {/* ------------------------ */}

                <Container>
                    <h1 className="project-heading">
                        My Recent <strong className="purple">Works </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Here are a few --- hands-on --- I've worked on recently.
                    </p>

                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Store}
                                isBlog={false}
                                title="Super Store Sales Summary"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Assig2}
                                isBlog={false}
                                title="Assignment-2-solution"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Assig3}
                                isBlog={false}
                                title="Assignment-3-solution"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Assig4}
                                isBlog={false}
                                title="Assignment-4-solution"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Map1}
                                isBlog={false}
                                title="Map"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={map2}
                                isBlog={false}
                                title="Filled-map"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={map3}
                                isBlog={false}
                                title="Create-map"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Inserting}
                                isBlog={false}
                                title="Inserting Objects"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Bookmarks}
                                isBlog={false}
                                title="Bookmarks"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Area}
                                isBlog={false}
                                title="Area-chart"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Combo}
                                isBlog={false}
                                title="Combo-chart"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={Bar}
                                isBlog={false}
                                title="Bar-chart"
                                description="loading..."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                    </Row>
                </Container>

            </Container>
            <Footer />
        </section>
    )
}

export default Projects;




