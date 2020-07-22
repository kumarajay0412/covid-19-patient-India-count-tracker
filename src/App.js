import React from 'react';
import { Cards,Cards2, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData();

    this.setState({ data, country: data["data"]["regional"][country] });
  }

  render() {
    const { data, country } = this.state;
    

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
  
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Cards2 data={country}/>
        <Chart data= {country} /> 
      </div>
    );
  }
}

export default App;