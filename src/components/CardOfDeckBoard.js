import React from 'react';
import './CardOfDeckBoard.css';

function CardOfDeckBoard ({ heroe, onHandToBoard, onSelectedCard, onAttackIaCard }) {
  const handleClickOnCardOfDeckBoard = (event) => {
    // Ajoute la carte P1 sur le board
    if (heroe.position === 'hand') {
      return onHandToBoard(heroe.name);
    } else if (heroe.position === 'board' && !heroe.iaDeck) {
      return onSelectedCard(heroe.name);
    } else if (heroe.iaDeck) {
      return onAttackIaCard(heroe.name);
    }
  };

  return (
    <div className={heroe.selected === true ? 'cardBoard toggleCardSelect' : 'cardBoard'} onClick={handleClickOnCardOfDeckBoard}>
      <section className='pwBoard'>
        {heroe.power} PW
      </section>
      <img className='imageCardBoard' src={heroe.img} alt={heroe.name} />
      <section className='containerBottomBoard'>
        <div className='atkBoard'>
          <p className={heroe.name}>
            {heroe.atk}
          </p>
        </div>
        <div className='hpBoard'>
          <p className={heroe.name}>
            {heroe.hp}
          </p>
        </div>
      </section>
    </div>
  );
}

export default CardOfDeckBoard;
