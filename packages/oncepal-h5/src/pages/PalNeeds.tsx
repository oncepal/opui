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
  AvatarGroup,
  InfiniteScroll,
} from '@opui/react';
import { SetStateAction, useEffect, useState } from 'react';
import type { Theme } from '@opui/react';
import { motion } from 'framer-motion';
import { PalNeed, generatePalNeed } from '../server/pal';
import { fetchGet } from '../server/htttp';
import { useNavigate } from 'react-router-dom';
export default function PalNeeds() {
  const navigate = useNavigate();
  const [getPalNeedListQuery, setGetPalNeedListQuery] = useState({ page: 1, pageSize: 20 });
  const [activeItem, setActiveItem] = useState('首页');
  const [palNeedList, setPalNeedList] = useState<PalNeed[]>([generatePalNeed()]);
  const handleGetPalNeedList = async () => {
    const nextPalNeedList = await fetchGet<PalNeed[]>('/pal/needs', getPalNeedListQuery);
    console.log(nextPalNeedList?.length > 0);

    if (nextPalNeedList?.length > 0) setPalNeedList(palNeedList => palNeedList.concat(nextPalNeedList));
    else setPalNeedList(palNeedList => palNeedList.concat([generatePalNeed(), generatePalNeed(), generatePalNeed()]));
  };
  const handleClickPalNeed = (needId: string) => {
    console.log("handleClickPalNeed");
    
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
        {palNeedList.map(palNeed => {
          return (
            <motion.div
              
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>
              <Container px='1em' py='1.5em' onClick={() => {
                handleClickPalNeed(palNeed.id);
              }}>
                <Row align='center'>
                  <Col>
                    <Avatar name='我' css={{ background: 'red' }} />
                  </Col>
                  <Col>想找一个{palNeed.keywords}搭子</Col>
                </Row>
                <Row align='center'>
                  <Col>{palNeed.description}</Col>
                </Row>
                <Row align='center'>
                  <Col>
                    {palNeed.palNumber}个{palNeed.palAge[0]}-{palNeed.palAge[1]}岁的
                    {palNeed.palSex == 0 ? '女' : palNeed.palSex == 1 ? '男' : '不限'}
                    {palNeed.paymentMethod ? 'AA制' : '无需出钱'}
                  </Col>
                </Row>
                <Row align='center'>
                  <Col flex={1}>
                    <AvatarGroup max={5} total={10}>
                      {palNeed.pals?.map(pal => (
                        <Avatar name={pal.id + '我'} />
                      ))}
                    </AvatarGroup>
                  </Col>
                  <Col flex={1} rightText>
                    <Button text> 搭一个</Button>
                  </Col>
                </Row>
              </Container>
            </motion.div>
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
  );
}
