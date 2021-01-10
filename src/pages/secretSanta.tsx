import { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

enum SEX {
  MALE = 'male',
  FEMALE = 'female'
}

interface IPerson {
  id: number;
  name: string;
  sex: SEX;
  blackList: string[];
}

const list: IPerson[] = [{
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
  const [givers, setGivers] = useState(list);
  const [giver, setGiver] = useState({} as IPerson | null);
  const [recipients, setRecipients] = useState([...list]);
  const [recipient, setRecipient] = useState({} as IPerson | null);

  const selectRecipient = () => {
    const giverInRecipients = recipients.find(({ id }) => id === giver.id);
    const recipientsWithoutGiver = giverInRecipients
      ? recipients.filter(({ id }) => id !== giverInRecipients.id)
      : [...recipients];

    if (giverInRecipients) {
      setRecipients(recipientsWithoutGiver);
    }
    
    const whiteList = recipientsWithoutGiver.filter(({ name }) => giver.blackList.indexOf(name) === -1);
    const whiteListIndex = Math.floor(Math.random() * whiteList.length);
    const recipient = whiteList[whiteListIndex];

    setRecipient(recipient || {} as IPerson);
    if (!recipient) return null;

    const recipientsWithoutGiverAndRecipient = recipientsWithoutGiver.filter(({ id }) => id !== recipient.id);
    setRecipients(recipientsWithoutGiverAndRecipient);
    setGivers(givers.filter(({ id }) => id !== giver.id));

    if (giverInRecipients) {
      setRecipients([...recipientsWithoutGiverAndRecipient, giver]);
    }
  };

  const onSelectChange = ({ target: { value: giverId } }) => {
    setGiver(givers.find(({ id }) => id === parseInt(giverId, 10)));
  };

  const onCloseClick = () => {
    setRecipient({} as IPerson);
  };

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="wrapper">
        <h1>
          Secret Santa
        </h1>
        {!!givers.length && (
          <div className="select-wrap" id="peopleWrap">
            <select id="people" value={giver.id} onChange={onSelectChange}>
              <option value="-1">Хто ти?</option>
              {givers.map(({ id, name }) => (
                <option key={id} value={id}>{name}</option>
              ))}
            </select>
            <span className="arrow"></span>
          </div>
        )}
        <div>
          {!!recipients.length && !!givers.length && (
            <button id="choose" onClick={selectRecipient}>Хто мені попався (попалася)?</button>
          )}
        </div>
        <div id="result">
          {giver.name && recipient.name && (
            <h2>{giver.name}, тобі {recipient.sex === SEX.MALE ? 'попався' : 'попалася'} {recipient.name}!</h2>
          )}
          {(!recipients.length || !givers.length) && !recipient.name && (
            <h2>Готово!</h2>
          )}
        </div>
        <div className="close">
          {recipient.name && (
            <span id="close" onClick={onCloseClick}>Добре. Видалити це повідомлення.</span>
          )}
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          width: 100%;
          max-width: 320px;
          margin: 0 auto;
          padding: 0 20px;
        }
        h1 {
          color: #E93800;
          -webkit-transform: skew(0, -6deg);
          -moz-transform: skew(0, -6deg);
          -o-transform: skew(0, -6deg);
          transform: skew(0, -6deg);
          text-shadow: 0 0 1px #800;
          font-size: 2.5rem;
        }  
        select, button {
          padding: 10px;
          font-size: 18px;
          margin: auto;
          cursor: pointer;
          width: 220px;
        }
        .select-wrap {
          position: relative;
          display: inline-block;
          margin: 10px 0 30px;
          border-radius: 5px;
          background: #fefefe;
          box-shadow: 0 0 2px #AC0404;
        }
        select {
          -webkit-appearance: none;
          background: none;
          border: 0;
          position: relative;
          z-index: 2;
        }
        select:focus,
        select:active {
          outline: 0;
        }
        select:hover + .arrow,
        select:hover + .arrow {
          border-width: 12px;
          right: 8px;
        }
        .arrow {
          position: absolute;
          z-index: 1;
          height: 0;
          top: 50%;
          margin-top: -5px;
          right: 10px;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
          border-top: 10px solid #8EA88E;
          -webkit-transition: 0.2s ease;
          -moz-transition: 0.2s ease;
          -o-transition: 0.2s ease;
          transition: 0.2s ease;
        }
        button {
          /* from the lovely https://codepen.io/FelipeMarcos/full/tfhEg */
          position: relative;
          background: #63A063;
          border: 0;
          color: #fff;
          font-weight: bold;
          border-radius: 20px;
          box-shadow: 
            inset 0 0 0 1px #2B862B, 
            inset 0 0 0 2px rgba(255,255,255, .15),
            0 8px 0 0 #648052,
            0 8px 0px 1px rgba(0,0,0,.5),
            0 8px 8px 1px rgba(0,0,0,.5);
        }
        button:hover,
        button:focus {
          outline: 0;
          top: 2px;
          background: #63A063;
          -webkit-transition: 0.2s ease-in-out;
          -moz-transition: 0.2s ease-in-out;
          -o-transition: 0.2s ease-in-out;
          transition: 0.2s ease-in-out;
          box-shadow: 
            inset 0 0 0 1px #2B862B, 
            inset 0 0 0 2px rgba(255,255,255, .15),
            0 6px 0 0 #648052,
            0 6px 0px 1px rgba(0,0,0,.5),
            0 6px 8px 1px rgba(0,0,0,.5);
        }
        button:active {
          outline: 0;
          top: 8px;
          box-shadow: 
            inset 0 0 0 1px #2B862B, 
            inset 0 0 0 2px rgba(255,255,255, .15),
            0 1px 0 0 #648052,
            0 1px 0px 1px rgba(0,0,0,.5),
            0 1px 8px 1px rgba(0,0,0,.5);
        }
        .close {
          margin: 20px 0;
          cursor: pointer;
          text-decoration: underline;
          color: #000;
        }
      `}</style>
    </Layout>
  );
}
