import React from 'react';
import PropTypes from 'prop-types';
import * as headings from './style';
import { CSSProperties } from 'styled-components';

interface HeadingProps {
  as: any;
  children: any;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

const Heading = (props: HeadingProps) => {
  const { as, children, className, id, style } = props;
  const _headings: any = headings;
  const lt = _headings[as.toUpperCase()]
  const StyledHeading = lt ?? headings.H1;
  // const StyledHeading = as ? headings[as.toUpperCase()] : headings.H1;

  return (
    <StyledHeading className={className} id={id} style={style}>
      {children}
    </StyledHeading>
  );
};

Heading.defaultProps = {
  as: 'h1',
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.string,
};

export default Heading;
