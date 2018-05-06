import React, { Component } from 'react'
import { connect } from 'react-redux'
import SWList from '../components/SWList'
import AppHeader from '../components/AppHeader'
import { getData, switchSWAPIType } from '../actions/swapi'

import '../styles/App.css'
import '../styles/sw.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

class SWContainer extends Component {

  componentDidMount() {
    this.props.getData(this.props.swlist_type)
    AOS.init({
      duration : 2000
    })
  }

  render() {
    console.log("mainprops", this.props)
    return (
      <div className="App">
        <AppHeader/>
        { this.props.isLoading === true ? (
          <div className="loading">
            <i className="fa fa-spinner fa-spin fa-4x"></i>
            <span>fetching data...</span>
          </div>
        ) : (
          <SWList items={this.props.swlist} type={this.props.swlist_type} selectHandler={this.props.switchSWAPIType}/>
        )}
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  swlist: state.swlist,
  swlist_type: state.swlist_type
})

const mapDispatchToProps = (dispatch) => ({
  getData: (dataType) => dispatch(getData(dataType)),
  switchSWAPIType: (el) => dispatch(switchSWAPIType(el.target.value))
})

// export default SWContainer
export default connect(mapStateToProps, mapDispatchToProps)(SWContainer)