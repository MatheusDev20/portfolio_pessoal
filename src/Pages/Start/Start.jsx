import React from 'react';
import './start.css';
import avatar from '../../assets/avatar.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Start = ()  => {
  return ( 
      <div className="start-container">
          <div className="start-profile">
            <div className="profile-container">
              <div className="avatar-info">
                <div>
                <img src={avatar} alt="profile_avatar" /> 
                </div>
                <div>
                    <h2>Junior Developer</h2>
                </div>
              </div>
              <hr />
              <h1>Contato</h1>
              <div className="contact">
                <div>
                    <span><FontAwesomeIcon icon={faPhone}/> <span>(32) 988575939  </span> </span>
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faEnvelope}/> <span> matheusdev20@gmail.com </span></span>
                </div>
              </div>
              <hr />
            </div>
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
                -os no meu<a href="https://github.com/MatheusDev20" className="start-link" target="blank">Github</a>
                Atualmente foco meus estudos principalmente em Javascript e seu ecossistema e ramificações, porém domino conceitos
                de desenvolvimento WEB de modo geral.
              </p>

          </div>

      </div>
  )
}

export default Start;