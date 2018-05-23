import React from 'react';
import Section from './Section';
import Icon from './Icon';

export default () => (
  <div className="container-fluid p-0">
    <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <h1 className="mb-0">Clarence
        <span className="text-primary">Taylor</span>
      </h1>
      <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
        <a href="mailto:name@email.com">name@email.com</a>
      </div>
      <p className="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
      <ul className="list-inline list-social-icons mb-0">
        <li className="list-inline-item">
          <a href="{#}">
            <span className="fa-stack fa-lg">
              <Icon variant="fa fa-circle fa-stack-2x" />
              <Icon variant="fa fa-facebook fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="{#}">
            <span className="fa-stack fa-lg">
              <Icon variant="fa fa-circle fa-stack-2x" />
              <Icon variant="fa fa-twitter fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="{#}">
            <span className="fa-stack fa-lg">
              <Icon variant="fa fa-circle fa-stack-2x" />
              <Icon variant="fa fa-linkedin fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="{#}">
            <span className="fa-stack fa-lg">
              <Icon variant="fa fa-circle fa-stack-2x" />
              <Icon variant="fa fa-github fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
      </ul>
    </Section>

    <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="experience">
      <h2 className="mb-5">Experience</h2>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Senior Web Developer</h3>
          <div className="subheading mb-3">Intelitec Solutions</div>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">March 2013 - Present</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Web Developer</h3>
          <div className="subheading mb-3">Intelitec Solutions</div>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">December 2011 - March 2013</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Junior Web Designer</h3>
          <div className="subheading mb-3">Shout! Media Productions</div>
          <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">July 2010 - December 2011</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Web Design Intern</h3>
          <div className="subheading mb-3">Shout! Media Productions</div>
          <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">September 2008 - June 2010</span>
        </div>
      </div>
    </Section>

    <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="education">
      <h2 className="mb-5">Education</h2>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">University of Colorado Boulder</h3>
          <div className="subheading mb-3">Bachelor of Science</div>
          <div>Computer Science - Web Development Track</div>
          <p>GPA: 3.23</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">August 2006 - May 2010</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">James Buchanan High School</h3>
          <div className="subheading mb-3">Technology Magnet Program</div>
          <p>GPA: 3.56</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">August 2002 - May 2006</span>
        </div>
      </div>
    </Section>

    <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="skills">
      <h2 className="mb-5">Skills</h2>

      <div className="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul className="list-inline list-icons">
        <li className="list-inline-item">
          <Icon type="devicon" icon="html5" />
        </li>
        <li className="list-inline-item">
          <Icon type="devicon" icon="css3" />
        </li>
        <li className="list-inline-item">
          <Icon type="devicon" icon="javascript" />
        </li>
        <li className="list-inline-item">
          <Icon type="devicon" icon="jquery" />
        </li>
        <li className="list-inline-item">
          <i className="devicons devicons-sass" />
          <Icon type="devicon" icon="sass" />
        </li>
        <li className="list-inline-item">
          <Icon type="devicon" icon="less" />
        </li>
        <li className="list-inline-item">
          <Icon type="devicon" icon="bootstrap" />
        </li>
        <li className="list-inline-item">
          <Icon type="devicon" icon="wordpress" />
        </li>
        <li className="list-inline-item">
          <Icon type="devicon" icon="grunt" />
        </li>
        <li className="list-inline-item">
          <Icon type="devicon" icon="gulp" />
        </li>
        <li className="list-inline-item">
          <Icon type="devicon" icon="npm" />
        </li>
      </ul>

      <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0">
        <li>
          <Icon type="fa" icon="check" />
          Mobile-First, Responsive Design
        </li>
        <li>
          <Icon type="fa" icon="check" />
          Cross Browser Testing &amp; Debugging
        </li>
        <li>
          <Icon type="fa" icon="check" />
          Cross Functional Teams
        </li>
        <li>
          <Icon type="fa" icon="check" />
          Agile Development &amp; Scrum
        </li>
      </ul>
    </Section>

    <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="interests">
      <h2 className="mb-5">Interests</h2>
      <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
      <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
    </Section>

    <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="awards">
      <h2 className="mb-5">Awards &amp; Certifications</h2>
      olá
    </Section>
  </div>
);
