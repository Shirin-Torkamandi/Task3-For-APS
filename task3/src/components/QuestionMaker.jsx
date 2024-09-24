"use client";

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


export default function QuestionMaker() {
  const [selectedTab, setSelectedTab] = React.useState("short-answer");

  const handleChange = (event) => {
    setSelectedTab(event.target.value);
  };

  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "27ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField sx={{ backgroundColor: "#bdbdbd", borderTopLeftRadius: "20px" }} id="filled-basic" label="Question text" variant="filled" color="secondary" />
      </Box>
      
      <Box sx={{ backgroundColor: "purple" }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedTab}
            sx={{ backgroundColor: "#80deea", color: "black" }}
            onChange={handleChange}
          >
            <MenuItem value="short-answer">Short answer</MenuItem>
            <MenuItem value="multiple-choice">Multiple choice</MenuItem>
            <MenuItem value="checkboxes">Checkboxes</MenuItem>
          </Select>
          <FormHelperText sx={{ color: "#80deea" }}>
            Choose the Type of Question
          </FormHelperText>
        </FormControl>
      </Box>

      <Box
        sx={{ width: "100%", typography: "body1", backgroundColor: "#80deea" }}
      >
        {selectedTab === "short-answer" && <p>Short Answer Content</p>}
        {selectedTab === "multiple-choice" && <p>Multiple Choice Content</p>}
        {selectedTab === "checkboxes" && <p>Checkboxes Content</p>}
      </Box>


    <Stack direction="row" spacing={2}>
      <Button variant="outlined" endIcon={<SendIcon />}>
        Create
      </Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Stack>
    </>
  );
}
