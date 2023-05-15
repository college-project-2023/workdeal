import React, { useState } from "react";
import Select from "react-select";

function ServiceFilter() {
  const [selectedOption, setSelectedOption] = useState(null);
  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }
  const options = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Barisal", label: "Barisal" },
    { value: "Khulna", label: "Khulna" },
    { value: "Rangpur", label: "Rangpur" },
    { value: "Sylhet", label: "Sylhet" },
    { value: "Rajshahi", label: "Rajshahi" },
  ];
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
      backgroundColor: "transparent",
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
      width: 250,
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 10,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: 30,
      color: "white",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#fff",
    }),
  };
  return (
    <div
      className="service-selection wow animate fadeInUp"
      data-wow-delay="1800ms"
      data-wow-duration="1500ms"
    >
      <form action="#" method="post">
        <div className="row">
          <div className="col-lg-3">
            <div className="service-loc-selection">
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
                placeholder="Select"
                instanceId="my-unique-id"
              />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="service-multi-slection">
              <select
                className="srv-select"
                style={{ padding: "10px 20px", border: "1px solid #ddd" }}
              >
                <option value="sda">Select Category</option>
                <option value="Saloon">Saloon</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Ac repair">Ac repair</option>
                <option value="Spa & beauty">Spa &amp; beauty</option>
              </select>
              <select
                className="srv-select"
                style={{ padding: "10px 20px", border: "1px solid #ddd" }}
              >
                <option value="sda">Price Reange</option>
                <option value="500-1000">500-1000</option>
                <option value="1000-2000">1000-2000</option>
                <option value="2000-5000">2000-5000</option>
              </select>
              <select
                className="srv-select"
                style={{ padding: "10px 20px", border: "1px solid #ddd" }}
              >
                <option value="sda">Rating</option>
                <option value="3.5 Star">3.5 Star</option>
                <option value="4.5 Star">4.5 Star</option>
                <option value="5 Star">5 Star</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServiceFilter;
