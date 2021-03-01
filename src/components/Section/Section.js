import React from 'react';
import PropTypes from 'prop-types';
import './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
Section.propTypes = {
  title: PropTypes.string,
}
export default Section