import { OPUIProvider, Text,Button, Container, NavBar, Row, Col, Grid } from '@opui/react';
import { useState } from 'react';
export default function App() {
  const [theme, setTheme] = useState({ darkMode: false });
  return (
    <OPUIProvider theme={theme}>
      <Container main fullScreen background={'#fafafa'}>
        <NavBar fixed>
          <NavBar.Brand />
          <NavBar.Content><Text blod size={'2em'}>OP UI</Text></NavBar.Content>
          <NavBar.Extra />
        </NavBar>
        <Container section fullScreen px='1.5em'>
          <Grid
            col={2}
            css={{
              minHeight: 'inherit',
            }}>
            <Grid.Item  pa='8em 0em 8em 20em' justifySelf='end' alignSelf='center'>
              <Grid col={1}>
                <Grid.Item >
                 <Text blod size={'2.5em'}>Make <Text blod span gradient='linear-gradient(to right top, #e10737, #ed5807, #e78e00, #d1bf00, #a8eb12)'>beautiful</Text> websites regardless of your design experience.</Text>
                </Grid.Item>
                <Grid.Item py='2em' >
                <Text size={'1.2em'} grey>The React UI tools helps you create the best web app</Text> 
                </Grid.Item>
                <Grid.Item>
                  <Row gap='1em' align='center'>
                    <Col><Button>Get Started</Button></Col>
                    <Col><Text >$ npm i @opui/react @emotion/react</Text></Col>
                  </Row>
                </Grid.Item>
              </Grid>
            </Grid.Item>
            <Grid.Item  pl='2em'  alignSelf='center'>
              <Row>
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
              </Row>
              <Row>
                <Col>4</Col>
                <Col>5</Col>
                <Col>6</Col>
                <Col>7</Col>
              </Row>
              <Row>
                <Col>8</Col>
                <Col>9</Col>
                
              </Row>
            </Grid.Item>
          </Grid>
        </Container>
      </Container>
    </OPUIProvider>
  );
}
