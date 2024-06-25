import { Text, Button, BottomNavigation, Container, NavBar, Row, Col, Grid, List } from '@opui/react';
import { SetStateAction, useState } from 'react';
import type { Theme } from '@opui/react';
import { RouterProvider } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Home = () => {
  const [activeItem, setActiveItem] = useState('首页');
  const handleNavigationItemChange = (l: SetStateAction<string>) => {
    if (l) setActiveItem(l);
  };
  return (
    <Container main fullScreen background={'#fafafa'}>
      <NavBar fixed hasBorderBottom>
        <NavBar.Brand />
        <NavBar.Content>
          <Text blod>ONCE PAL</Text>
        </NavBar.Content>
        <NavBar.Extra />
      </NavBar>

      
      <Container
        center
        section
        fullScreen
        px='1.5em'
        css={theme => ({
          paddingTop: theme.app.navBar.height,
          paddingBottom: theme.app.bottomNavigation.height,
        })}></Container>



      <BottomNavigation activeItem={activeItem} onItemChange={handleNavigationItemChange}>
        {['首页', '广场', '', '消息', '我的'].map(l =>
          l ? (
            <BottomNavigation.Item label={l} />
          ) : (
            <BottomNavigation.Item label={l}>
              <Button ><Link to={'/newNeed'}><Text white blod>+</Text></Link></Button>
            </BottomNavigation.Item>
          ),
        )}
      </BottomNavigation>
    </Container>
  );
};
export default Home