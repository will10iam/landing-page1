import './index.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import dep1 from './assets/dep1.png'
import dep2 from './assets/dep2.png'
import dep3 from './assets/dep3.png'
import dep4 from './assets/dep4.png'
import mapa from './assets/mapa.png'
import { useState, useEffect, useRef } from 'react';

const images = [dep1, dep2, dep3, dep4]

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])


  return (
    <>
      <SSection1>
        <header>
          <h1>Imersão em Conteúdo</h1>
          <h3>Leve seu aprendizado para o próximo nível</h3>
        </header>

        <div className='infos'>
          <h4>Um curso intensivo que combina conteúdo de Business com atividades de lazer!</h4>
          <h5>Dias 17, 18 e 19 de Maio. Serão 24hs de curso por dia, pra você ganhar confiança necessária e se preparar para os desafios da sua carreira. Você vai aprender e se divertir ao mesmo tempo, temos recursos variados e diferenciados que vão maximizar sua aprendizagem.</h5>
          <button>Quero saber mais</button>
        </div>
      </SSection1>

      <SSection2>

        <div className='col1'>
          <h2>Metodologia</h2>
          <p>Atividades supervisionadas práticas em campo necessárias para a sua formação.</p>
          <p>Serão 6h de aulas por dia combinadas com workshops e atividades de lazer.</p>
          <p>Conteudo trabalhado de maneira agradável e natural, para que os alunos vencam seus medos, barreiras e comecem a se envolver e falar naturalmente.</p>
        </div>

        <div className='col2'>
          <h2>Materiais</h2>
          <p>Todos os materiais do curso serão forecidos pela nossa empresa. Livros, apostilas e todas as apresentações que foram mostradas no curso.</p>
          <p>Ao final do curso o aluno recebe um certificado de participação e um kit com todos os seus conteúdos e trabalhos realizados na disciplina.</p>
          <p>Seu único custo será com a aquisição dos seus materiais de uso pessoal e descartáveis.</p>
        </div>

        <div className='col3'>
          <h2>Investimento</h2>
          <p>Cursos de qualidade que fazem a diferença com valores que cabem no seu bolso.</p>
          <p id='title'>O QUE INCLUI:</p>
          <ul>
            <li>Hospedagem para os 3 dias</li>
            <li>Todas as refeições</li>
            <li>Materiais Didáticos</li>
            <li>Uso de todas as instalações</li>
          </ul>
          <p id='title'>R$ 2.200,00</p>
          <p>10% de desconto à vista</p>
        </div>

      </SSection2>

      <SSection3>
        <div className='address'>
          <h1>Conheça todo o conforto e comodidade do nosso local</h1>
          <h4>Rua Major Antônio Machado de Campos, 321 Jd. Piratininga - Limeira - SP CEP 13484-315 +55 19 99660-2839</h4>
        </div>
        <div >
          <div >
            <img className='map' src={mapa} alt='' />
          </div>
        </div>
      </SSection3>

      <SSection4>
        <h1>Veja o que nossos alunos estão falando!</h1>
      </SSection4>

      <SSection5>
        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}>

            {images.map(image => (
              <motion.div className='item' key={image}>
                <img src={image} alt='' />
              </motion.div>
            ))}

          </motion.div>
        </motion.div>
      </SSection5>

      <SSection6>
        <div className='container'>
          <div>
            <h1>Quero mais informações!</h1>
            <h4>Preencha seus dados e conte com nossos especialistas.</h4>
          </div>

          <label className='label'>Nome*</label>
          <input className='input'></input>

          <label className='label'>Email*</label>
          <input className='input'></input>

          <label className='label'>5 + 6*</label>
          <input className='input'></input>

          <button>Quero saber mais</button>

        </div>
      </SSection6>
    </>
  );
}

export default App;


//----------------------STYLES----------------------------//

const SSection1 = styled.section`
  background-color: #2A3D56;
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  color: white;

  & header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: #E9C12D;
      font-size: 55px;
      font-family: 'Ubuntu', sans-serif;
    }

    h3 {
      font-size: 35px;
      margin-top: -15px;
      font-weight: 100;
      font-family: 'Ubuntu', sans-serif;
    }

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  & .infos {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      font-family: 'Ubuntu', sans-serif;
      margin-top: -15px;
    }
    
    h5 {
      font-family: 'Ubuntu', sans-serif;
      font-weight: 100;
      width: 900px;
      text-align: center;
      margin-top: -10px;
    }

    button {
      margin-top: 30px;
      margin-bottom: 60px;
      background-color: #E9C12D;
      border: #E9C12D;
      border-radius: 10px;
      font-size: 20px;
      padding: 5px 45px;
      text-transform: uppercase;
      font-family: 'Ubuntu', sans-serif;
      
    }
  }
`
const SSection2 = styled.section`
  display: flex;
  gap: 65px;
  margin-top: 50px;
  justify-content: center;
  color: black;

  & .col1 {
    width: 300px;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;

    h2 {
      color: #2A3D56;
    }
  }

  & .col2 {
    width: 300px;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;

    h2 {
      color: #2A3D56;
    }
  }

  & .col3 {
    width: 300px;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;

    h2 {
      color: #2A3D56;
    }

    ul {
      list-style-type: none;
      margin-right: 25px;
    }

    #title {
      font-weight: bold;
      color: #2A3D56;
      text-align: center;
      margin-bottom: -5px;

    }
  }

  & .col4 {
    width: 300px;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    border: 1px solid #2A3D56;
    border-radius: 5px;
    padding: 15px;
    

    h2 {
      color: #2A3D56;
    }

    img {
      width: 10px;
      border-radius: 50px;
    }
  }

  

`
const SSection3 = styled.section`
  background-color: #4C5B71;
  display: flex;
  gap: 65px;
  margin-top: 50px;
  justify-content: center;
  color: black;

  & h1 {
    font-family: 'Ubuntu', sans-serif;
    color: white;
    width: 500px;
    font-size: 35px;
  }

  & h4 {
    width: 300px;
    font-size: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 100;
    color: white;
  }

  & .map {
    border: 1px solid white;
    color: white;
    width: 500px;
    height: 290px;
    margin-top: 95px;
  }

  & .address {
    margin-top: 95px;
    margin-bottom: 160px;
  }
`
const SSection4 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    margin-top: 75px;
    font-family: 'Ubuntu', sans-serif;
    color: #2A3D56;
    font-size: 45px;
    margin-bottom: -50px;
  }
`
const SSection5 = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -180px;

  & .inner {
    display: flex;
  }

  & .item{
    min-height: 200px;
    min-width: 400px;
    padding: 14px;
  }

  & .item img{
    width: 90%;
    height: 90%;
    border-radius: 12px;
    pointer-events: none;
  }

  & .carousel {
    cursor: grab;
    overflow: hidden;
    margin-top: -105px;
  }
`
const SSection6 = styled.section`
  background-color: #0D172C;
  display: flex;
  gap: 65px;
  margin-top: 50px;
  justify-content: center;
  

  & .container {
    display: flex;
    flex-direction: column;
    margin-top: 85px;
    border: 1px solid #0D172C;
    background-color: black;
    padding: 20px;
    margin-bottom: 80px;
    
  }

  & h1 {
    font-family: 'Ubuntu', sans-serif;
    color: white;
    font-size: 25px;
    text-align: center;
  }

  & h4 {
    font-size: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 100;
    color: white;
    text-align: center;
  }

  & .label {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 100;
    margin-bottom: 5px;
    margin-top: 15px;
    font-size: 12px;
  }

  button {
      margin-top: 30px;
      margin-bottom: 60px;
      background-color: #E9C12D;
      border: #E9C12D;
      border-radius: 10px;
      font-size: 20px;
      padding: 5px 45px;
      text-transform: uppercase;
      font-family: 'Ubuntu', sans-serif;
    }

  input {
    height: 30px;
  }  
`
