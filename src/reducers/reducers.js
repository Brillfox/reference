const intialState = {
  data1: null,
  data2: null,
  data3: null,
  error: '',
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FetchData1':
      return { ...state, data1: action.data }

    case 'FetchData2':
      return { ...state, data2: action.data }

    case 'FetchData3':
      return { ...state, data3: action.data }

    default:
      return state
  }
}

export default reducer
