import PropTypes from 'prop-types';
import { TitleSt } from './Title.styled';

export const Title = ({ title }) => {
  return <TitleSt>{title}</TitleSt>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
