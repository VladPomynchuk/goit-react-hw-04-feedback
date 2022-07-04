import PropTypes from 'prop-types';
import { StyledTitle, StyledSection } from './Section.styled.jsx';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
