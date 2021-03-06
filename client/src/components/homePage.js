import React, {Component} from 'react';
import {Row, Col, Container} from 'reactstrap';
import axios from 'axios';

import GitHub from 'react-icons/lib/fa/github-square';
import GitLab from 'react-icons/lib/fa/gitlab';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import Phone from 'react-icons/lib/fa/phone';
import Email from 'react-icons/lib/fa/at';

import Thumbnail from './Thumbnail';
import Testimonials from './Testimonials';
import ContentArea from './ContentArea';

class Homepage extends Component{

    state = { 
        errorMsg: '', 
        images: [],
        testimonials: [] 
    };

    //Lifecycle methods (some of them):
    componentDidMount = () => {
        //main for data loading
        axios.get('/api/images')
        .then((res)=>{
            console.log("got a response from MONGO");            
            this.setState({images: res.data});
            console.log("data: " + res.imgurl +" res: " + JSON.stringify(res));
            console.log("images found: " + this.state.images.length);            
        })
        .catch((err)=>{
            console.log("got an error from MONGO  -->  " + err);
        });
    }
    
    componentDidUpdate = () => { 
        //tex when set state is called or we get new props this will run
    }

    renderSideText = () => {
        if(this.state.title === 'hello'){
            return(
                <p className="sideText"> 
                    &lt;h1 frontEnd="ReactJS Redux VueJS D3JS JQuery HTML5 CSS3"> <br/>
                    &lt;h2 backEnd="NodeJS .net MongoDB SQL"> <br/>
                    &lt;h3 softwareEngineering="UX RestAPI MVC Git Docker Heroku"> <br/>
                    &lt;h4 generalProgramming="Java JavaScript C C++ C#"> <br/>
                </p> 
            );
        }
    }
    
    render(){
        return(
            <div>
                <div className="parallax-bg">
                    <Container>
                        <Row>
                            <Col xs="1" sm="2"></Col>
                            <Col xs="10" sm="8">

                                <div className="mainArea">
                                    <div className="mainHeader">
                                        <h1>Lucas Fredin</h1>
                                    </div>
                                    <div className="underText">
                                        <p>Software Engineer and Fullstack developer with a passion for everything web-dev</p>
                                    </div>
                                    
                                    <div className="contactInfo">
                                        <Phone className="icon" size={14}/>
                                         098-542-3424
                                        <p>   </p>
                                        <Email className="icon" size={14}/>
                                         l.fredin@mail.com
                                    </div>
                                    
                                    <hr/>

                                    <div className="iconBar">
                                        <a href="/"><GitHub size={40}/></a>
                                        <a href="/"><GitLab size={40}/></a>
                                        <a href="/"><LinkedIn size={40}/></a>
                                    </div>

                                    
                                    {/*
                                    <div className="skill-list">
                                        <p>
                                        &lt;h1 frontEnd="ReactJS Redux VueJS D3JS JQuery HTML5 CSS3"> <br/>
                                        &lt;h2 backEnd="NodeJS .net MongoDB SQL"> <br/>
                                        &lt;h3 softwareEngineering="UX RestAPI MVC Git Docker Heroku"> <br/>
                                        &lt;h4 generalProgramming="Java JavaScript C C++ C#"> <br/>
                                        </p>
                                    </div>
                                     */}

                                </div>
                            </Col>
                            <Col xs="1"  sm="2"></Col>
                        </Row>
                    </Container>    
                </div>

                <div className="portfolio">
                    <ContentArea title="Most recent work ">
                        <Thumbnail images={this.state.images}/>
                        <a href="/projects">See more</a>
                    </ContentArea>
                </div>                     
                

                {/*
                 <ContentArea title="Testimonials "> 
                 <Testimonials/>
                </ContentArea>
                 */}

                <Row>
                    <Col xs="12" sm="12" md="7" xl="6" className="noSidePad">

                        <div className="aboutArea">
                            <ContentArea contentColor="#fbf5f3"  title="If you still want to know more ">
                                <h4>Education:</h4>
                                    <p>I graduated the SEM program at GU year 2020</p>
                                <h4>Experiences:</h4>
                                    <p>3 years in Japan</p>
                                <h4>Stuff I like:</h4>
                                    <p>Web development! Traveling! Writing!</p>
                                <h4>Specializations:</h4>
                                    <p>Web development, OOP</p>
                            </ContentArea>
                        </div>

                    </Col>
                    <Col xs="0" sm="0" md="5" xl="6" className="noSidePad hideWhenSmall">
                        <div className="sidePicture"></div>
                    </Col>
                </Row>     
            </div>
        );
    }
}

export default Homepage;