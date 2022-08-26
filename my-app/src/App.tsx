/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Icon from "./components/atoms/Icon";
import { AccountCircle, BoyOutlined, GirlOutlined } from "@mui/icons-material";

const StyledTextField = styled(TextField)`
background: white;
& label.Mui-focused {
  color: black;
}
}
`;

function App() {
  const [hide, setHidefalse] = useState(false);
  const [age, setAge] = useState<Number>(0);
  const [genderIcon, setGenderIcon] = useState<Boolean | undefined>();

  const bounds = (age: Number) => {
    if (age > 10 && age <= 18) {
      return (
        <>
          <Icon src={"teen.png"}></Icon>
        </>
      );
    } else if (age > 18 && age < 50) {
      return <Icon src={"adult.png"} />;
    } else if (age > 50) {
      return <Icon src={"old.png"} />;
    }
  };
  useEffect(() => {
    console.log("no array in useeffect");
  }); //didupdate
  //execute on every re-render

  useEffect(() => {
    console.log("empty array in useEffect");
  }, []);
  //execute only once (componentdidmount)
  
  useEffect(() => {
    console.log("re-render on change state");
  }, [genderIcon]);
  //execute on change state

  const gender = [
    {
      label: "Male",
      value: 1,
    },
    {
      label: "Female",
      value: 2,
    },
  ];
  const selectGender = (value: any) => {
    if (value.label === "Male") {
      setGenderIcon(true);
    } else if (value.label === "Female") {
      setGenderIcon(false);
    }
  };

  return (
    <div className="App">
      <h1> user component assignment 1</h1>
      <StyledTextField
        label="Enter Name.."
        onChange={() => {
          setHidefalse(true);
        }}
      />
      <br />
      <br />
      {hide && (
        <>
          <StyledTextField
            type={"number"}
            label="Enter Age.."
            onChange={(e: { target: { value: Number } }) => {
              setAge(e.target.value);
            }}
          />
          <br />
          <br />

          <Box
            sx={{
              display: "flex",
              width: "550px",
              marginLeft: "42.5vw",
              alignItems: "center",
            }}
          >
            {genderIcon ? <BoyOutlined /> : <GirlOutlined />}
            <Autocomplete
              disablePortal
              options={gender}
              onChange={(e, value) => {
                console.log(value);
                selectGender(value);
              }}
              sx={{ width: "230px" }}
              renderInput={(params) => (
                <StyledTextField
                  {...params}
                  label="Select Gender"
                  variant="standard"
                />
              )}
            />
          </Box>
          {bounds(age)}
        </>
      )}
    </div>
  );
}

export default App;
