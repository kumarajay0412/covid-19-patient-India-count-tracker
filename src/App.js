import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/image.png';

class App extends React.Component {
  state={
    data:{}
  }
  state={
    data1:{}
  }
    async componentDidMount() {

      const fetchedData =await fetchData();
      //const datee= fetchedData["data"]["lastOriginUpdate"]
      
      this.setState({data: fetchedData});  
    
    }

  render() {
    const{ data}=this.state;    
    return (
      <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
      
        <CountryPicker data={data}/>
        <Chart/> 
      </div>
    );
  }
}

export default App;