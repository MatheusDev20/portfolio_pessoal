import React from 'react';
import './start.css';


const Start = ()  => {
  return ( 
      <div className="start-container">
          <div className="start-img">
          </div>
          <div className="start-content">
              <h2>Sobre mim</h2>
              <hr/>
              <p>
                Me chamo Matheus, tenho 20 anos e procuro por oportunidades de ingressar no mercado de tecnologia,
                sou apaixonado por programação e desenvolvimento de software desde 2015, onde tive meu primeiro contato
                com o assunto no curso técnico que prestei, mais informações sobre podem ser encontradas no meu currículo
                <a href="#" className="start-link">Aqui</a>
              </p>
              <h2>Objetivo</h2>
              <hr/>
              <p>
                Neste momento, busco dar o pontapé inicial na minha carreira, e por isso procuro vagas como Júnior ou aprendiz,
                pois meu principal objetivo é angariar experiência prática de mercado e crescer pessoal e profissionalmente
                junto a uma empresa ou time.
              </p>
              <h2>Tecnologias e experiência</h2>
              <hr/>
              <p>
                Para suprir a falta de experiência e dominar os requisitos técnicos desenvolvo projetos pessoais, disponibilizo
                -os no meu<a href="#" className="start-link">Github</a>
                Atualmente foco meus estudos principalmente em Javascript e seu ecossistema e ramificações, porém domino conceitos
                de desenvolvimento WEB de modo geral.
              </p>

          </div>

      </div>
  )
}

export default Start;