import { OPUIProvider, Text,Button, Container, NavBar, Row, Col, Grid, List } from '@opui/react';
import { useState } from 'react';
export default function App() {
  const [theme, setTheme] = useState({ darkMode: true });
  return (
    
    <OPUIProvider customTheme={theme}>
      <Container main fullScreen background={'#fafafa'}>
        <NavBar fixed isBordered>
          <NavBar.Brand />
          <NavBar.Content><Text blod size={'2em'}>OP UI</Text></NavBar.Content>
          <NavBar.Actions />
        </NavBar>
        <Container center section fullScreen px='1.5em'>
        
          <Grid
            col={3}
            css={{
              minWidth:'60vw',
              maxWidth:'60vw',
              minHeight: 'inherit',
            }}>
            <Grid.Item  >
             <List></List>
            </Grid.Item>
            <Grid.Item span='2' pl='2em' >
              1
            </Grid.Item>
          </Grid>
      
          
        </Container>
      </Container>
    </OPUIProvider>
  );
}
