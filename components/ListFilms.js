import React from 'react';
import { Cell } from 'react-native-tableview-simple';
import FilmsItem from '../moleculs/FilmsItem';

const ListFilms = ({ data }) => {
  return (
    <>
      {
        data?.map((film) => {
          return <Cell key={film.title} cellContentView={<FilmsItem film={film} />} />;
        })
      }
    </>
  )
};

export default ListFilms;
