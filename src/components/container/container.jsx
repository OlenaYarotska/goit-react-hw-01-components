import propTypes from 'prop-types';

import { Container } from "./Container.styled";
export const CardContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

CardContainer.propTypes = {
  children: propTypes.array.isRequired,
}

