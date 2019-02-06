import React from "react";
import PropTypes from 'prop-types';

const Tag = ({ content }) => (
  <div className="tag">
    <span className="greeting-text">{content.greetingMessage}</span>
    <span>{content.name}</span>
  </div>
);

Tag.propTypes = {
    content: PropTypes.object.isRequired
}

export default Tag;