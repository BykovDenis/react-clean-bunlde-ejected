import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import imgLoading from '../img/img-loading.gif';
import columns from './columns-config';

class AilinesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.props.getAirlinesFromAPI();
  }
  render() {
    const { props } = this;
    const { airlinesData } = this.props;
    const reactTable = (<ReactTable
      data={airlinesData}
      columns={columns}
    />);

    const loader = (<img src={imgLoading} width="40" height="40" alt="loading" />);
    const error = (<div style={{ color: 'red' }}>{props.textError}</div>);
    return (
      <div>
        {(airlinesData.length && reactTable) ||
          (props.isLoadingAirlines && loader) ||
          (props.errorLoadingAirlines && error)
        }
      </div>
    );
  }
}

AilinesList.defaultProps = {
  airlinesData: [],
  getAirlinesFromAPI: () => {},
  isLoadingAirlines: false,
  errorLoadingAirlines: false,
  textError: ''
};

AilinesList.propTypes = {
  airlinesData: PropTypes.array.isRequired,
  getAirlinesFromAPI: PropTypes.func.isRequired,
  isLoadingAirlines: PropTypes.bool.isRequired,
  errorLoadingAirlines: PropTypes.bool.isRequired,
  textError: PropTypes.string.isRequired
};

export default AilinesList;