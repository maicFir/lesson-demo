import {combineReducers} from 'redux'

import count from './count';
import {todo} from './todo';
// 合并reuder
const rootReducer = combineReducers({
  count,
  todo
})
export default rootReducer