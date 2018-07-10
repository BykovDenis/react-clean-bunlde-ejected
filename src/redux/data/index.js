const initialState = {
  airlines: {
    filenames: {
      airlines: 'airlines-from-aviation-edge-russia.json',
    },
    isLoadingAirlines: false,
    errorLoadingAirlines: false,
    textError: '',
    airlinesData: [],
  },
  customData: {
    customInputData: 'once',
  }
};

export default initialState;