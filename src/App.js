
import React,{ useState } from 'react';
import PersonalData from './components/PersonalData';
import classes from './App.module.css';
import Footer from './components/Footer';

function App() {
  const [data,setData]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null);
  async function fetchDataHandler(){
    setIsLoading(true);
    setError(null);
    try{
      const response= await fetch('https://randomuser.me/api/');
     
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const data= await response.json();
      console.log(data);
         const fetchedData=data.results.map(mydata=>{
           return{
             gender:mydata.gender,
             title:mydata.name.title,
             fname:mydata.name.first,
             lname:mydata.name.last,
             country:mydata.location.country,
             email:mydata.email,
             phone:mydata.phone,
             picture:mydata.picture
           };
         });
      setData(fetchedData);  
      setIsLoading(false); 
    }catch(error){
      setError(error.message);
     
    }
    setIsLoading(false);
  }
  return (
    <React.Fragment>
      <section  >
        <button className={classes.btn} onClick={fetchDataHandler}>Fetch Data</button>
      </section>
      <section className={classes.container}>
        {!isLoading &&  data.length >0 && <PersonalData data={data[0]} />}
        {!isLoading && data.length===0 && <p>Click on the Fetch Button.</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
      <Footer/>
    </React.Fragment>
  );
}

export default App;