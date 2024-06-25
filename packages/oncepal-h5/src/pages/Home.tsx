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
  Icon,
  InfiniteScroll,
} from '@opui/react';
import { SetStateAction, useEffect, useState } from 'react';
import type { Theme } from '@opui/react';
import { linkToRoute } from '@oncepal/utils';

import { Link } from 'react-router-dom';
import { fetchGet } from '../server/htttp';
import { PalNeed, generatePalNeed } from '../server/pal';

const Home = () => {
 const [getPalNeedListQuery,setGetPalNeedListQuery] = useState({page:1,
    pageSize:20})
  const [activeItem, setActiveItem] = useState('首页');
  const [palNeedList, setPalNeedList] = useState<PalNeed[]>([generatePalNeed(), generatePalNeed(), generatePalNeed()]);
  const handleNavigationItemChange = (l: SetStateAction<string>) => {
    if (l) setActiveItem(l);
  };
  const handleClickNewPalNeedButton = () => {
    linkToRoute('/NewPalNeed');
  };
  const handleGetPalNeedList = async () => {
    const nextPalNeedList = await fetchGet<PalNeed[]>('/pal/needList',getPalNeedListQuery);
    if (nextPalNeedList.length > 0) setPalNeedList(palNeedList=>palNeedList.concat(nextPalNeedList));
    
};

  const handleLoadMorePalNeed = ()=>{
    setGetPalNeedListQuery(q => ({
        ...q,
        page:++q.page
    }))
  }
  useEffect(() => {
    handleGetPalNeedList();
  }, [getPalNeedListQuery]);
  return (
    <Container main fullScreen>
      <NavBar fixed hasBorderBottom>
        <NavBar.Brand />
        <NavBar.Content>
          <Text blod>ONCE PAL</Text>
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
        <InfiniteScroll onScrollToBottom={handleLoadMorePalNeed}>
          <InfiniteScroll.Content>
            {palNeedList.map(palNeed => {
              return (
                <Container px='1em' py='1.5em'>
                  <Row>
                    <Col>{palNeed.keywords}</Col>
                  </Row>
                  <Row>
                    <Col>{palNeed.description}</Col>
                  </Row>
                </Container>
              );
            })}
          </InfiniteScroll.Content>
          <InfiniteScroll.Ending>
            <Container>ending...</Container>
          </InfiniteScroll.Ending>
          <InfiniteScroll.Loading>
            <Container>loading...</Container>
          </InfiniteScroll.Loading>
        </InfiniteScroll>
      </Container>

      <BottomNavigation activeItem={activeItem} onItemChange={handleNavigationItemChange}>
        {['首页', '广场', '', '消息', '我的'].map(l =>
          l ? (
            <BottomNavigation.Item activeColor={theme => theme.colors.darkBackground!} label={l} />
          ) : (
            <BottomNavigation.Item label={l}>
              <Container center>
                <Container
                  center
                  css={theme => ({
                    height: '2.5em',
                    width: '2.5em',
                    borderRadius: '999px',
                    background: theme.colors.primary,
                  })}
                  onClick={handleClickNewPalNeedButton}>
                  <Icon size='2em' type='bx bx-plus' color='white' />
                </Container>
              </Container>
            </BottomNavigation.Item>
          ),
        )}
      </BottomNavigation>
    </Container>
  );
};
export default Home;
