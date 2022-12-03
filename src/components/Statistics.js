import PropTypes from 'prop-types';
import { Title, Label } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Title>Statistics</Title>
      <Label>Good: {good}</Label>
      <Label>Neutral: {neutral}</Label>
      <Label>Bad: {bad}</Label>
      <Label>Total: {total}</Label>
      <Label>Positive feedback: {total > 0 ? positivePercentage : 0}%</Label>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
