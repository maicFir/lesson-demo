import React, { Component } from 'react'
import { connect } from 'react-redux'
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentVal: 1
    }
  }
  add = () => {
    const {dispatch, count} = this.props;
    dispatch({type: 'INCREMENT', curentVal:1})
    this.setState({
      curentVal: count
    })
  }
  redu = () => {
    const {dispatch, count} = this.props;
    dispatch({type: 'DECREMENT'});
    this.setState({
      curentVal: count
    })
  }
  render() {
    const {curentVal} = this.state;
    return (<div className="count-container">
        <input value={curentVal}/> --- {curentVal}
        <input value="+" type="button" onClick={() => {this.add()}}/>
        <input value="-" type="button" onClick={() => {this.redu()}}/>
    </div>);
  }
}
/* 
该函数监听redux中store值的变化，只要store发生变化，mapStateToProps就会被调用
建立store与state的关系，返回一个对象
*/
function mapStateToProps(state, ownProps) {
  return state
}
 
export default connect(mapStateToProps)(Count);