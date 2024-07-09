import {
  OPUIProvider,
  Text,
  Button,
  BottomNavigation,
  Container,
  NavBar,
  Row,
  Col,
  Grid,
  List,
  Avatar,
  InfiniteScroll,
} from '@opui/react';
import { SetStateAction, useEffect, useState } from 'react';
import type { Theme } from '@opui/react';
import { motion } from 'framer-motion';
import { PalNeed, generatePalNeed } from '../server/pal';
import { useGet } from '../server/htttp';
import { useNavigate } from 'react-router-dom';
export default function PalNeeds() {
  const navigate = useNavigate();
  const [getPalNeedListQuery, setGetPalNeedListQuery] = useState({ page: 1, pageSize: 20 });
  const [palNeedList, setPalNeedList] = useState<PalNeed[]>([generatePalNeed(), generatePalNeed()]);
  const handleGetPalNeedList = async () => {
    const { data: nextPalNeedList } = await useGet<PalNeed[]>('/pal/needs', getPalNeedListQuery);
    console.log(nextPalNeedList?.length > 0);

    if (nextPalNeedList?.length > 0) setPalNeedList(palNeedList => palNeedList.concat(nextPalNeedList));
    else setPalNeedList(palNeedList => palNeedList.concat([generatePalNeed(), generatePalNeed(), generatePalNeed()]));
  };
  const handleClickPalNeed = (needId: string) => {
    console.log('handleClickPalNeed');

    navigate('/need/' + needId);
  };
  const handleLoadMorePalNeed = () => {
    setGetPalNeedListQuery(q => ({
      ...q,
      page: ++q.page,
    }));
  };
  useEffect(() => {
    handleGetPalNeedList();
  }, [getPalNeedListQuery]);

  return (
    <InfiniteScroll onScrollToBottom={handleLoadMorePalNeed}>
      <InfiniteScroll.Content>
        <List>
          {palNeedList.map(palNeed => {
            return (
              <List.Item>
                <Container
                  px='2em'
                  py='1.5em'
                  onClick={() => {
                    handleClickPalNeed(palNeed.id);
                  }}>
                  <Row align='center' gap='1em'>
                    <Col>
                      <Avatar name='我' css={{ background: 'red' }} />
                    </Col>
                    <Col>
                      <Text blod size='1.2em'>
                        想找一个{palNeed.keywords}
                      </Text>
                    </Col>
                  </Row>
                  <Row align='center' py='1em'>
                    <Col leftText flex={1}>
                      <Text maxLength={30}>{palNeed.description}</Text>
                    </Col>
                  </Row>
                  <Row align='center' pb='.5em'>
                    <Col flex={1}>
                      {palNeed.palNumber}个{palNeed.palAge[0]}-{palNeed.palAge[1]}岁的
                      {palNeed.palSex == 0 ? '女' : palNeed.palSex == 1 ? '男' : '不限'}
                      {palNeed.paymentMethod ? 'AA制' : '无需出钱'}
                    </Col>{' '}
                    <Col flex={1} rightText pr='1em'>
                      <Button text> 搭一个</Button>
                    </Col>
                  </Row>
                </Container>
              </List.Item>
            );
          })}
        </List>
      </InfiniteScroll.Content>
      <InfiniteScroll.Ending>
        <Container>ending...</Container>
      </InfiniteScroll.Ending>
      <InfiniteScroll.Loading>
        <Container>loading...</Container>
      </InfiniteScroll.Loading>
    </InfiniteScroll>
  );
}
