import renderDataConsole from './render-data-console';
import russianAirlines from '../api/airlines-from-aviation-edge-russia';

function getAirlinesFromRussia() {
  renderDataConsole(russianAirlines);
}

export default getAirlinesFromRussia;