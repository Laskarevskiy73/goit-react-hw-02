import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication';
import Counter from './Counter';
import Controls from './Controls';
import style from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    step: 1,
    currentIndexItem: this.props.items.indexOf(this.props.items[0]),
  };

  onIncrement = () => {
    this.setState(prevState => {
      const { step } = this.state;

      return {
        currentIndexItem: this.props.items.indexOf(
          this.props.items[[prevState.currentIndexItem - step]],
        ),
      };
    });
  };

  onDicrement = () => {
    this.setState(prevState => {
      const { step } = this.state;

      return {
        currentIndexItem: this.props.items.indexOf(
          this.props.items[[prevState.currentIndexItem + step]],
        ),
      };
    });
  };

  render() {
    const { items } = this.props;
    const { currentIndexItem } = this.state;
    const itemsLength = items.length;

    return (
      <div className={style.reader}>
        <Publication currentIndexItem={items[currentIndexItem]} />
        <Counter
          currentIndexItem={currentIndexItem + 1} // +1 для начала счетчика с единицы.
          itemsLength={itemsLength}
        />
        <Controls
          index={currentIndexItem}
          itemsLength={itemsLength}
          onIncrement={this.onIncrement}
          onDicrement={this.onDicrement}
        />
      </div>
    );
  }
}
