

export default {

  namespace: 'counts',

  state: {
    desc: '简易计算器',
    formVal1: 0,
    formVal2: 0,
    ret: '',
    fn: null
  },

  //这里改变state,reducers是改变state的一些自定义方法
  reducers: {
    handleChangeSelect(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
    handleformVal2 (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
    handleformVal1 (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
    equire(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
    save (state, action) {
      return { ...state, ...action.payload };
    },
  },
  subscriptions: {
    setup ({ dispatch, history }) {  // eslint-disable-line
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
