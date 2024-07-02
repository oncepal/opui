import {
  Text,
  Button,
  BottomNavigation,
  Container,
  NavBar,
  Row,
  Col,
  Grid,
  List,
  Toast,
  Dialog,
  Avatar,
  AvatarGroup,
  BottomSheet,
  Icon,
  InfiniteScroll,
} from '@opui/react';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import type { Theme } from '@opui/react';
import { linkToRoute } from '@oncepal/utils';

import { Link, Outlet, NavLink,useNavigate } from 'react-router-dom';
import { fetchGet } from '../server/htttp';
import { PalNeed, generatePalNeed } from '../server/pal';
import { motion } from 'framer-motion';
import Mine from './Mine';
import Needs from './PalNeeds';
const Home = () => {
  const navigate = useNavigate();
  const navigations = useRef([
    { label: '首页', url: '/needs' },
    { label: '广场', url: '/' },
    { label: '', url: '/' },
    { label: '消息', url: '/' },
    { label: '我的', url: '/mine' },
  ]);
  const [loginSheetOpened,setLoginSheetOpened] = useState(false)
  const [getPalNeedListQuery, setGetPalNeedListQuery] = useState({ page: 1, pageSize: 20 });
  const [activeItem, setActiveItem] = useState('首页');
  const [palNeedList, setPalNeedList] = useState<PalNeed[]>([generatePalNeed()]);
  const [appTitle, setAppTitle] = useState('ONCE PAL');
  const handleNavigationItemChange = (l: string) => {
    if (['首页', '我的'].includes(l)) {
      setActiveItem(l);
    }
    if (['广场'].includes(l))
      Toast.show({
        title: '分享碎片化社交的趣事的广场正在建设中！',
      });
    if (['消息'].includes(l))
      Toast.show({
        title: '很快就能发送消息了！',
      });
  };
  const handleClickNewPalNeedButton = () => {
    if(true)
    setLoginSheetOpened(v=>!v)
    else
    navigate('/newPalNeed');
  };

  const handleCloseLoginSheet=()=>{
    setLoginSheetOpened(false)
  }
  const renderActivePage = () => {
    switch (activeItem) {
      case '首页':
        return <Needs />;
      case '我的':
        return <Mine />;

      default:
        return <Needs />;
        break;
    }
  };

  useEffect(() => {
    if (activeItem == '首页') {
      setAppTitle('ONCE PAL');
    }
    if (activeItem == '我的') {
      setAppTitle('我的');
    }
  }, [activeItem]);

  return (
    <Container main fullScreen>
      <NavBar fixed isBordered>
    <NavBar.Brand />
    <NavBar.Content>
      <Text blod>{appTitle}</Text>
    </NavBar.Content>
    <NavBar.Actions />
  </NavBar>
      <Container
        section
        fullScreen
        css={theme => ({
          background: theme.colors.lightBackground,
          paddingTop: theme.app.navBar.height,
          paddingBottom: theme.app.bottomNavigation.height,
        })}>
        {renderActivePage()}
      </Container>

      <BottomNavigation activeItem={activeItem} onItemChange={handleNavigationItemChange}>
        {navigations.current.map(l =>
          l.label != '' ? (
            <BottomNavigation.Item label={l.label} activeColor={theme => theme.colors.darkBackground!}>
              {l.label}
            </BottomNavigation.Item>
          ) : (
            <BottomNavigation.Item label={l.label}>
              <Container center>
                <Container
                 center
                  css={theme => ({
                    height: '3.2em',
                    width: '3.2em',
                    borderRadius: '999px',
                    background: theme.colors.primary,
                  })}
                  onClick={handleClickNewPalNeedButton}
                  >
                  <Grid col={2} colGap='.1rem' rowGap='.1rem'>
                    
                    {
                      [
                        '找', '个', '搭', '子',
                      ].map(t=> <Grid.Item><Text blod p white size='.9rem'>{t}</Text></Grid.Item>)
                    }
              
                    </Grid>
                    
                 
                    {/* <Icon size='2em' src='bx bx-plus' color='white' />
                */}
                </Container>
              </Container>
            </BottomNavigation.Item>
          ),
        )}
      </BottomNavigation>

      <Dialog open={false}></Dialog>
       <BottomSheet open={loginSheetOpened} onClose={handleCloseLoginSheet}>
                {''+loginSheetOpened}
      </BottomSheet>
    </Container>
  );
};
export default Home;
