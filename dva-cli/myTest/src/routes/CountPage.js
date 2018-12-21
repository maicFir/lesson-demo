
import { connect } from 'dva';
// import Count from '../components/count'
import React, { Component } from 'react'

class Count extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {

  }
  add = () => {
    let {dispatch, current} = this.props;
    dispatch({
      type: 'counts/add',
      payload: {
        current
      }
    })
    console.log('增加');
  }
  redu = () => {
    let {dispatch} = this.props;
    dispatch({
      type: 'counts/redu',
      payload: {name: 'redu'}
    })
  }
  options = () => {
    return (<div>
      <input type="button" onClick={this.add} value="添加" />
      <input type="button" onClick={this.redu} value="减少" />
    </div>)
  }

  render () {
    let option = (<div>
          <input type="button" onClick={this.add} value="添加" />
          <input type="button" onClick={this.redu} value="减少" />
    </div>)
    let { current, desc } = this.props; // 这里可以获取dispath,且desc会在mapStateToProps
    return (
      <div className="count-container">
        <div className="current">{current}---{desc}</div>
        {this.options()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  let {current, desc} = state.counts; // state.counts 是namespace
  return { current: current, desc: desc };//这里的counts是model里的namespace
}

export default connect(mapStateToProps)(Count)