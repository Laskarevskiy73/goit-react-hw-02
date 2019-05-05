import React from 'react';
import PropTypes from 'prop-types';
import style from './Reader.module.css';

const Publication = ({ currentIndexItem: { title, text } }) => (
  <section className={style.publication}>
    <h2>{title}</h2>
    <p>{text}</p>
  </section>
);

Publication.propTypes = {
  currentIndexItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
