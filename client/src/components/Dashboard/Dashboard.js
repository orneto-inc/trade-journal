import React, { useEffect, useState } from 'react'
import axios from "axios"


const Dashboard = ()=>{
    const API_Key = "HLU3O599QGNE0QOR";
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=NSE:SBIN&apikey=${API_Key}`;
    const [apiData, setApiData] = useState(null);


    useEffect(()=>{
        axios.get(url).then((response)=>{
            console.log(response.data);
            // setApiData(response.data);
        })

    },[])
    if(!apiData) return null;
    return(
        <>



        </>
    )
} 
export default Dashboard;

// Alpha Vantage API key = HLU3O599QGNE0QOR 
// var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&HLU3O599QGNE0QOR=demo';