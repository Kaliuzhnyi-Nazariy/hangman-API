import React, { useEffect, useState } from 'react';
import {
  getRandomWord,
  getWordByTopic, receiveCategories
} from '../redux/axiosOperations';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Home: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
try {
  // eslint-disable-next-line no-inner-declarations
  async function getCategories() {
     const resCategory = await receiveCategories();
        setCategories(resCategory);
  }
  getCategories()
} catch (error) {
      console.error('Error fetching random word:', error);
}
  }, []);

  const handleClick = async (): Promise<void> => {
    try {
      dispatch(getRandomWord())
      navigate('/game')
    } catch (error) {
      console.error('Error fetching random word:', error);
    }
  };

  const handleTopicClick = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    try {
      dispatch(getWordByTopic(e.currentTarget.textContent || ''))
      navigate('/game');
    } catch (error) {
      console.error('Error fetching words by topic:', error);
    }
  };

  return (
    <div>
      {categories.length > 0 ? (
categories.map((topic) => (
          <button key={topic} onClick={handleTopicClick}>
            {topic}
          </button>
          ))
        

      ) : (
        <></>
      )}
      <button onClick={handleClick}>Give a word!</button>
    </div>
  );
};

export default Home;
