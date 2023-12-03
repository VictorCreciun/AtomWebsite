import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import memberImg1 from "../assets/img/person1.jpg";
import memberImg2 from "../assets/img/person2.jpg";
import memberImg3 from "../assets/img/person3.jpg";
import collabImg1 from "../assets/img/collab1.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const members = [
    {
      title: "Alexei Rusu",
      description: "Design & Development",
      imgUrl: memberImg1,
      linkedin: "https://www.linkedin.com/in/alexei-rusu/",
      github: "https://github.com/alexeirusu",
      instagram: "https://www.instagram.com/alexeirusu/",
    },
    {
      title: "Victor Creciun",
      description: "Design & Development",
      imgUrl: memberImg2,
      linkedin: "https://www.linkedin.com/in/victor-creciun/",
      github: "https://github.com/victor-creciun",
      instagram: "https://www.instagram.com/victor-creciun/",
    },
    {
      title: "Ștefan Andon",
      description: "Design & Development",
      imgUrl: memberImg3,
      linkedin: "https://www.linkedin.com/in/stefan-andon/",
      github: "https://github.com/stefan-andon",
      instagram: "https://www.instagram.com/stefan-andon/",
    },
  ];

  const collaborators = [
    {
      title: "Constantin Arapan",
      description: "Design & Development",
      imgUrl: collabImg1,
      linkedin: "https://www.linkedin.com/in/alexei-rusu/",
      github: "https://github.com/alexeirusu",
      instagram: "https://www.instagram.com/alexeirusu/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>The Team</h2>
                  <p>
                    {/* Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. */}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Members</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Collaborators</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {members.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {collaborators.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
