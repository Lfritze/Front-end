  
import React, { useEffect, useState } from "react";
import axios from 'axios';
import EmployeeCard from './employeeCard';
import {render} from 'react-dom'

export default function EmployeeList() {
  // TODO: Add useState to track data from useEffect
  const [ emp, setEmp ] = useState([])

  // Useeffect / axios
  useEffect(() => {
   const Hook = () => {
   axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(e =>{
      setEmp(e.data.results)
    })
    }
    Hook()
  }, []);

  return (
    <>
      {emp.map(data => 
      <EmployeeCard  key={data.name} data={data} />
      )}
    </>
  );
}

render(<EmployeeList />, document.getElementById('root'))
