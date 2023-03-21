import { Inter } from 'next/font/google';

import { App, NavBar, Sidebar, Container, Text, Col, Row, Button, Switch, Popover, ToolTip, Card } from '@sui/core';

import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });
const gradient =
  'linear-gradient(to right, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)';

const advantage = [
  {
    icon: <i style={{ marginTop: '0.2rem', fontSize: '1.5rem' }} className='bx bx-palette'></i>,
    title: '轻松定制化',
    desc: '提供了一种自定义默认主题和组件细节的简单方法，您可以更改颜色、字体、断点和您需要的一切。',
  },
  {
    icon: <i style={{ marginTop: '0.2rem', fontSize: '1.5rem' }} className='bx bx-paper-plane'></i>,
    title: '又快又轻',
    desc: '基于高性能的Emotion，在运行时避免不必要的样式道具，使其比其他 UI 库具有更高的性能。',
  },
  {
    icon: <i style={{ marginTop: '0.2rem', fontSize: '1.5rem' }} className='bx bx-sun'></i>,
    title: '明暗模式',
    desc: '组件全适配明暗模式，在检测到主题属性变化时自动更改主题。',
  },
  {
    icon: <i style={{ marginTop: '0.2rem', fontSize: '1.5rem' }} className='bx bx-devices'></i>,
    title: '开发体验拉满',
    desc: '完全Typescript的，最大限度地减少学习曲线，并提供最佳的开发人员体验。',
  },
];

export default function Home() {
  return (
    <>
      <Container main pa='5em'>
        <Container section>
          <Row vertical justify='start'>
            <Col>
              <Text blod size={theme => theme.spacing?.[18]} h1 gradient={gradient}>
                一系列令人惊叹、丰富
              </Text>
            </Col>

            <Col>
              <Text
                blod
                gradient={
                  'linear-gradient(to right,  #5a55ae 0%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 100%)'
                }
                size={theme => theme.spacing?.[18]}
                h3>
                实用的组件
              </Text>
            </Col>
            <Col pa='1em' css={{ maxWidth: '800px' }}>
              <Text px='3em' color={theme => theme.colors.grey} size={theme => theme.spacing?.[10]} p>
                无论是混合APP，文档页，后台管理系统，还是Web3开发
              </Text>
              <Text px='3em' color={theme => theme.colors.grey} size={theme => theme.spacing?.[10]} p>
                各种需求和设计都可以轻而易举的实现，基于世界上最流行的前端框架 React 和现代快速的 CSS 方案 Emotion
              </Text>
            </Col>
            <Col pa='1em'>
              <Button rounded>Get Started</Button>
              <Button
                rounded
                css={theme => ({
                  margin: '0 1em',
                  backdropFilter: 'saturate(180%) blur(10px)',
                  background: theme.colors.transparent,
                  boxShadow: theme.darkMode ? theme.shadows.md : theme.shadows.lg,
                  color: theme.darkMode ? theme.colors.white : theme.colors.black,
                })}>
                $ npm install @sui/core @emotion/react{' '}
                <ToolTip content={'点击复制'}>
                  <i className='bx bx-copy'></i>
                </ToolTip>
              </Button>
            </Col>
          </Row>
          {/* <Image src={aaaaa} alt='' style={{ display: 'absolute', top: 0 }} /> */}
          <Container pt='8rem'>
            <Row gap='1em' css={{ maxWidth: '1100px', margin: '0 auto' }}>
              {advantage.map(({ icon, title, desc }) => (
                <Col leftText flex={1}>
                  <Card h='10rem' cloudy radius={theme => theme.radius.base}>
                    <Card.Title css={{ margin: '.5rem 0' }}>
                      <Row align='center'>
                        {icon}
                        <Text ml='.5rem' span blod size={'1.2rem'}>
                          {title}
                        </Text>
                      </Row>
                    </Card.Title>
                    <Card.Description>
                      <Text span color={theme => theme.colors.grey}>
                        {desc}
                      </Text>
                    </Card.Description>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
        <Container section>
          <Row vertical>
            <Col></Col>
          </Row>
        </Container>{' '}
      </Container>
      <Footer />
    </>
  );
}
