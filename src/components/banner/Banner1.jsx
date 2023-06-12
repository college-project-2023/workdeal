import Link from "next/link";
import { useState,useContext } from "react";
import Select from "react-select";
import axios from "axios";
import Cookies from "universal-cookie";
const allowedInputs = ["Saloon", "Cook", "Cleaning","Ac repair","Spa & beauty"];

function Banner1(props) {
  //const { setParam1} = useContext(DataContext);
  const cookies = new Cookies();
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);  
  const [selectedOption, setSelectedOption] = useState("");
  function handleSelectChange(event) {
    setSelectedOption(event);
  }
  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);
    setSuggestions(getMatchingSuggestions(value));
  };
  cookies.set('mycookie',selectedOption);
  cookies.set('mycookie2',inputValue);
  const options = [
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "vadodara", label: "Vadodara" },
    { value: "Rajkot", label: "Rajkot" },
    { value: "Surat", label: "Surat" },
    { value: "Anand", label: "Anand" },
    { value: "Jamnagar", label: "Jamnagar" },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    if (allowedInputs.includes(inputValue)) {
      console.log('Valid input:', inputValue);
    } else {
      console.log('Invalid input:', inputValue);
    }
  };
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };
  const getMatchingSuggestions = (value) => {
    return allowedInputs.filter(input =>
      input.toLowerCase().includes(value)
    );
  };


  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 16,
      width: "100%",
      minWidth: "180px",
      marginTop: "-5px",
      paddingLeft: 25,
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#5bb543",
      minHeight: 55,
      outline: "none",
      borderRadius: 10,
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#fff",
      fontWeight: "400",
      fontSize: 20,
    }),
    container: (provided) => ({
      ...provided,
      width: 180,
      // paddingLeft: 55,
      // marginTop: -12,
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 20,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: 20,
      color: "white",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#fff",
    }),
  };
  return (
    <section className="hero-area">
      <div className="container-fluid">
        <div className="hero-wrapper">
          <div
            className="hero-content wow animate fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <span>Wellcome Our Service Sale</span>
            <h1> With Workdeal, work smarter, not harder!</h1>
            <p>
            Client satisfaction is a top precedence forus.We go over and beyond to give excellent service and products.
            Our good labor force, professional station and cooperation are essential rudiments in delivering good services.
            </p>
            <div className="find-service">
              <div className="location-search">
                <div className="location-btn">
                  <i>
                    <img src="assets/images/icons/location.svg" alt="" />
                  </i>
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,

                      padding: 0,
                      colors: {
                        ...theme.colors,

                        primary: "#444",
                      },
                    })}
                    styles={customStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    width="250px"
                    menuColor="#333"
                    defaultValue={selectedOption}
                    options={options}
                    onChange={handleSelectChange}
                    placeholder="Select"
                    instanceId="my-unique-id"
                  />
                </div>
                <div className="location-form">
                  <form method="post" onSubmit={handleSubmit}>
                    <input 
                      type="text"
                      name="location"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="Find Your Services Here"
                      style={{
                        padding: '8px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                      }}
                    />
                    <button  type="submit" >
                    <Link legacyBehavior href="/service ">
                      <i className="bi bi-search" />
                   </Link>
                    </button>
                    {suggestions.length > 0 && (
                    <ul className="suggestions"
                    style={{
                      listStyleType: 'none',
                      padding: '0',
                      margin: '4px 0',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      backgroundColor: 'white',
                      position: 'absolute',
                    }}>
                      {suggestions.map((suggestion, index) => (
                      <li key={index} onClick={() => handleSuggestionClick(suggestion)} 
                      style={{
                        padding: '8px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#81d866';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'white';
                      }}>
                        {suggestion}
                        </li>
                        ))}
                        </ul>
                        )}
                  </form>
                </div>
              </div>
              <div className="suggest">
                <span>Suggest For You:</span>
                <ul className="suggest-list">
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>Beauty &amp; Salon</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>Shifting</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>AC Repair</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>WallPainting</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="hero-banner wow animate fadeInRight"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <img
              src="assets/images/home-1/hero-section-right-img.png"
              alt=""
              className="banner"
            />
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#category">
          Scroll Down
          <span>
            <i className="bi bi-arrow-right" />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Banner1;
