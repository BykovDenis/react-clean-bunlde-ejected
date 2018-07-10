// source https://aviation-edge.com/developers/
import getDataFromAPI from './get-data-from-api';
import renderDataConsole from './render-data-console';
const urlToGetFlighttracker = 'http://aviation-edge.com/api/public/flights';
const urlToGetAirports = 'https://aviation-edge.com/api/public/airportDatabase';
const urlToGetAirplanes = 'https://aviation-edge.com/api/public/airplaneDatabase';
const urlToGetAirlines = 'https://aviation-edge.com/api/public/airlineDatabase';
const urlGetGetFlightTracker = 'http://aviation-edge.com/api/public/flights';

const iatoSheremetyevo = 'SVO';

const apiKey = '1a07cf-289657-d17e71-900c62-955c8f';

export function getAirplanes() {
  const url = `${urlToGetAirplanes}?key=${apiKey}`;
  getDataFromAPI(url, renderDataConsole);
}

export function getAirlinesFromRussia() {
  const countryCode = 'RU';
  const url = `${urlToGetAirlines}?key=${apiKey}&codeIso2Country=${countryCode}`;
  getDataFromAPI(url, renderDataConsole);
}

export function getAirports() {
  const url = `${urlToGetAirports}?key=${apiKey}`;
  getDataFromAPI(url, renderDataConsole);
}

export function getFlightArrival() {
  const url = `${urlGetGetFlightTracker}?key=${apiKey}&arrival=${iatoSheremetyevo}`;
  getDataFromAPI(url, renderDataConsole);
}

export function getFlightDeparture() {
  const url = `${urlGetGetFlightTracker}?key=${apiKey}&departure=${iatoSheremetyevo}`;
  getDataFromAPI(url, renderDataConsole);
}

/*
  Страна: Россия (Russian Federation)
  ISO код страны: RU
  Город: Москва (Moscow)
  Название аэропорта: Шереметьево (Sheremetyevo)
  Код IATA: SVO
  Код ICAO (ИКАО): UUEE
  Часовой пояс: +3.0 GMT
  Высота над уровнем моря: 190 метров
  Длина взлётно-посадочной полосы: 3700 метров
*/
