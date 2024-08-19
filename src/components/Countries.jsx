import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
let BASE_URL = `https://restcountries.com/v2/all`;

const Countries = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const ref = useRef(null);

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setData(res.data);
      setFilteredData(res.data);
    });
  }, []);

  function handleInputChange() {
    const filteredItems = data.filter((el) =>
      el.name.toLowerCase().includes(ref.current.value.toLowerCase())
    );
    setFilteredData(filteredItems);
  }
  function selectChange(e) {
    let filterCountries = data.filter((element) => {
      return element.region
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    setFilteredData(filterCountries);
  }
  return (
    <div className="countries">
      <div className="container">
        <div className="search-select">
          <div className="search-input">
            <input
              className="search"
              type="text"
              ref={ref}
              onChange={handleInputChange}
              placeholder="Search for a country..."
            />
          </div>
          <select onChange={selectChange} name="" id="select">
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="cards">
          <div className="row mt-5">
            {filteredData.map((el) => {
              return (
                <div
                  key={el.numericCode}
                  className="col  mt-3 col-sm-6 col-md-4 col-lg-3"
                >
                  <div className="card p-2">
                    <a href="#">
                      <img
                        height="180px"
                        width="100%"
                        src={el.flags.svg}
                        alt=""
                      />
                    </a>
                    <div className="card-body">
                      <h4 className="card-title">{el.name}</h4>
                      <p className="card-text m-0">
                        <b>Population:{el.population}</b>
                      </p>
                      <p className="card-text m-0">
                        <b>Region:{el.region}</b>
                      </p>
                      <p className="card-text m-0">
                        <b>Capital:{el.capital}</b>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
