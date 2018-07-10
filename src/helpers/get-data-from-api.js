function getDataFromAPI(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(res => resolve(res))
      .catch(e => reject(`${e.name} ${e.message}`));
  });
}

export default getDataFromAPI;