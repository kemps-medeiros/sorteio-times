import { useState } from 'react';
import './App.css';

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [teamYellow, setTeamYellow] = useState([]);
  const [teamBlue, setTeamBlue] = useState([]);

  const handleInput1 = (ev) => {
    setPlayer1(ev.target.value);
  };

  const handleInput2 = (ev) => {
    setPlayer2(ev.target.value);
  };

  const draw = () => {
    let drawList = [];
    drawList.push(player1, player2);
    let drawnPlayer = drawList[Math.floor(Math.random() * drawList.length)];
    if (drawnPlayer === player1) {
      setTeamYellow([...teamYellow, player1]);
      setTeamBlue([...teamBlue, player2]);
    } else {
      setTeamYellow([...teamYellow, player2]);
      setTeamBlue([...teamBlue, player1]);
    }
    console.log(teamYellow);
    console.log(teamBlue);
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    document.querySelector('.input1').focus();
  };

  const clean = () => {
    setTeamBlue([]);
    setTeamYellow([]);
  };

  return (
    <div className="container">
      <div className="header">
        <header className="header__title">
          <h1>Sorteio de Times</h1>
        </header>
      </div>
      <div className="input__players">
        <div className="input__players__text">
          <h3>Digite o nome de dois Jogadores da mesma posição!</h3>
        </div>
        <div className="input__players__input">
          <div className="player1">
            <label>JOGADOR 1</label>
            <input
              className="input1"
              type="text"
              onChange={handleInput1}
              autoFocus={true}
            />
          </div>
          <div className="player2">
            <label>JOGADOR 2</label>
            <input type="text" onChange={handleInput2} />
          </div>
          <div className="buttons">
            <button onClick={draw}>SORTEAR</button>
          </div>
        </div>
      </div>
      <div className="teams">
        <div className="team_yellow">
          <h2>Time Amarelo</h2>
          <ul>
            {teamYellow.map((player) => {
              return <li key={player.length}>{player}</li>;
            })}
          </ul>
        </div>
        <div className="team_blue">
          <h2>Time Azul</h2>
          <ul>
            {teamBlue.map((player) => {
              return <li key={player.length}>{player}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="button_footer">
        <button className="draw_again" onClick={clean}>
          SORTEAR NOVAMENTE
        </button>
      </div>
    </div>
  );
}

export default App;
