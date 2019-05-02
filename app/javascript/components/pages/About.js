import React from "react"
import PropTypes from "prop-types"
import Ace from "../images/kakashi.png"
import Gabe from "../images/sasuke.jpg"
import Maria from "../images/maria.jpg"
import Francis from "../images/francis.jpg"
import { Card, Icon, Image, Button } from "semantic-ui-react"

class About extends React.Component {
  render () {
    return (
      <React.Fragment>
      <h1>The Team</h1>
      <div className="about">
      <Card.Group itemsPerRow={4}>
        <Card>
          <Image src={Francis}/>
          <Card.Content>
            <Card.Header>Francis Tweedy</Card.Header>
            <Card.Description>Placeholder Text</Card.Description>
          </Card.Content>
          <Card.Content extra>
          <ul>
            <li><a href="https://github.com/ftweedy" target="_blank"><i aria-hidden="true" className="fab fa-github fa-3x"/></a></li>
            <li><a href="https://www.linkedin.com/in/francis-tweedy/" target="_blank"><i aria-hidden="true" className="fab fa-linkedin-in fa-3x"/></a></li>
          </ul>
          </Card.Content>
        </Card>
        <Card>
          <Image src={Maria}/>
          <Card.Content>
            <Card.Header>Maria Dougherty</Card.Header>
            <Card.Description>Placeholder Text</Card.Description>
          </Card.Content>
          <Card.Content extra>
          <ul>
            <li><a href="https://github.com/Maria660253036" target="_blank"><i aria-hidden="true" className="fab fa-github fa-3x"/></a></li>
            <li><a href="https://www.linkedin.com/in/maria-dougherty-9794814b/" target="_blank"><i aria-hidden="true" className="fab fa-linkedin-in fa-3x"/></a></li>
          </ul>
          </Card.Content>
        </Card>
        <Card>
          <Image src={Ace}/>
          <Card.Content>
            <Card.Header>Ace Visai</Card.Header>
            <Card.Description>kill me lmao</Card.Description>
          </Card.Content>
          <Card.Content extra>
          <ul>
            <li><a href="https://github.com/a-visai" target="_blank"><i aria-hidden="true" className="fab fa-github fa-3x"/></a></li>
            <li><a href="https://www.linkedin.com/in/a-visai/" target="_blank"><i aria-hidden="true" className="fab fa-linkedin-in fa-3x"/></a></li>
          </ul>
          </Card.Content>
        </Card>
        <Card>
          <Image src={Gabe}/>
          <Card.Content>
            <Card.Header>Gabriel Torres</Card.Header>
            <Card.Description>My name is Sasuke Uchiha. I hate a lot of things, and I don't particularly like anything. What I have is not a dream, because I will make it a reality. I'm going to restore my clan, and kill a certain someone.</Card.Description>
          </Card.Content>
          <Card.Content extra>
          <ul>
            <li><a href="https://github.com/ItsGabeTheBabe" target="_blank"><i aria-hidden="true" className="fab fa-github fa-3x"/></a></li>
            <li><a href="https://www.linkedin.com/in/gabrieltorres7/" target="_blank"><i aria-hidden="true" className="fab fa-linkedin-in fa-3x"/></a></li>
          </ul>
          </Card.Content>
        </Card>
      </Card.Group>
      </div>
      </React.Fragment>
    );
  }
}

export default About
