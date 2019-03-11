import React, {Component, Fragment} from 'react';
import PropTypes                    from 'prop-types';
import Style                        from './Playground.module.scss';
import './Playground.scss';
import * as classnames              from 'classnames';

class Playground extends Component {

  static propTypes = {
    // todo             : PropTypes.object.isRequired,
    // editTodo         : PropTypes.func.isRequired,
  };

  constructor (props, context) {
    super(props);
    this.state = {};
  }

  componentWillMount () {}

  // 渲染(展示数据)
  render () {
    // js域

    return (
      // xml域
      <div className={classnames({ 'Playground': true })}>
        <style>{`.Playground{ padding : 20px; box-shadow : 0 0 0 1px #CCC inset; }`}</style>
        <h1>hello Playground</h1>
        <hr />
        {this.props.children ? (<Fragment>{this.props.children}</Fragment>) : null}
      </div>
    );
  }

  // 加载完毕
  componentDidMount () {}

  componentWillUnmount () {}
}

export default Playground;
