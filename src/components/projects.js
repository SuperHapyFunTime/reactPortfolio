import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 }
  }

  toggleCategorys() {
    switch (this.state.activeTab) {
      case 0:
        return (
          <div className='projects-grid'>
            {project()}
            {project()}
            {project()}
            {project()}
            {project()}
            {project()}
            {project()}
            {project()}
          </div>)
      case 1:
        return (<div><h1>React Page</h1></div>)
      case 2:
        return (<div><h1>Python Page</h1></div>)
      case 3:
        return (<div><h1>Unity Page</h1></div>)      
      case 4:
        return (<div><h1>Random Page</h1></div>)
      default:
        console.log('Switch is broken');
        break;
    }
  }

  render() {
    return (
      <div className='category-tabs'>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All</Tab>
          <Tab>React</Tab>
          <Tab>Python</Tab>
          <Tab>Unity</Tab>
          <Tab>Random</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>
              {this.toggleCategorys()}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

function project() {
  return (
    <Card className='project-item' shadow={5} style={{ minWidth: '450' }}>
      <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>React Project</CardTitle>

      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>

      <CardActions className="card-actions" border>
        <Button colored>GitHub</Button>
        <Button colored>Demo</Button>
      </CardActions>

    </Card>
  )
}
export default Projects;