import { useHistory } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  EsqueciText,
  CriarText,
  Row,
  Wrapper,
} from './styles';

const Login = () => {
  const history = useHistory();

  const schema = yup.object({
    email: yup.string().email('Email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.password}`
      );

      if (data.length === 1) {
        history.push('/feed');
        return;
      } else {
        alert('Usuário ou senha inválido');
      }
    } catch (e) {
      alert('Houve um erro, tente novamente.')
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
                errorMessage={errors?.email?.message}
              />
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="password"
                control={control}
                errorMessage={errors?.password?.message}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
