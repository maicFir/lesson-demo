import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActionCreators from '../../redux/actionCreator'
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  // 添加
  handleAdd = (e) => {
    let value = e.target.value;
    const {addTodo} = this.props;
    if (e.which === 13) {
      addTodo({value,isTrue: true})
    }
  }
  // 删除
  handleDelete = index => {
    const {removeTodo} = this.props;
    removeTodo(index);
  }
  render() {
    const {list} = this.props;
    const objStyle = (v) => {
      return {
        textDecoration: v.isTrue ? 'line-through': 'none'
      }
    }
    console.log(this.props);
    return (<div className="to-do-container">
      <input defaultValue="1" onKeyPress={(e) => {this.handleAdd(e)}}/>
      {list.map((v, idx) => {
        return (<div className="list" key={idx}>
          <span style={objStyle(v)}>{v.name}</span> <span style={{color: 'blue'}} onClick={() => {this.handleDelete(idx)}}>删除</span>
        </div>)
      })}
    </div>);
  }
}
/**
 * 映射组件与store.dispatch的关系，传入一个函数
 * 
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActionCreators, dispatch)
}
function mapStateToProps(state) {
  console.log(state)
  return {
    count: state.count,
    list: state.todo.list
  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);