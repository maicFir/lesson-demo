
import { connect } from 'dva';
// import Count from '../components/count'
import React, { Component } from 'react'

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: '0',
      operation: ['+', '-', '*', '/']
    };
  }
  componentDidMount () {

  }
  // 操作符号
  opEvent = (option) => {
    return (<div style={{display: 'inline-block'}}>
      <input type="button" value={option} />
    </div>)
  }
  // 表单2
  handleChangeVal2 = (event) => {
    const {dispatch} = this.props;
    let val = event.target.value * 1;
    this.setState({
      formVal1: val
    })
    dispatch({
      type: 'counts/handleformVal2',
      payload: {
        formVal2: val
      }
    })
  }
  // 表单1
  handleChangeVal1 = (event) => {
    const {dispatch} = this.props;
    let val = event.target.value * 1;
    this.setState({
      formVal1: val
    })
    dispatch({
      type: 'counts/handleformVal1',
      payload: {
        formVal1: val
      }
    })
  }
  // 选择操作符
  handleChangeSelect = (event) => {
    let activeIndex = event.target.value;
    let {operation} = this.state;
    let fn = this.opEvent(operation[activeIndex]);
    const {dispatch} = this.props;
    this.setState({
      activeIndex
    })
    dispatch({
      type: 'counts/handleChangeSelect',
      payload: {
        fn
      }
    })
  }
  equire = () => {
    let {dispatch, formVal1, formVal2, ret} = this.props;
    let { activeIndex} = this.state;
    if (activeIndex === '0') {
      ret = formVal1 + formVal2;
    } else if (activeIndex === '1') {
      ret = formVal1 - formVal2;
    } else if (activeIndex === '2') {
      ret = formVal1 * formVal2;
    } else if (activeIndex === '3') {
      ret = formVal1 / formVal2;
    }
    dispatch({
      type: 'counts/equire',
      payload: {
        ret,
        formVal1,
        formVal2
      }
    })
  }
  result = () => {
    let {ret} = this.props;
    return(<span>{ret}</span>)
  }
  select = () => {
    const {operation} = this.state;
    return (<div>
        <select onChange={this.handleChangeSelect}>
          {operation.map((item, idx) => {
            return (<option key={idx} value={idx} defaultValue={idx===0? "0": ''}>{item}</option>)
          })}
        </select>
      </div>
    )
  }

  render () {
    let { desc, fn } = this.props; // 这里可以获取dispath,且desc会在mapStateToProps
    let Input = (<div style={{display: 'inline-block'}}>
          <input onChange={this.handleChangeVal1}/>
          {fn ? fn : this.opEvent('+')}
          <input onChange={this.handleChangeVal2}/>
    </div>) 
    return (
      <div className="count-container">
        <h2>{desc}</h2>
        {this.select()}
        {Input}
        <input value="=" type="button" onClick={this.equire}/>
        {this.result()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  let {desc, formVal1, formVal2, ret, fn} = state.counts; // state.counts 是namespace
  return {desc, formVal1, formVal2, ret, fn};//这里的counts是model里的namespace
}

export default connect(mapStateToProps)(Count)