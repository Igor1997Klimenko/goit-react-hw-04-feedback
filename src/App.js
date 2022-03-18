import './App.css';
import { useState } from 'react';
import Statistics from './component/Statistics/Statistics ';
import FeedbackOptions from './component/FeedbackOptions/FeedbackOptions';
import Section from './component/Section/Section ';
import Notification from './component/Notification/Notification';
import Container from './component/Container/Container';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const feedbackTypes = {good, neutral, bad};

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1)
        break;
    
      case 'neutral':
        setNeutral(state => state + 1)
        break;
    
      case 'bad':
        setBad(state => state + 1)
        break;
      
      default:
        return;
    }
  };


  const countTotalFeedback = () => {
    return Object.values(feedbackTypes).reduce((acc, option) => acc + option, 0);
  }
  
  const countPositiveFeedbackPercentage = () => {
      return Math.round((good / countTotalFeedback()) * 100) || 0;
    }

    return (
      <Container>
      <Section title="Pleace leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={addFeedback}/>
        </Section>
      
        <Section title="Statistics">
          {countTotalFeedback() ? 
              ( <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positive={countPositiveFeedbackPercentage()}
              />
              ) : (
              <Notification message="There is no feedback" />)
          }
        </Section>
      </Container>
    )
  };

export default App;