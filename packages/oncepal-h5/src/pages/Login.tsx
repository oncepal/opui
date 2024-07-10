import {
  OPUIProvider,
  Text,
  Button,
  CheckBox,
  Container,
  NavBar,
  Row,
  Col,
  Grid,
  List,
  Icon,
  Input,
  colors,
} from '@opui/react';
import { ChangeEvent, SetStateAction, useState } from 'react';
import type { Theme } from '@opui/react';
import { useGet, usePost } from '../server/htttp';
import { useNavigate, useParams } from 'react-router-dom';
import { login } from '../server/auth';
export default function Login() {
  const navigate = useNavigate();
  let { nextPath } = useParams();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validCode, setValidCode] = useState('');
  const handleClickPalNeed = (needId: string) => {
    navigate(nextPath || '/');
  };
  const handleClickClose = () => {};
  const handlePhoneNumberInputChange = (v: string) => {
    setPhoneNumber(v);
  };
  const handleValidCodeInputChange = (v: string) => {
    setValidCode(v);
  };

  const handleLogin = async () => {
    const result = await login({});
  };
  return (
    <Container main py='2em' px='1.5em' fullScreen>
      <Icon size={'2rem'} type='close' onClick={handleClickClose} />
      <Container pa='.5em'>
        <Row vertical py='2em'>
          <Col leftText>
            <Text blod size={'1.6rem'}>
              短信验证码登录
            </Text>
          </Col>
          <Col leftText py='.5em'>
            <Text color={theme => theme.colors.lightGreyText!}>未注册手机验证后自动登录</Text>
          </Col>
        </Row>

        <Container py='1em'>
          <Input
            label='电话号码：'
            clearable
            prepend={
              <Container width='3em'>
                <Text blod>+86</Text>
              </Container>
            }
            onChange={handlePhoneNumberInputChange}
            value={phoneNumber}
          />
        </Container>
        <Container mt='1em'>
          <Input
            contentStyle={theme => ({
              borderBottom: '1px solid ' + theme.colors.lightScrim,
            })}
            prepend={
              <Container width='3em'>
                <Text blod>验证码</Text>
              </Container>
            }
            append={<Button text>发送验证码</Button>}
            onChange={handleValidCodeInputChange}
            value={validCode}
          />
        </Container>
        <Row mt='5em' vertical gap='.6em' align='center'>
          <Col w='100%'>
            <Button fullWidth disabled={!phoneNumber || !validCode}>
              立即登录
            </Button>
          </Col>
          <Col w='100%'>
            <Button fullWidth color={colors.greyLight!}>
              其他方式
            </Button>
          </Col>
        </Row>

        <Container center footer fixed bottom='5vh' left='0' right='0'>
          <Row vertical gap='.5em'>
            <Row justify='center' align='center'>
              <Col>
                <Icon type='safe' />
              </Col>
              <Col>
                <Text>承诺数据不外泄，无垃圾信息</Text>
              </Col>
            </Row>
            <Row justify='center' align='center'>
              <Col>
                {' '}
                <Text size={'.9rem'} color={theme => theme.colors.lightGreyText!}>
                  继续即表示你同意
                  <Text color={theme => theme.colors.primary!} px='.2em'>
                    ONCEPAL 用户协议
                  </Text>
                  和
                  <Text px='.2em' color={theme => theme.colors.primary!}>
                    隐私政策
                  </Text>
                </Text>
              </Col>

              {/* <CheckBox>
              <Text size={'.9rem'} color={theme => theme.colors.lightGreyText!}>
                继续即表示你同意
                <Text color={theme => theme.colors.primary!} px='.2em'>
                  ONCEPAL 用户协议
                </Text>
                和
                <Text px='.2em' color={theme => theme.colors.primary!}>
                  隐私政策
                </Text>
              </Text>
            </CheckBox> */}
            </Row>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
