import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Container } from "./styles";

const Confirmation: React.FC = () => {
  return (
    <Container>
      <FiCheckCircle className="pulseAnim" />
      <h1>Seu comércio foi cadastrado com sucesso</h1>
    </Container>
  );
};

export default Confirmation;
