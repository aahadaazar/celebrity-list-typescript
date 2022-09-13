import React from 'react';
import { Celebrity } from '../interfaces/Celebrity.interface';

interface ListProps {
  listItems: Celebrity[],
}

const List: React.FC<ListProps> = ({ listItems }) => {

  const renderList = (): JSX.Element[] => {
    return listItems.map((celebrity, index) => {
      return <li key={index} className='List'>
        <div className='List-header'>
          <img className='List-img' alt='celebrity' src={celebrity.url} />
          <h2>{celebrity.name}</h2>
        </div>
        <p>{celebrity.age}</p>
        <p className='List-note'>{celebrity.note}</p>
      </li>
    })
  }
  return (
    <div>{renderList()}</div>
  )
}


export default List