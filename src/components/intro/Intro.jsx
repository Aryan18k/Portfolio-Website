import React from 'react';
import { BsWrench } from "react-icons/bs";
import { VscFolderLibrary } from 'react-icons/vsc';
import { FaBookReader } from "react-icons/fa"
import profile_pic from '../../assets/aryan.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
        <img src={profile_pic} alt="" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <a href="#skills">
              <BsWrench className="about__icon" />
              <h5>Skills</h5>
              </a>
            </article>
            <article className="about__card">
            <a href="#portfolio">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
             </a>
            </article>
            <article className="about__card">
              <a href="#education">  
              <FaBookReader className="about__icon" />
              <h5>Education</h5>
              </a>
            </article>
          </div>
          <p>I am a current Masters Student at University of Southern California. I am interested in backend development, competitive coding and familiar with Machine Learning and Artificial Intelligence.</p>
          <h3>Ex-Software Intern at Teradata</h3>
          <p>I have worked as a full-time software intern for Teradata’s Multi-Cloud Provisioning Team. Built and deployed an application where an employee can view the cost of cloud resources from the three major cloud platforms (AWS, GCP, and Azure). Functions of the application include fetching the cost details using the API and sending daily, weekly, monthly alerts to users with a list of instances (EC2s and VMs) running and to shut them down when necessary</p>
          <a href="#contact" className="btn">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro