// #1 pinball

export const fetchMachines = async function () {
  const resp = await fetch(`https://ponball.herokuapp.com/api/v1/machines`);
  const machineData = await resp.json();
  console.log('machineData', machineData);
  return machineData;
};

export const fetchMachinesThen = () => {
  const resp = fetch(`https://ponball.herokuapp.com/api/v1/machines`)
    .then((data) => data.json())
    .then((machineThenData) => {
      console.log('machineThenData', machineThenData);
    });
  return resp;
};

// #2

export const fetchCharacters = async () => {
  const resp = await fetch(`https://www.breakingbadapi.com/api/characters`);
  const charactarData = await resp.json();
  console.log('charactarData', charactarData);
  return charactarData;
};

export const fetchCharactersThen = () => {
  const resp = fetch(`https://www.breakingbadapi.com/api/characters`)
    .then((data) => data.json())
    .then((charactersThenData) => {
      console.log('charactersThenData', charactersThenData);
    });
  return resp;
};

// #3

export const fetchRickMorty = async () => {
  const resp = fetch(`https://rickandmortyapi.com/api/episode`);
  const episodeData = await (await resp).json();
  console.log('episodeData.results', episodeData);
  return episodeData;
};

export const fetchRickMortyThen = () => {
  const resp = fetch(`https://rickandmortyapi.com/api/episode`)
    .then((data) => data.json())
    .then((episodeThenData) => {
      console.log('episodeThenData', episodeThenData);
    });
  return resp;
};
