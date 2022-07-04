import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { Container, Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = e => {
    const key = e.currentTarget.textContent;

    this.setState(prevState => {
      return { [key]: (prevState[key] += 1) };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() > 0) {
      return `${Math.round(
        (this.state.good * 100) / this.countTotalFeedback()
      )}%`;
    }

    return '0%';
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <Wrapper>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleButton}
            />
          </Wrapper>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
