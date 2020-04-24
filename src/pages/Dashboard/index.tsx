import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="repository">
          <img
            src="https://static.kabum.com.br/conteudo/temas/005/imagens/kicon-ninja.jpg"
            alt="Nome"
          />
          <div>
            <strong>ruandsx/website</strong>
            <p>Lorem ipsum dolor sit amet consecteture.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
