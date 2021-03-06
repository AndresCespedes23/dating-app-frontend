/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import styles from './cards.module.css';

const db = [
  {
    name: 'Random Guy',
    imgUrl:
      'https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80',
  },
  {
    name: 'Another Guy',
    imgUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Random Girl',
    imgUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Another Girl',
    imgUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
  },
];

interface Person {
  name: string;
  imgUrl: string;
}

function Cards() {
  const [people, setPeople] = useState<Array<Person>>([]);

  useEffect(() => {
    setPeople(db);
  }, []);

  return (
    <div>
      <div className={styles.cardsContainer}>
        {people.map((person) => (
          <TinderCard
            className={styles.swipe}
            key={person.name}
          >

            <div
              style={{
                backgroundImage: `url(${person.imgUrl})`,
              }}
              className={styles.card}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
