import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>React Films</Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
