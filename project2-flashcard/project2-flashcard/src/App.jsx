import './App.css';
import { useState } from 'react';

const cards = [
  { front: "Hello", back: "Xin chào" },
  { front: "How are you?", back: "Bạn khỏe không?" },
  { front: "Thank you", back: "Cảm ơn" },
  { front: "Car", back: "Xe ô tô" },
  { front: "Phone", back: "Điện thoại" },
  { front: "Music", back: "Âm nhạc" },
  { front: "Computer", back: "Máy tính" },
  { front: "Water", back: "Nước" },
  { front: "Pencil", back: "Bút chì" },
  { front: "Headphone", back: "Tai nghe" }
];

const App = () => {
  const [current, setCurrent] = useState(0);
  const [flip, setFlip] = useState(0);

  const flipCard = () => {
    setFlip((flip + 1) % 2);
  }

  const nextCard = () => {
    setCurrent((current + 1) % 10);
    setFlip(0);
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>The Vietnamese Flashcard!</h1>
        <h2>Check your knowledge of Vietnamese with this flashcard!</h2>
        <h3>Number of cards: 10</h3>
      </div>
      <div className={"card" + flip} onClick={flipCard}>
        {flip ? (
          <h2 className='back'>{cards[current].back}</h2>
        ) : (
          <h2 className='front'>{cards[current].front}</h2>
        )}
      </div>
      <button onClick={nextCard}>Next</button>
    </div>
  )
}

export default App