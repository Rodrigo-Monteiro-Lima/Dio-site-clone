import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from './styles';
import Button from '../Button';
import logo from '../../assets/logo-dio.png';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
                <BuscarInputContainer>
                  <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) 
            : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://i.pinimg.com/originals/7d/0e/68/7d0e68d3982cf67cfe6504e165029bd1.jpg"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export default Header