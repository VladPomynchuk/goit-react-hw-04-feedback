import { StyledOption } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = props => {
  return Object.keys(props).map(el => (
    <StyledOption key={el}>{`${el}: ${props[el]}`}</StyledOption>
  ));
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};

export default Statistics;
