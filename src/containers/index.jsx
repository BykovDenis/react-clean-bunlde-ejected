import React, {Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HighCharts from '../components/highcharts';
import AirlinesList from './airlines-list';
import * as actionCreators from '../redux/actions';
import CustomData from './custom-data';

export class AirlinesDesk extends React.Component {
  render() {
    const { props } = this;
    return (
      <Fragment>
        <CustomData
          customData={props.customData.customInputData}
          changeCustomInputValue={props.changeCustomInputValue}
        />
        <HighCharts />
        <AirlinesList
          airlinesData={props.airlines.airlinesData}
          isLoadingAirlines={props.airlines.isLoadingAirlines}
          errorLoadingAirlines={props.airlines.errorLoadingAirlines}
          textError={props.airlines.textError}
          getAirlinesFromAPI={props.getAirlinesFromAPI}
        />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    airlines: state.airlines,
    customData: state.customData,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AirlinesDesk);