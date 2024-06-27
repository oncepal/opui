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
  Icon,
  InfiniteScroll,
} from '@opui/react';
import AppBar from '../components/AppBar';
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
    navigate('/newPalNeed');
  };

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
      <AppBar title={appTitle} />
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
                    height: '3.5em',
                    width: '3.5em',
                    borderRadius: '999px',
                    background: theme.colors.primary,
                  })}
                  onClick={handleClickNewPalNeedButton}
                  >
                  <div>
                      <Text p white size='.8rem' pb='.4em'>找 个</Text>
                 <Text p white size='.8rem'>搭 子</Text>
                    </div>
                    
                 
                    {/* <Icon size='2em' type='bx bx-plus' color='white' />
                */}
                </Container>
              </Container>
            </BottomNavigation.Item>
          ),
        )}
      </BottomNavigation>

      <Dialog open={false}></Dialog>
    </Container>
  );
};
export default Home;
