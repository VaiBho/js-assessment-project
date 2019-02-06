import React from "react";
import PropTypes from "prop-types";

/**
 * Shows tag with greeting and name
 * CSS styles for this component in App.css
 * styled component  can be useful for better reusability support
 * https://github.com/styled-components/styled-components
 */
const Tag = ({ content }) => (
    <div className="tag">
        <span className="greeting-text">{content.greetingMessage}</span>
        <span>{content.name}</span>
    </div>
);

Tag.propTypes = {
    content: PropTypes.object.isRequired
};

export default Tag;
