import logo from './logo.svg';
import './App.css';
import InputSection from './Components/InputSection';
import DisplayDate from './Components/DisplayDate';
import React,{useEffect,useState} from 'react';
import { useQuery } from 'react-query';
function App() {
 const { isLoading, error, data,refetch } = useQuery('e', () =>fetch('http://localhost:5000/dates').then(res =>
   res.json()
 )
)
if(isLoading){
  return <p>Loading... </p>
}



  return (
    <div>
     <InputSection refetch={refetch}></InputSection>
     <DisplayDate x={data}></DisplayDate>
    </div>
  );
}

export default App;
