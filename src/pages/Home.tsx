import React, { useEffect } from 'react';
import {
  getRandomWord,
  getWordByTopic, receiveCategories
} from '../redux/axiosOperations';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useAppDispatch } from '../utils/hooks';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectTopics } from '../redux/selectors';

const Home: React.FC = () => {   
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectIsLoading)
  const topics = useSelector(selectTopics)

  console.log(topics)

  useEffect(() => {
try {
  // eslint-disable-next-line no-inner-declarations
  async function getCategories() {  
    await dispatch(receiveCategories())
  }
  getCategories()
} catch (error) {
      console.error('Error fetching random word:', error);
}
  }, [dispatch]);

  const handleClick = async (): Promise<void> => {
    try {
      await dispatch(getRandomWord())
      navigate('/game')
    } catch (error) {
      console.error('Error fetching random word:', error);
    }
  };

  const handleTopicClick = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    try {
      await dispatch(getWordByTopic(e.currentTarget.textContent || ''));
      navigate('/game');
    } catch (error) {
      console.error('Error fetching words by topic:', error);
    }
  };

  return (
    <>
      {isLoading && topics.length > 0 ? <p>Loading</p> :
        <div> {topics.map((topic:string) => (
        <Button key={topic} onClick={handleTopicClick}>
             {topic}
           </Button>
      ))}
       <button onClick={handleClick}>Give a word!</button>
      </div>}
    </>
  );
};

export default Home;
