const TSCode = '9860a';
const APIKey = 'e6371f771bbb004a756a03dae1e1c4a3629b63cf';
const URL = 'https://api.wego.com/flights/api/k/2/searches/';
const options = {
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
};


function getDataFromAPI() {
  const url = `${URL}?api_key=${APIKey}&ts_code=${TSCode}`;
  fetch(url, options)
    .then(response => response.json)
    .then(res => console.log(res));
}

export default getDataFromAPI;