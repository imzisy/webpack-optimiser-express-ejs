import React from "react";
import {connect} from "react-redux";

import { Listing } from "../components/Listing";
import { SideBar } from "../components/SideBar";
// Import Actions
import { setAmount } from "../actions/userActions";
import { setIslamic } from "../actions/userActions";
import { setTenure } from "../actions/userActions";
// var canUseDOM = !!(
//     (typeof window !== 'undefined' &&
//     window.document && window.document.createElement)
//   );
//   console.log('canUseDOM = ',canUseDOM);


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <SideBar handleAmountChange={(e) => this.props.handleAmountChange(e)} 
                         handleIslamicChange={(e) => this.props.handleIslamicChange(e)} 
                         handleTenureChange={(e) => this.props.handleTenureChange(e)} 
                         state={this.props.state}/>
                <Listing tr={this.props.tr.__} products={this.props.state.rates}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
   
  return {
      state:  state
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAmountChange: (value) => {
           dispatch(setAmount(value));
        },
        handleIslamicChange: function(value){
           dispatch(setIslamic(value));
        },
        handleTenureChange: function(value){
            dispatch(setTenure(value));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
