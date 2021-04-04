import React from 'react'
import { Navbar, Nav, DropdownButton } from 'react-bootstrap'
import { fetchData1, fetchData2, fetchData3 } from '../actions/actions'
import { connect } from 'react-redux'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

const MainNav = (props) => {
  // console.log(props)
  const clickHandler1 = () => {
    props.onFetchData1()
  }

  const clickHandler2 = () => {
    props.onFetchData2()
  }

  const clickHandler3 = () => {
    props.onFetchData3()
  }

  const selectHandler = (e) => {
    console.log(e)
    // console.log(props.data1.data[e])
  }

  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>Navbar</Navbar.Brand>
        <Nav className='mr-auto'>
          <DropdownButton
            id='dropdown-basic-button'
            title='Dropdown button'
            onClick={clickHandler1}
            onSelect={selectHandler}
          >
            {props.data1 &&
              props.data1.data.map((item, index) => (
                <DropdownItem key={index} eventKey={index}>
                  <p>{item.contractName}</p>

                  <p>{item.contractType}</p>
                </DropdownItem>
              ))}
          </DropdownButton>

          <DropdownButton
            id='dropdown-basic-button'
            title='Dropdown button'
            onClick={clickHandler2}
          >
            {props.data2 &&
              props.data2.data.map((item) => (
                <DropdownItem key={item.shipToId}>
                  <p>{item.shipToCode}</p>

                  <p>{item.shipToName}</p>
                </DropdownItem>
              ))}
          </DropdownButton>

          <DropdownButton
            id='dropdown-basic-button'
            title='Dropdown button'
            onClick={clickHandler3}
            onSelect={selectHandler}
          >
            {props.data3 &&
              props.data3.data.map((item) => (
                <DropdownItem key={item.plantCode} eventKey={item.plantCode}>
                  <p>{item.plantName}</p>

                  {/* <p>{item.shipToName}</p> */}
                </DropdownItem>
              ))}
          </DropdownButton>
        </Nav>
      </Navbar>
    </div>
  )
}

// export default MainNav

const mapStatetoProps = (state) => {
  return {
    data1: state.data1,
    data2: state.data2,
    data3: state.data3,
    error: state.error,
  }
}

const mapDispatchprops = (dispatch) => {
  return {
    onFetchData1: () => dispatch(fetchData1()),
    onFetchData2: () => dispatch(fetchData2()),
    onFetchData3: () => dispatch(fetchData3()),
  }
}

export default connect(mapStatetoProps, mapDispatchprops)(MainNav)
