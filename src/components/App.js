import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { Container, Wrapper } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackState = { good, neutral, bad };

  const handleButton = e => {
    const key = e.currentTarget.textContent;
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(feedbackState).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() > 0) {
      return `${Math.round((good * 100) / countTotalFeedback())}%`;
    }

    return '0%';
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <Wrapper>
          <FeedbackOptions
            options={Object.keys(feedbackState)}
            onLeaveFeedback={handleButton}
          />
        </Wrapper>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
