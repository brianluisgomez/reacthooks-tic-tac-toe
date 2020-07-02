import React, { useState } from 'react';
import Board from '../Board/Board';
import { calculateWinner } from '../../helpers';
import { Typography, Button } from '@material-ui/core';

const Game = () => {
  const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(boardHistory[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = boardHistory.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';
    setBoardHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    boardHistory.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : 'Reset Game';
      return (
        <li key={move}>
          <Button onClick={() => jumpTo(move)}>{destination}</Button>
        </li>
      );
    });

  return (
    <>
      <Typography
        variant='h5'
        color='textSecondary'
        noWrap={true}
        align='center'
      >
        <Board squares={boardHistory[stepNumber]} onClick={handleClick} />
      </Typography>
      <div>
        <Typography variant='h5' color='primary' noWrap={true} align='center'>
          {winner
            ? 'Winner : ' + winner
            : 'Next player: ' + (xIsNext ? 'X' : 'O')}
          <br />
          {renderMoves()}
        </Typography>
      </div>
    </>
  );
};
export default Game;
