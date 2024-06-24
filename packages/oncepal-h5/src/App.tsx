import { OPUIProvider, Text,Button,BottomNavigation, Container, NavBar, Row, Col, Grid, List } from '@opui/react';
import { SetStateAction, useState } from 'react';
export default function App() {
  const [theme, setTheme] = useState({ darkMode: false });
  const [activeItem, setActiveItem] = useState('首页');
  const handleNavigationItemChange=(l: SetStateAction<string>)=>{
    console.log(l);
    
    setActiveItem(l)
  }
  
  return (
    <OPUIProvider theme={theme}>
      <Container main fullScreen background={'#fafafa'}>
        <NavBar fixed hasBorderBottom>
          <NavBar.Brand />
          <NavBar.Content><Text blod>ONCE PAL</Text></NavBar.Content>
          <NavBar.Extra />
        </NavBar>
        <Container center section fullScreen px='1.5em' css={theme=>({
          paddingTop:theme.app.navBar.height,
          paddingBottom:theme.app.bottomNavigation.height
        })}>
        
          
      
          
        </Container>
        <BottomNavigation activeItem={activeItem} onItemChange={handleNavigationItemChange}>
            {['首页','广场','消息','我的'].map(l=><BottomNavigation.Item label={l}/>)}
        </BottomNavigation>
      </Container>
    </OPUIProvider>
  );
}
