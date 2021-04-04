import axios from 'axios'

export const fetchData1 = () => {
  return (dispatch) => {
    return axios
      .get('https://qa.insee.com/mds/contracts/account/0110000039')
      .then((response) => {
        // console.log(response)
        // setProducts(response.data.data)
        dispatch({ type: 'FetchData1', data: response.data })
      })
      .catch((error) => {
        console.log(error)
        // setError({errorMsg: 'error in retrieving data'})
        dispatch({ type: 'ERROR', msg: 'Unable to fetch data' })
      })
  }
}

export const fetchData2 = () => {
  return (dispatch) => {
    return axios
      .get('https://qa.insee.com/mds/ship-to/customer/0110000039')
      .then((response) => {
        // console.log(response)
        // setProducts(response.data.data)
        dispatch({ type: 'FetchData2', data: response.data })
      })
      .catch((error) => {
        console.log(error)
        // setError({errorMsg: 'error in retrieving data'})
        dispatch({ type: 'ERROR', msg: 'Unable to fetch data' })
      })
  }
}

export const fetchData3 = () => {
  return (dispatch) => {
    return axios
      .get('https://qa.insee.com/mds/plant/country/TH')
      .then((response) => {
        // console.log(response)
        // setProducts(response.data.data)
        dispatch({ type: 'FetchData3', data: response.data })
      })
      .catch((error) => {
        console.log(error)
        // setError({errorMsg: 'error in retrieving data'})
        dispatch({ type: 'ERROR', msg: 'Unable to fetch data' })
      })
  }
}
