import React from "react";

import InputRadius from "../../Components/InputRadius";
import Header from "../../Components/Header";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Footer from "../../Components/Footer";

import imgLobo from "../../../src/assets/lobo.webp";
import imgTubarao from "../../../src/assets/tubarao.webp";
import imgAguia from "../../../src/assets/aguia.webp";
import imgGato from "../../../src/assets/gato.webp";

import "./style.css";

export default function TesteDePesonalidade() {
  let listResposta = [];
  function CadastrarReposta() {
    listResposta.splice(0, Number.MAX_VALUE);

    let q1;
    if ((q1 = document.querySelector('input[name="q1"]:checked') == null))
      return alert("Preencha todos os campos");
    else q1 = document.querySelector('input[name="q1"]:checked').value;
    listResposta.push(q1);

    let q2;
    if ((q2 = document.querySelector('input[name="q2"]:checked') == null))
      return alert("Preencha todos os campos");
    else q2 = document.querySelector('input[name="q2"]:checked').value;
    listResposta.push(q2);

    let q3;
    if ((q3 = document.querySelector('input[name="q3"]:checked') == null))
      return alert("Preencha todos os campos");
    else q3 = document.querySelector('input[name="q3"]:checked').value;
    listResposta.push(q3);

    let q4;
    if ((q4 = document.querySelector('input[name="q4"]:checked') == null))
      return alert("Preencha todos os campos");
    else q4 = document.querySelector('input[name="q4"]:checked').value;
    listResposta.push(q4);

    let q5;
    if ((q5 = document.querySelector('input[name="q5"]:checked') == null))
      return alert("Preencha todos os campos");
    else q5 = document.querySelector('input[name="q5"]:checked').value;
    listResposta.push(q5);

    let q6;
    if ((q6 = document.querySelector('input[name="q6"]:checked') == null))
      return alert("Preencha todos os campos");
    else q6 = document.querySelector('input[name="q6"]:checked').value;
    listResposta.push(q6);

    let q7;
    if ((q7 = document.querySelector('input[name="q7"]:checked') == null))
      return alert("Preencha todos os campos");
    else q7 = document.querySelector('input[name="q7"]:checked').value;
    listResposta.push(q7);

    let q8;
    if ((q8 = document.querySelector('input[name="q8"]:checked') == null))
      return alert("Preencha todos os campos");
    else q8 = document.querySelector('input[name="q8"]:checked').value;
    listResposta.push(q8);

    let q9;
    if ((q9 = document.querySelector('input[name="q9"]:checked') == null))
      return alert("Preencha todos os campos");
    else q9 = document.querySelector('input[name="q9"]:checked').value;
    listResposta.push(q9);

    let q10;
    if ((q10 = document.querySelector('input[name="q10"]:checked') == null))
      return alert("Preencha todos os campos");
    else q10 = document.querySelector('input[name="q10"]:checked').value;
    listResposta.push(q10);

    let q11;
    if ((q11 = document.querySelector('input[name="q11"]:checked') == null))
      return alert("Preencha todos os campos");
    else q11 = document.querySelector('input[name="q11"]:checked').value;
    listResposta.push(q11);

    let q12;
    if ((q12 = document.querySelector('input[name="q12"]:checked') == null))
      return alert("Preencha todos os campos");
    else q12 = document.querySelector('input[name="q12"]:checked').value;
    listResposta.push(q12);

    let q13;
    if ((q13 = document.querySelector('input[name="q13"]:checked') == null))
      return alert("Preencha todos os campos");
    else q13 = document.querySelector('input[name="q13"]:checked').value;
    listResposta.push(q13);

    let q14;
    if ((q14 = document.querySelector('input[name="q14"]:checked') == null))
      return alert("Preencha todos os campos");
    else q14 = document.querySelector('input[name="q14"]:checked').value;
    listResposta.push(q14);

    let q15;
    if ((q15 = document.querySelector('input[name="q15"]:checked') == null))
      return alert("Preencha todos os campos");
    else q15 = document.querySelector('input[name="q15"]:checked').value;
    listResposta.push(q15);

    let q16;
    if ((q16 = document.querySelector('input[name="q16"]:checked') == null))
      return alert("Preencha todos os campos");
    else q16 = document.querySelector('input[name="q16"]:checked').value;
    listResposta.push(q16);

    let q17;
    if ((q17 = document.querySelector('input[name="q17"]:checked') == null))
      return alert("Preencha todos os campos");
    else q17 = document.querySelector('input[name="q17"]:checked').value;
    listResposta.push(q17);

    let q18;
    if ((q18 = document.querySelector('input[name="q18"]:checked') == null))
      return alert("Preencha todos os campos");
    else q18 = document.querySelector('input[name="q18"]:checked').value;
    listResposta.push(q18);

    let q19;
    if ((q19 = document.querySelector('input[name="q19"]:checked') == null))
      return alert("Preencha todos os campos");
    else q19 = document.querySelector('input[name="q19"]:checked').value;
    listResposta.push(q19);

    let q20;
    if ((q20 = document.querySelector('input[name="q20"]:checked') == null))
      return alert("Preencha todos os campos");
    else q20 = document.querySelector('input[name="q20"]:checked').value;
    listResposta.push(q20);

    let q21;
    if ((q21 = document.querySelector('input[name="q21"]:checked') == null))
      return alert("Preencha todos os campos");
    else q21 = document.querySelector('input[name="q21"]:checked').value;
    listResposta.push(q21);

    let q22;
    if ((q22 = document.querySelector('input[name="q22"]:checked') == null))
      return alert("Preencha todos os campos");
    else q22 = document.querySelector('input[name="q22"]:checked').value;
    listResposta.push(q22);

    let q23;
    if ((q23 = document.querySelector('input[name="q23"]:checked') == null))
      return alert("Preencha todos os campos");
    else q23 = document.querySelector('input[name="q23"]:checked').value;
    listResposta.push(q23);

    let q24;
    if ((q24 = document.querySelector('input[name="q24"]:checked') == null))
      return alert("Preencha todos os campos");
    else q24 = document.querySelector('input[name="q24"]:checked').value;
    listResposta.push(q24);

    let q25;
    if ((q25 = document.querySelector('input[name="q25"]:checked') == null))
      return alert("Preencha todos os campos");
    else q25 = document.querySelector('input[name="q25"]:checked').value;
    listResposta.push(q25);

    if (listResposta.length === 25) {
      PerfilPorcentagem(listResposta);
      AbrirModal();
      return true;
    } else {
      alert("Preencha todas as respostas");
      return false;
    }
  }

  function AbrirModal() {
    const modal = document.getElementById("modalTeste");
    if (modal.classList == "none") {
      modal.classList.remove("none");
    }
  }

  function btn_fechar() {
    const vceh = document.getElementById("vceh");
    const conteudoModalT = document.getElementById("conteudoModalT");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");
    const conteudoModalG = document.getElementById("conteudoModalG");
    const modal = document.getElementById("modalTeste");
    if (modal.classList != "none") {
      modal.classList.add("none");
      vceh.classList.add("none");
      conteudoModalL.classList.add("none");
      conteudoModalT.classList.add("none");
      conteudoModalA.classList.add("none");
      conteudoModalG.classList.add("none");
    }
  }
  function PerfilPorcentagem(listResposta) {
    var I = 0;
    var A = 0;
    var O = 0;
    var C = 0;
    for (var i = 0; i < listResposta.length; i++) {
      if (listResposta[i] == "I") {
        I++;
        continue;
      }

      if (listResposta[i] == "A") {
        A++;
        continue;
      }

      if (listResposta[i] == "C") {
        C++;
        continue;
      }

      if (listResposta[i] == "O") O++;
    }

    A = A * 4;
    O = O * 4;
    I = I * 4;
    C = C * 4;

    document.getElementById("I").innerHTML = I + "%";
    document.getElementById("A").innerHTML = A + "%";
    document.getElementById("O").innerHTML = O + "%";
    document.getElementById("C").innerHTML = C + "%";

    const conteudoModalG = document.getElementById("conteudoModalG");
    const conteudoModalT = document.getElementById("conteudoModalT");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");

    const modal = document.getElementById("modalTeste");
    if (modal.classList == "none") modal.classList.remove("none");

    if (A > O && A >= I && A > C) {
      conteudoModalT.classList.remove("none");
    } else if (I > O && I > A && I >= C) {
      conteudoModalA.classList.remove("none");
    } else if (C >= O && C > A && C > I) {
      conteudoModalG.classList.remove("none");
    } else if (O > C && O >= A && O > I) {
      conteudoModalL.classList.remove("none");
    }
  }

  function ConteudoAguia() {
    const vceh = document.getElementById("vceh");
    const conteudoModalG = document.getElementById("conteudoModalG");
    const conteudoModalT = document.getElementById("conteudoModalT");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");
    if (conteudoModalA.classList == "none") {
      vceh.classList.add("none");
      conteudoModalG.classList.add("none");
      conteudoModalL.classList.add("none");
      conteudoModalT.classList.add("none");
      conteudoModalA.classList.remove("none");
    }
  }

  function ConteudoGato() {
    const vceh = document.getElementById("vceh");
    const conteudoModalT = document.getElementById("conteudoModalT");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");
    const conteudoModalG = document.getElementById("conteudoModalG");
    if (conteudoModalG.classList == "none") {
      vceh.classList.add("none");
      conteudoModalL.classList.add("none");
      conteudoModalT.classList.add("none");
      conteudoModalA.classList.add("none");
      conteudoModalG.classList.remove("none");
    }
  }

  function ConteudoTubarao() {
    const vceh = document.getElementById("vceh");
    const conteudoModalG = document.getElementById("conteudoModalG");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");
    const conteudoModalT = document.getElementById("conteudoModalT");
    if (conteudoModalT.classList == "none") {
      vceh.classList.add("none");
      conteudoModalG.classList.add("none");
      conteudoModalL.classList.add("none");
      conteudoModalA.classList.add("none");
      conteudoModalT.classList.remove("none");
    }
  }

  function ConteudoLobo() {
    const vceh = document.getElementById("vceh");
    const conteudoModalG = document.getElementById("conteudoModalG");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");
    const conteudoModalT = document.getElementById("conteudoModalT");
    if (conteudoModalL.classList == "none") {
      vceh.classList.add("none");
      conteudoModalG.classList.add("none");
      conteudoModalT.classList.add("none");
      conteudoModalA.classList.add("none");
      conteudoModalL.classList.remove("none");
    }
  }

  return (
    <div className="bodyPartTestePersonalidade">
      <AccessBar />
      <Header />
      <AccessMenu />
      <h1>Teste de personalidade</h1>
      <p className="Questionario">
        Para n??o distorcer o resultado, procure ser bem verdadeiro e escolher a
        resposta mais adequada "para voc?????!
      </p>
      <div id="q1" className="Questionario">
        <h3>Eu sou...</h3>
        <InputRadius
          label="Idealista,criativo e vision??rio"
          name="q1"
          value="I"
        />
        <InputRadius
          label="Divertido, espiritual e ben??fico"
          name="q1"
          value="C"
        />
        <InputRadius
          label="Confi??vel, meticuloso e previs??ve"
          name="q1"
          value="O"
        />
        <InputRadius
          label="Focado, determinado e persistente"
          name="q1"
          value="A"
        />
      </div>

      <div id="q2" className="Questionario">
        <h3>Eu gosto de...</h3>
        <InputRadius label="Ser piloto" name="q2" value="A" />
        <InputRadius label="Conversar com os passageiros" name="q2" value="C" />
        <InputRadius label="Planejar a viagem" name="q2" value="O" />
        <InputRadius label="Explorar novas rotas" name="q2" value="I" />
      </div>

      <div id="q3" className="Questionario">
        <h3>Se voc?? quiser se dar bem comigo...</h3>
        <InputRadius label="Me d?? liberdade" name="tq3" value="I" />
        <InputRadius
          label="Me deixe saber sua expectativa"
          name="q3"
          value="O"
        />
        <InputRadius
          label="Lidere, siga ou saia do caminho"
          name="q3"
          value="A"
        />
        <InputRadius
          label="Seja amig??vel, carinhoso e compreensivo"
          name="q3"
          value="C"
        />
      </div>

      <div id="q4" className="Questionario">
        <h3>Para conseguir obter bons resultados ?? preciso...</h3>
        <InputRadius label="Ter incertezas" name="q4" value="I" />
        <InputRadius label="Controlar o essencial" name="q4" value="O" />
        <InputRadius label="Divers??o e celebra????o" name="q4" value="C" />
        <InputRadius label="teste" name="q4" value="A" />
      </div>

      <div id="q5" className="Questionario">
        <h3>Eu me divirto quando...</h3>
        <InputRadius label="Estou me exercitando" name="q5" value="A" />
        <InputRadius label="Tenho novidades" name="q5" value="I" />
        <InputRadius label="Estou com os outros" name="q5" value="C" />
        <InputRadius label="Determino as regras" name="q5" value="O" />
      </div>

      <div id="q6" className="Questionario">
        <h3>Eu penso que...</h3>
        <InputRadius
          label="Unidos venceremos, divididos perderemos"
          name="q6"
          value="C"
        />
        <InputRadius
          label="O ataque ?? melhor que a defesa"
          name="q6"
          value="A"
        />
        <InputRadius
          label="?? bom ser manso, mas andar com um porrete"
          name="q6"
          value="I"
        />
        <InputRadius
          label="Um homem prevenido vale por dois"
          name="q6"
          value="O"
        />
      </div>

      <div id="q7" className="Questionario">
        <h3>Minha preocupa????o ??...</h3>
        <InputRadius label="Gerar a ideia global" name="q7" value="I" />
        <InputRadius
          label="Fazer com que as pessoas gostem"
          name="q7"
          value="C"
        />
        <InputRadius label="Fazer com que funcione" name="q7" value="O" />
        <InputRadius label="Fazer com que aconte??a" name="q7" value="A" />
      </div>

      <div id="q8" className="Questionario">
        <h3>Eu prefiro...</h3>
        <InputRadius label="Perguntas a respostas" name="q8" value="I" />
        <InputRadius label="Ter todos os detalhes" name="q8" value="O" />
        <InputRadius label="Vantagens a meu favor" name="q8" value="A" />
        <InputRadius
          label="Que todos tenham a chance de ser ouvidos"
          name="q8"
          value="C"
        />
      </div>

      <div id="q9" className="Questionario">
        <h3>Eu gosto de...</h3>
        <InputRadius label="Fazer progresso" name="q9" value="A" />
        <InputRadius label="Construir mem??rias" name="q9" value="C" />
        <InputRadius label="Fazer sentido" name="q9" value="O" />
        <InputRadius
          label="Tornar as pessoas confort??veis"
          name="q9"
          value="I"
        />
      </div>

      <div id="q10" className="Questionario">
        <h3>Eu gosto de chegar...</h3>
        <InputRadius label="Na frente" name="q10" value="A" />
        <InputRadius label="Junto" name="q10" value="C" />
        <InputRadius label="Na hora" name="q10" value="O" />
        <InputRadius label="Em outro lugar" name="q10" value="I" />
      </div>

      <div id="q11" className="Questionario">
        <h3>Um ??timo dia para mim ?? quando...</h3>
        <InputRadius label="Consigo fazer muitas coisas" name="q11" value="A" />
        <InputRadius label="Me divirto com meus amigos" name="q11" value="C" />
        <InputRadius
          label="Tudo segue conforme planejado"
          name="q11"
          value="O"
        />
        <InputRadius
          label="Desfruto de coisas novas e estimulantes"
          name="q11"
          value="I"
        />
      </div>

      <div id="q12" className="Questionario">
        <h3>Eu vejo a morte como...</h3>
        <InputRadius
          label="Uma grande aventura misteriosa"
          name="q12"
          value="I"
        />
        <InputRadius
          label="Oportunidade de rever os falecidos"
          name="q12"
          value="C"
        />
        <InputRadius
          label="Um modo de receber recompensas"
          name="q12"
          value="O"
        />
        <InputRadius
          label="Algo que sempre chega muito cedo"
          name="q12"
          value="A"
        />
      </div>

      <div id="q13" className="Questionario">
        <h3>Minha filosofia de vida ??... </h3>
        <InputRadius
          label="H?? ganhadores e perdedores, e eu acredito ser um ganhador"
          name="q13"
          value="A"
        />
        <InputRadius
          label="Para eu ganhar, ningu??m precisa perder"
          name="q13"
          value="C"
        />
        <InputRadius
          label="Para ganhar ?? preciso seguir as regras"
          name="q13"
          value="O"
        />
        <InputRadius
          label="Para ganhar, ?? necess??rio inventar novas regras"
          name="q13"
          value="I"
        />
      </div>

      <div id="q14" className="Questionario">
        <h3>Eu sempre gostei de...</h3>
        <InputRadius label="Explorar" name="q14" value="I" />
        <InputRadius label="Evitar surpresas" name="q14" value="O" />
        <InputRadius label="Focalizar a meta" name="q14" value="A" />
        <InputRadius
          label="Realizar uma abordagem natural"
          name="q14"
          value="C"
        />
      </div>

      <div id="q15" className="Questionario">
        <h3>Eu gosto de mudan??as se...</h3>
        <InputRadius
          label="Me der uma vantagem competitiva"
          name="q15"
          value="A"
        />
        <InputRadius
          label="For divertido e puder ser compartilhado"
          name="q15"
          value="C"
        />
        <InputRadius
          label="Me der mais liberdade e variedade"
          name="q15"
          value="I"
        />
        <InputRadius
          label="Melhorar ou me der mais controle"
          name="q15"
          value="O"
        />
      </div>

      <div id="q16" className="Questionario">
        <h3>N??o existe nada de errado em...</h3>
        <InputRadius label="Se colocar na frente" name="q16" value="A" />
        <InputRadius label="Colocar os outros na frente" name="q16" value="C" />
        <InputRadius label="Mudar de ideia" name="q16" value="I" />
        <InputRadius label="Ser consistente" name="q16" value="O" />
      </div>

      <div id="q17" className="Questionario">
        <h3>Eu gosto de buscar conselhos de...</h3>
        <InputRadius label="Pessoas bem-sucedidas" name="q17" value="A" />
        <InputRadius label="Anci??es e conselheiros" name="q17" value="C" />
        <InputRadius label="Autoridades no assunto" name="q17" value="I" />
        <InputRadius label="Lugares, os mais estranhos" name="q17" value="O" />
      </div>

      <div id="q18" className="Questionario">
        <h3>Meu lema ??...</h3>
        <InputRadius
          label="Fazer o que precisa ser feito"
          name="q18"
          value="I"
        />
        <InputRadius label="Fazer bem feito" name="q18" value="O" />
        <InputRadius label="Fazer junto com o grupo" name="q18" value="C" />
        <InputRadius label="Simplesmente fazer" name="q18" value="A" />
      </div>

      <div id="q19" className="Questionario">
        <h3>Eu gosto de....</h3>
        <InputRadius
          label="Complexidade, mesmo se confuso"
          name="q19"
          value="I"
        />
        <InputRadius label="Ordem e sistematiza????o" name="q19" value="O" />
        <InputRadius label="Calor humano e anima????o" name="q19" value="C" />
        <InputRadius label="Coisas claras e simples" name="q19" value="A" />
      </div>

      <div id="q20" className="Questionario">
        <h3>Tempo para mim ??...</h3>
        <InputRadius
          label="Algo que detesto desperdi??ar"
          name="q20"
          value="A"
        />
        <InputRadius label="Um grande ciclo" name="q20" value="C" />
        <InputRadius
          label="Uma flecha que leva ao inevit??vel"
          name="q20"
          value="O"
        />
        <InputRadius label="Irrelevante" name="q20" value="I" />
      </div>

      <div id="q21" className="Questionario">
        <h3>Se eu fosse bilion??rio...</h3>
        <InputRadius
          label="Faria doa????es para entidades"
          name="q21"
          value="C"
        />
        <InputRadius
          label="Criaria uma poupan??a avantajada"
          name="q21"
          value="O"
        />
        <InputRadius label="Faria o que desse na cabe??a" name="q21" value="I" />
        <InputRadius
          label="Exibiria bastante com algumas pessoas"
          name="q21"
          value="A"
        />
      </div>

      <div id="q22" className="Questionario">
        <h3>Eu acredito que...</h3>
        <InputRadius
          label="O destino ?? mais importante que a jornada"
          name="q22"
          value="A"
        />
        <InputRadius
          label="A jornada ?? mais importante que o destino"
          name="q22"
          value="C"
        />
        <InputRadius
          label="Um centavo economizado ?? um centavo ganho"
          name="q22"
          value="O"
        />
        <InputRadius
          label="Bastam um navio e uma estrela para navegar"
          name="q22"
          value="I"
        />
      </div>

      <div id="q23" className="Questionario">
        <h3>Eu acredito tamb??m que...</h3>
        <InputRadius
          label="Aquele que hesita est?? perdido"
          name="q23"
          value="A"
        />
        <InputRadius
          label="De gr??o em gr??o a galinha enche o papo"
          name="q23"
          value="O"
        />
        <InputRadius label="O que vai, volta" name="q23" value="C" />
        <InputRadius
          label="Um sorriso ou uma careta ?? o mesmo para quem ?? cego"
          name="q23"
          value="I"
        />
      </div>

      <div id="q24" className="Questionario">
        <h3>Eu acredito ainda que...</h3>
        <InputRadius
          label="?? melhor prud??ncia do que arrependimento"
          name="q24"
          value="O"
        />
        <InputRadius
          label="A autoridade deve ser desafiada"
          name="q24"
          value="I"
        />
        <InputRadius label="Ganhar ?? fundamental" name="q24" value="A" />
        <InputRadius
          label="O coletivo ?? mais importante do que o individual"
          name="q24"
          value="C"
        />
      </div>

      <div id="q25" className="Questionario">
        <h3>Eu penso que</h3>
        <InputRadius
          label="N??o ?? f??cil ficar encurralado"
          name="q25"
          value="I"
        />
        <InputRadius
          label="?? prefer??vel olhar, antes de pular"
          name="q25"
          value="O"
        />
        <InputRadius
          label="Duas cabe??as pensam melhor que do que uma"
          name="q25"
          value="C"
        />
        <InputRadius
          label="Se voc?? n??o tem condi????es de competir, n??o compita"
          name="q25"
          value="A"
        />
      </div>
      <div class="centro">
        <button onClick={CadastrarReposta}>Enviar</button>
      </div>

      <div id="modalTeste" className="none">
        <div className="pelicula" id="pelicula" onClick={btn_fechar}></div>
        <div className="janela">
          <p onClick={btn_fechar} id="fechar">
            X
          </p>
          <div className="headModal">
            <p>Resultado</p>
            <img src="" alt="" class="logoTipo" />
          </div>
          <div className="conteudoModal">
            <div className="animais">
              <div className="animal">
                <div className="alinhar">
                  <img
                    src={imgAguia}
                    alt="Aguia"
                    className="aguia"
                    id="imgAguia"
                    onClick={ConteudoAguia}
                  />

                  <div className="nomePorcentagem">
                    <p>??GUIA</p>
                    <p id="I">%</p>
                  </div>
                </div>

                <p className="palavraChave">A CRIATIVA</p>
              </div>
              <div className="animal">
                <div className="alinhar">
                  <img
                    src={imgLobo}
                    alt="Lobo"
                    className="aguia"
                    id="imgLobo"
                    onClick={ConteudoLobo}
                  />
                  <div className="nomePorcentagem">
                    <p id="imgLobo">LOBO</p>
                    <p id="O">%</p>
                  </div>
                </div>

                <p className="palavraChave">O ORGANIZADOR</p>
              </div>
              <div className="animal">
                <div className="alinhar">
                  <img
                    src={imgTubarao}
                    alt="tubarao"
                    className="aguia"
                    id="imgTubarao"
                    onClick={ConteudoTubarao}
                  />
                  <div className="nomePorcentagem">
                    <p id="imgTubarao">TUBAR??O</p>
                    <p id="A">%</p>
                  </div>
                </div>

                <p className="palavraChave">O ATACADO</p>
              </div>
              <div className="animal">
                <div className="alinhar">
                  <img
                    src={imgGato}
                    alt="gato"
                    className="aguia"
                    id="imgGato"
                    onClick={ConteudoGato}
                  />
                  <div className="nomePorcentagem">
                    <p id="imgGato">GATO</p>
                    <p id="C">%</p>
                  </div>
                </div>

                <p className="palavraChave">O EXTROVERTIDO</p>
              </div>
            </div>
            <div className="conteudo">
              <h5 id="vceh">VOC?? ??:</h5>
              <div id="conteudoModalG" className="none">
                <h2 id="nomeAnimal">Gato</h2>

                <p>
                  Seu lema ??: 'Fazer Junto'. ?? sens??vel, gosta de
                  relacionamentos, de times, ?? tradicionalista, busca harmonia e
                  delega autoridade. Pontos Fortes: Comunica????o, manter a
                  harmonia, desenvolver e manter a cultura empresarial e
                  comunica????o aberta. Pontos de melhoria: esconder conflitos,
                  felicidade acima dos resultados, manipula????o atrav??s dos
                  sentimentos. Motiva????es: Seguran??a, aceita????o social,
                  construir o consenso, reconhecimento da equipe, supervis??o
                  compreensiva, ambiente harmonico e trabalho em grupo.
                </p>
              </div>
              <div id="conteudoModalT" className="none">
                <h2 id="nomeAnimal">Tubar??o</h2>

                <p>
                  Seu lema ??: 'Fazer r??pido'. Tem senso de urg??ncia, a????o,
                  iniciativa, ?? impulsivo, pr??tico, gosta de vencer desafios,
                  focado no aqui e agora. ?? auto-suficiente e n??o gosta de
                  delegar poder. Pontos Fortes: Fazer acontecer, parar com a
                  burocracia e a motiva????o. Pontos de melhoria: socialmente um
                  desastre, faz do modo mais f??cil e relacionamento complicado.
                  Motiva????es: Liberdade para agir individualmente, controle das
                  pr??prias atividades, resolver os problemas do seu jeito,
                  competi????o individual, variedade de atividades e n??o ter que
                  repetir tarefas.{" "}
                </p>
              </div>
              <div id="conteudoModalA" className="none">
                <h2 id="nomeAnimal">??guia</h2>

                <p>
                  Seu lema ??: 'Fazer Diferente'. ?? criativo. intuitivo. tem foco
                  no futuro, distra??do, curioso, informal, casual e flex??vel
                  Pontos fortes: Provoca mudan??as radicais, antecipa o futuro e
                  a criatividade. Pontos de melhoria: Falta de aten????o no aqui e
                  agora, impaci??ncia, rebeldia e defender o novo pelo novo.
                  Motiva????es: Liberdade de express??o, aus??ncia de controles
                  r??gidos, ambiente de trabalho descontra??do, liberdade para
                  fazer exce????es e oportunidades para delegar tarefas e
                  detalhes.{" "}
                </p>
              </div>
              <div id="conteudoModalL" className="none">
                <h2 id="nomeAnimal">Lobo</h2>

                <p>
                  Seu lema ??: 'Fazer Certo'. ?? detalhista, organizado,
                  estrategista, busca conhecimento, pontual, conservador e
                  previs??vel. Pontos Fortes: Organiza????o. Consci??ncia,
                  conformidade e qualidade. Lealdade e seguran??a. Regras e
                  responsabilidades. Pontos de melhoria: dificuldades de se
                  adaptar as mudan??as. Pode impedir o progresso. Detalhista,
                  estruturado e demasiadamente sistematizado. Motiva????es:
                  Compreens??o exata de quais s??o as regras. Conhecimento
                  espec??fico do trabalho. Aus??ncia de riscos e erros. Ver o
                  produto acabado: come??o, meio e fim.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
