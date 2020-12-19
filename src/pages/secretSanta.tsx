import { useEffect } from 'react';
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

const SEX = { MALE: 'male', FEMALE: 'female' };
const give = [{
	name: 'Рома',    sex: SEX.MALE,   blackList: ['Марінка'], id: 1
}, {
	name: 'Марінка', sex: SEX.FEMALE, blackList: ['Рома'],    id: 2
}, {
	name: 'Артур',   sex: SEX.MALE,   blackList: ['Наталя'],  id: 3
}, {
	name: 'Наталя',  sex: SEX.FEMALE, blackList: ['Артур'],   id: 4
}, {
	name: 'Настя',   sex: SEX.FEMALE, blackList: ['Діма'],    id: 5
}, {
	name: 'Діма',    sex: SEX.MALE,   blackList: ['Настя'],   id: 6
}];

export default function SecretSanta() {
  useEffect(() => {
    this.receive = give.concat();
    this.peopleWrap = document.getElementById('peopleWrap');
    this.people = document.getElementById('people');
    this.choose = document.getElementById('choose');
    this.result = document.getElementById('result');
    this.close = document.getElementById('close');
    
    drawList();
  });

  const drawList = () => {
    this.people.innerHTML = '<option value="">Хто ти?</option>';

    for (let i = give.length - 1; i >= 0; i--) {
      const option = document.createElement('option');
      option.value = String(i);
      option.innerHTML = give[i].name;

      this.people.appendChild(option);
    }
  }

  function selectPerson(personIndex) {
    const person = give[personIndex];
    const name = this.person.name;
    const receivePerson = this.receive.find(p => p.name === name);
    const receivePersonIndex = this.receive.indexOf(receivePerson);

    if (receivePersonIndex >= 0) {
      this.receive.splice(receivePersonIndex, 1);
    }
    const whiteList = this.receive.concat().filter(p => person.blackList.indexOf(p.name) === -1);
    const whiteListIndex = Math.floor(Math.random() * whiteList.length);
    const recipient = whiteList[whiteListIndex];

    if (!recipient) {
      this.result.innerHTML = '';
      this.close.innerHTML = '';

      this.peopleWrap.parentNode.removeChild(this.peopleWrap);
      this.choose.parentNode.removeChild(this.choose);
      this.result.innerHTML = '<h2>Готово!</h2>';
      this.close.innerHTML = '';
      return null;
    }

    const recipientName = recipient.name;
    const recipientIndex = this.receive.indexOf(recipient);

    this.receive.splice(recipientIndex, 1);
    give.splice(personIndex, 1);

    if (receivePersonIndex >= 0) {
      this.receive.push(person);
    }
    this.result.innerHTML = '<h2>' + name + ', тобі ' + (
      recipient.sex === SEX.MALE ? 'попався' : 'попалася'
    ) + ' ' + recipientName + '!</h2>';
    this.close.innerHTML = 'Добре. Видалити це повідомлення.';

    if (give.length > 0) {
      drawList();
    }
  }

  const onChooseClick = () => {
    if (this.people.value) {
      selectPerson(this.people.value);
    }
  };

  const onCloseClick = () => {
    this.result.innerHTML = '';
    this.close.innerHTML = '';

    if (give.length == 0) {
      this.peopleWrap.parentNode.removeChild(this.peopleWrap);
      this.choose.parentNode.removeChild(this.choose);
      this.result.innerHTML = '<h2>Готово!</h2>';
      this.close.innerHTML = '';
    }
  };

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="wrapper">
        <h1>Secret Santa</h1>
        <div className="select-wrap" id="peopleWrap">
          <select id="people"></select>
          <span className="arrow"></span>
        </div>
        <div>
	  <button id="choose" onClick={onChooseClick}>Хто мені попався (попалася)?</button>
	</div>
        <div id="result"></div>
        <div className="close">
	  <span id="close" onClick={onCloseClick}></span>
	</div>
      </div>
    </Layout>
  );
}





