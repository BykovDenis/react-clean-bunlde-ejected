const columns = [{
  Header: 'AIRLINEID',
  accessor: 'airlineId',
  Cell: props => parseInt(props.original.airlineId, 10)
},
{
  Header: 'CODEIATAAIRLINE',
  accessor: 'codeIataAirline',
},
{
  Header: 'CODEISO2COUNTRY',
  accessor: 'codeIso2Country',
},
{
  Header: 'NAMEAIRLINE',
  accessor: 'nameAirline',
}
];

export default columns;