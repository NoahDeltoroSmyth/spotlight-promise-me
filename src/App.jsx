import {
  fetchCharacters,
  fetchCharactersThen,
  fetchMachines,
  fetchMachinesThen,
  fetchRickMorty,
  fetchRickMortyThen,
} from './services/promise-me';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    fetchMachinesThen();
    fetchMachines();
    fetchCharacters();
    fetchCharactersThen();
    fetchRickMorty();
    fetchRickMortyThen();
  });
  return <h1>Hello World</h1>;
}
