import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import { Container, Content } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <header>
          <h2 className="content__logo">Do Bairro</h2>
        </header>
        <main>
          <h1 className="content__main__logo">Do Bairro</h1>
          <p className="content__main__description">
            Uma forma simples de conectar a comunidade de moradores com o
            comércio local.
          </p>

          <Link to="/points">
            <span>
              <FiLogIn />
            </span>
            <strong> Cadastre o seu estabelecimento</strong>
          </Link>
        </main>
      </Content>
    </Container>
  );
};

export default Home;
