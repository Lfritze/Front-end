  
import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './employeeCard';
import { Route } from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ chara, setChara ] = useState([])

  // Useeffect / axios
  useEffect(() => {
   const Hook = () => {
   axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(e =>{
      setChara(e.data.results)
    })
    }
    Hook()
  }, []);

  return (
    <>
      {chara.map(data => 
      <CharacterCard  key={data.name} data={data} />
      )}
    </>
  );
}