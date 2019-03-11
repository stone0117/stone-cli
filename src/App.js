import React, {Component} from 'react';
import PropTypes          from 'prop-types';
import Style              from './App.module.scss';
import './App.scss';
import * as classnames    from 'classnames';
import Mock               from 'mockjs';
import Playground         from './components/Playground';

const Random = Mock.Random;
const mock   = Mock.mock;

class App extends Component {

  constructor (props, context) {
    super(props);
  }

  componentWillMount () {}

  // 渲染(展示数据)
  render () {
    // js域
    return (
      // xml域
      <div className={classnames({ 'SNApp': true })}>
        <style>{`.SNApp{ padding:20px;box-shadow : 0 0 0 1px #CCC inset; }`}</style>
        <h1>hello SNApp</h1>
        <hr />
        {/*<PostsForm />*/}
        {/*<hr />*/}
        <Playground>
          <h1>hello world</h1>
          <h2>你好吗 世界</h2>
        </Playground>
      </div>
    );
  }

  componentDidMount () {}

  componentWillUnmount () {}
}

export default App;
