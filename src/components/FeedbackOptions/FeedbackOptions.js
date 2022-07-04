import PropTypes from 'prop-types';
import { StyledButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <StyledButton onClick={onLeaveFeedback} key={el}>
      {el}
    </StyledButton>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
