import { Component } from 'react';
import PropTypes from 'prop-types';
import { Sect } from './Section.styled';
import { Title } from './Title';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdateStats = event => {
    const targetName = event.currentTarget.name;

    this.setState(prevState => ({ [targetName]: prevState[targetName] + 1 }));
  };

  countTotalFeedback = data => {
    return Object.values(data).reduce((acc, total) => acc + total, 0);
  };

  countPositiveFeedbackPercentage() {
    return Number.parseInt(
      (this.state.good / this.countTotalFeedback(this.state)) * 100
    );
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const message = 'There is no feedback';
    return (
      <Sect>
        <Title title={this.props.title} />
        <FeedbackOptions
          onLeaveFeedback={this.onUpdateStats}
          options={['good', 'neutral', 'bad']}
        />
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message={message} />
        )}
      </Sect>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
