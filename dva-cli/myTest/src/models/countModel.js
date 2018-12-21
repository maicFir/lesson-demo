
export default {

  namespace: 'counts',

  state: {
    record: 0,
    current: 0,
    desc: 'hello, world'
  },

  //这里改变state,reducers是改变state的一些自定义方法
  reducers:{
      add(state,{payload}){
          console.log(payload); // payload为传过来的参数
          const newCurrent = state.current+1;
          // 对state中的数据进行赋值
          return {
            ...state,
            current: newCurrent
          }
      },
      redu(state, action){
        // action 就是dispacth({type: 'counts/redu'})中传过来的参数
        let current = state.current -1;
        console.log(action);
        return{
          ...state,
          current: current
        }
      },
      save(state, action) {
        return { ...state, ...action.payload };
      },
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
    // *add({payload: counts}, { call, put }) {
         
    //       yield put({ type: 'add'});
    // }
  }

};
