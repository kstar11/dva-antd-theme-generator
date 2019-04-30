import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd'

class IndexPage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    window.less.modifyVars({
      '@primary-color': '#5d4a36'
    })
  }
  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <Button type="primary" >Click</Button>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
