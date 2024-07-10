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
import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';
import type { Theme } from '@opui/react';
import { useGet, usePost } from '../server/htttp';
import { useNavigate, useParams } from 'react-router-dom';
import { login, getValidCode } from '../server/auth';
export default function Login() {
  const navigate = useNavigate();
  let { nextPath } = useParams();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validCode, setValidCode] = useState('');
  const [validCodeCountDown, setValidCodeCountDown] = useState(60);
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

  const handleSendValidCode = async () => {
    // const result = await getValidCode(phoneNumber);
    // if (result.code == 200) {
    //   setValidCodeCountDown(v => v - 1);
    // }

    setValidCodeCountDown(v => v - 1);
  };

  const handleLogin = async () => {
    const result = await login({});
  };

  useEffect(() => {
    if (validCodeCountDown == 0) {
      setValidCodeCountDown(60);
    }
    if (validCodeCountDown < 60) {
       setTimeout(()=>{
        setValidCodeCountDown(v => v - 1);
      },1000)
      
    }
  }, [validCodeCountDown]);

  return (
    <Container main py='2em' px='1.5em' fullScreen>
      <Icon size={'2rem'} type='close' onClick={handleClickClose} />
      <Container pa='.5em'>
        <Row vertical py='2em'>
          <Col leftText>
            <Text blod size={'1.5rem'}>
              短信验证码登录
            </Text>
          </Col>
          <Col leftText py='.5em'>
            <Text>未注册手机验证后自动登录</Text>
          </Col>
        </Row>

        <Container py='1em'>
          <Input
            label='电话号码：'
            clearable
            prepend={<Text blod>+86</Text>}
            onChange={handlePhoneNumberInputChange}
            value={phoneNumber}
          />
        </Container>
        <Container mt='1em'>
          <Row justify='space-between' align='center'>
            <Col>
              {' '}
              <Input prepend={<Text blod>验证码</Text>} onChange={handleValidCodeInputChange} value={validCode} />
            </Col>
            <Col>
              {' '}
              <Button text onClick={handleSendValidCode} disabled={validCodeCountDown < 60}>
                {validCodeCountDown < 60 ? validCodeCountDown : '发送验证码'}
              </Button>
            </Col>
          </Row>
        </Container>
        <Row mt='5em' vertical gap='.6em' align='center'>
          <Col w='100%'>
            <Button fullWidth disabled={!phoneNumber || !validCode}>
              立即登录
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
                <CheckBox>
                  <Text size={'.9rem'}>
                    <Text opacity={0.8}>继续即表示你同意</Text>

                    <Text color={theme => theme.colors.primary!} px='.2em'>
                      ONCEPAL 用户协议
                    </Text>
                    <Text opacity={0.8}>和</Text>

                    <Text px='.2em' color={theme => theme.colors.primary!}>
                      隐私政策
                    </Text>
                  </Text>
                </CheckBox>
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
