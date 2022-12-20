import Card from '../../components/Card';
import UserInfo from '../../components/Userinfo';
import Header from '../../components/Header';
import { 
  Container, 
  Column, 
  Title, 
  TitleHighlight 
} from './styles';

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo
            nome="Rodrigo Monteiro"
            image="https://i.pinimg.com/originals/7d/0e/68/7d0e68d3982cf67cfe6504e165029bd1.jpg"
            percentual={25}
          />
          <UserInfo
            nome="Rodrigo Monteiro"
            image="https://i.pinimg.com/originals/7d/0e/68/7d0e68d3982cf67cfe6504e165029bd1.jpg"
            percentual={65}
          />
          <UserInfo
            nome="Rodrigo Monteiro"
            image="https://i.pinimg.com/originals/7d/0e/68/7d0e68d3982cf67cfe6504e165029bd1.jpg"
            percentual={45}
          />
          <UserInfo
            nome="Rodrigo Monteiro"
            image="https://i.pinimg.com/originals/7d/0e/68/7d0e68d3982cf67cfe6504e165029bd1.jpg"
            percentual={72}
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
