import { Container, Content, Text } from "./styles";

function TermsModal({ setShowModal }) {
  return (
    <Container>
      <Content>
        <Text>
          <h2>PROIBIDO PARA MENORES DE 18 ANOS.</h2>
          <p>
            A plataforma caracteriza-se pela prestação do seguinte serviço:
            feedbacks sobre diversas marcas, tamanhos, teores e modelos de
            cervejas com o propósito de ajudar o usuário a poupar seu precioso
            tempo ao escolher aquela cerveja que tanto pensou em experimentar. O
            acesso às funcionalidades da plataforma exigirá a realização de um
            cadastro prévio e, a depender dos serviços escolhidos. Ao se
            cadastrar o usuário deverá informar dados completos, recentes e
            válidos, sendo de sua exclusiva responsabilidade manter referidos
            dados atualizados, bem como o usuário se compromete com a veracidade
            dos dados fornecidos. O usuário se compromete a não informar seus
            dados cadastrais e/ou de acesso à plataforma a terceiros,
            responsabilizando-se integralmente pelo uso que deles seja feito. O
            usuário que aceitar os termos de compromisso declara que possui mais
            de 18 anos e se responsabilizada pelas consequências do uso da
            plataforma. O BeraTop apoia e promove o{" "}
            <a href="https://www.ambev.com.br/ESG/consumo-responsavel/">
              consumo responsável
            </a>
          </p>
          <button onClick={() => setShowModal()}>Fechar</button>
        </Text>
      </Content>
    </Container>
  );
}

export default TermsModal;
