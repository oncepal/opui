import Head from 'next/head';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import DescPNG from '../../public/desc.png';
import UtilsPNG from '../../public/utils.png';
import { App, NavBar, Sidebar, Container, Text, Col, Row, Button, Switch, Popover, ToolTip, Card } from '@sui/core';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });
const gradient =
  'linear-gradient(to right, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)';
const features = [
  [
    '智能',
    '提示',
    '组件最多应用的场景',
    'ShitUI 团队里都是多年丰富经验的开发者，对组件使用率最高，疑问最多的信息内置在每个组件的注释上，无需查看文档便可敏捷开发',
    DescPNG,
    0,
    '#fa709a',
    '#f18271',
  ],
  [
    '令人惊艳',
    '的样式',
    '在你初次尝试过后',
    'ShitUI 的每一个组件都是参考了多个文档和市面上流行的大多数组件库，我们很了解，长什么样的组件构建出的应用程序，能让人惊讶不已。',
    DescPNG,
    1,
    '#7b5fac',
    '#cc6b8e',
  ],
  [
    '动态',
    '主题',
    '轻而易举',
    '每个组件都根据主题的变更做响应式变化，你可以轻松从根部定制你们项目自己的 UI 样式风格，这多亏了令人惊叹的高性能 CSS 样式方案 Emotion',
    DescPNG,
    0,
    '#3f51b1',
    '#a86aa4',
  ],
  [
    '明暗',
    '模式',
    '在毫秒之间',
    'Shit UI 的所有组件都内置了明暗模式响应，您只需几行代码就可以将其应用于您的应用程序',
    DescPNG,
    1,
    '#f3a469',
    '#3f51b1',
  ],
  [
    '更少的',
    '代码',
    '做更多的事',
    '同样的，对组件开发体验的精心打磨是我们始终如一坚持的初衷，合理的结构，深思熟虑的 APIs，一切为了开发者',
    DescPNG,
    0,
    '#cc6b8e',
    '#f18271',
  ],
  [
    '实用',
    '属性',
    '节省你的时间',
    'Shit UI 提供了一套开箱即用的缩写 CSS 属性、通过将多个 CSS 属性组合在一起或简化棘手的语法来加快工作流程。',
    UtilsPNG,
    1,
    '#5a55ae',
    '#f7c978',
  ],
];
const advantage  = [
  {icon:<i style={{marginTop:'0.2rem',fontSize:'1.5rem'}} className='bx bx-palette'></i>,title:"轻松定制化",desc:'提供了一种自定义默认主题和组件细节的简单方法，您可以更改颜色、字体、断点和您需要的一切。'},
  {icon:<i style={{marginTop:'0.2rem',fontSize:'1.5rem'}} className='bx bx-paper-plane'></i>,title:"又快又轻",desc:'基于高性能的Emotion，在运行时避免不必要的样式道具，使其比其他 UI 库具有更高的性能。'},
  {icon:<i style={{marginTop:'0.2rem',fontSize:'1.5rem'}} className='bx bx-sun'></i>,title:"明暗模式",desc:'组件全适配明暗模式，在检测到主题属性变化时自动更改主题。'},
  {icon:<i style={{marginTop:'0.2rem',fontSize:'1.5rem'}} className='bx bx-devices'></i>,title:"开发体验拉满",desc:'完全Typescript的，最大限度地减少学习曲线，并提供最佳的开发人员体验。'}]
export default function Home() {
  return (
    <>
      <Container main pa='5em'>
        <Container section>
          <Row vertical justify='start'>
            <Col>
              <Text size={theme => theme.spacing?.[18]} h1 gradient={gradient}>
                一系列令人惊叹、丰富
              </Text>
            </Col>

            <Col>
              <Text
                gradient={
                  'linear-gradient(to right,  #5a55ae 0%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 100%)'
                }
                size={theme => theme.spacing?.[18]}
                h3>
                实用的组件
              </Text>
            </Col>
            <Col pa='1em' css={{ maxWidth: '800px' }}>
              <Text px='3em' color='#566171' size={theme => theme.spacing?.[10]} p>
                无论是混合APP，文档页，后台管理系统，还是Web3开发
              </Text>
              <Text px='3em' color='#566171' size={theme => theme.spacing?.[10]} p>
                各种需求和设计都可以轻而易举的实现，基于世界上最流行的前端框架 React 和现代快速的 CSS 方案 Emotion
              </Text>
            </Col>
            <Col pa='1em'>
              <Button rounded>Get Started</Button>
              <Button
                rounded
                css={theme => ({
                  margin:'0 1em',
                  backdropFilter: 'saturate(180%) blur(10px)',
                  background: theme.colors.transparent,
                  boxShadow: theme.darkMode ?theme.shadows.md:theme.shadows.lg,
                  color: theme.darkMode ? theme.colors.white : theme.colors.black,
                })}>
                $ npm install @sui/core @emotion/react <ToolTip  content={"点击复制"} ><i className='bx bx-copy'></i></ToolTip>
              </Button>
            </Col>
          </Row>
        </Container>
        <Container pt='8rem' >
          <Row gap='1em' css={{maxWidth:'1200px',margin:'0 auto'}}>
             {advantage.map((({icon,title,desc})=><Col leftText flex={1}>
             <Card h='10rem' cloudy radius={theme=>theme.radius.base}>
              <Card.Title css={{margin:'.5rem 0'}}><Row align='center'>
                {icon}<Text ml='.5rem' span blod size={'1.2rem'}>{title}</Text>
                </Row></Card.Title>
              <Card.Description><Text span color={theme=>theme.colors.grey}>{desc}</Text></Card.Description>
             </Card>
             </Col>))}
          </Row>
        </Container>
       
        {features.map((v: any[]) => {
          const gt = `linear-gradient(to right, ${v[6]} 0%, ${v[7]} 100%)`;
          const desc = (
            <Col
              alignSelf='start'
              leftText={!v[5]}
              rightText={!!v[5]}
              css={{
                maxWidth: '25em',
              }}>
              <Text h2 size='5rem'>
                <Text span gradient={gt}>
                  {v[0]}
                </Text>
                {v[1]}
              </Text>
              <Text size='2rem' py='.5rem'>
                {v[2]}
              </Text>
              <Text color='#566171'>{v[3]}</Text>
            </Col>
          );
          return (
            <Container section px='8em' my='10em'>
              <Row justify='center'>
                {!v[5] && desc}

                <Col
                  css={{
                    margin: `0px ${!!v[5] ? '8em' : '0px'} 0px ${!v[5] ? '8em' : '0px'}`,
                  }}>
                  <Image width={500} height={300} src={v[4]} alt={''} />
                </Col>
                {!!v[5] && desc}
              </Row>
            </Container>
          );
        })}
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
