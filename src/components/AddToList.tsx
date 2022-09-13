import React, { useState } from 'react';
import { Celebrity } from '../interfaces/Celebrity.interface';

interface AddToListProps {
  celebrityList: Celebrity[],
  setCelebrityList: React.Dispatch<React.SetStateAction<Celebrity[]>>
}

const initialInputState = {
  name: '',
  age: '',
  url: '',
  note: ''
}

const AddToList: React.FC<AddToListProps> = ({ celebrityList, setCelebrityList }) => {

  const [input, setInput] = useState(initialInputState)


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const handleAddCelebrity = (): void => {
    if (!input.name || !input.age || !input.url) {
      return
    }
    setCelebrityList([
      ...celebrityList,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note
      }
    ])
    setInput(initialInputState);
  }


  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='Name'
        className='AddToList-input'
        value={input.name}
        name='name'
        onChange={handleInputChange}
      />
      <input
        type='text'
        placeholder='Age'
        className='AddToList-input'
        value={input.age}
        name='age'
        onChange={handleInputChange}
      />
      <input
        type='text'
        placeholder='Image URL'
        className='AddToList-input'
        value={input.url}
        name='url'
        onChange={handleInputChange}
      />
      <textarea
        placeholder='Notes'
        className='AddToList-input'
        value={input.note}
        name='note'
        onChange={handleInputChange}
      />
      <button
        onClick={handleAddCelebrity}
        className="AddToList-btn">
        Add To List
      </button>
    </div>
  )
}


export default AddToList
