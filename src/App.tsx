import { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';
import { Celebrity } from './interfaces/Celebrity.interface';

function App() {

  const [celebrityList, setCelebrityList] = useState<Celebrity[]>([
    {
      name: 'Aahad Aazar',
      age: 20,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZRikTv9DxCom-Q9kpYt5vCzyKXtNVxGrAA&usqp=CAU',
      note: 'Hello'
    },
  ]);

  return (
    <div className="App">
      <h1>{'This is my celebrity list!!!'}</h1>
      <List listItems={celebrityList} />
      <AddToList celebrityList={celebrityList} setCelebrityList={setCelebrityList} />
    </div>
  );
}

export default App;
