import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);

  @media (max-width: 800px) 
  {
    --bodyPaddingTop: 40px;
    padding-top: var(--bodyPaddingTop);
  }
`;

function App() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-End? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa."} />

      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[1]} />
        
      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[2]} />
        
      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[3]} />

      <Footer />
    </AppWrapper>
  );
}

export default App;
