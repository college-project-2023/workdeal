import Link from "next/link";
import { useState } from "react";
import Select from "react-select";

function Banner2() {
  const [selectedOption, setSelectedOption] = useState(null);
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
      backgroundColor: "#5BB543",
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
    <section className="hero-area-two">
      <div className="container-fluid p-0">
        <div className="hero-wrapper two">
          <div className="hero-banner">
            <img src="assets/images/home2/hero-banner.png" alt="" />
          </div>
          <div className="hero-content">
            <span>Wellcome Our Service Sale</span>
            <h1>Restless Services into the Convenience</h1>
            <p>
              Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metus.
              answerala and Suspendisse potenti. Nullam ac lorem ex. Ut feugiat
              maximus ante, vel gravida exel volutpat at. Aliquam viverra
              sagittis felis sed consectetur.
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
                    placeholder="Select"
                    instanceId="my-unique-id"
                  />
                </div>
                <div className="location-form">
                  <form action="#" method="post">
                    <input
                      type="text"
                      name="location"
                      placeholder="Find Your Services Here"
                    />
                    <button type="submit">
                      <i className="bi bi-search" />
                    </button>
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
        </div>
      </div>
    </section>
  );
}

export default Banner2;
