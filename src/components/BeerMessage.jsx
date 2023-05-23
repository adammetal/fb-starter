import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Paper,
  Select,
  TextField,
  Typography,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

const types = [
  {
    name: "IPA",
    description: "India Pale Ale",
  },
  {
    name: "Stout",
    description: "Strong, dark beer",
  },
  {
    name: "Pilsner",
    description: "Pale lager with a crisp taste",
  },
  {
    name: "Wheat Beer",
    description: "Beer made from wheat malt",
  },
  {
    name: "Porter",
    description: "Dark beer with a rich, roasted flavor",
  },
  {
    name: "Amber Ale",
    description: "Medium-bodied, amber-colored beer",
  },
  {
    name: "Saison",
    description: "Belgian farmhouse ale",
  },
  {
    name: "Brown Ale",
    description: "Malty, caramel-flavored beer",
  },
  {
    name: "Hefeweizen",
    description: "German wheat beer with banana and clove flavors",
  },
  {
    name: "Belgian Tripel",
    description: "Strong, golden ale with complex flavors",
  },
  {
    name: "Lager",
    description: "Bottom-fermented beer with a clean, crisp taste",
  },
  {
    name: "Sour Ale",
    description: "Tart and acidic beer style",
  },
  {
    name: "Pale Ale",
    description: "Hop-forward beer with a pale color",
  },
  {
    name: "Gose",
    description: "Salty and sour German beer style",
  },
  {
    name: "Scotch Ale",
    description: "Sweet and malty Scottish beer",
  },
];

function BeerMessage(props) {
  const [beer, setBeer] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation?
    if (beer.length > 0 && type.length > 0 && message.length > 0) {
      props.onSend({ beer, type, message });
      setBeer("");
      setType("");
      setMessage("");
    }
  };

  /**
   *
   * @param {function} setter
   * State setter function that accept a string
   *
   * @returns {function}
   * The concrete event handler to wire into input.
   */
  const changeHandler = (setter) => {
    return (event) => {
      setter(event.target.value);
    };
  };

  return (
    <Paper elevation={5} sx={{ padding: ".5rem" }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        <Typography variant="h2">Add new beer message!</Typography>
        <div>
          <TextField
            value={beer}
            onChange={changeHandler(setBeer)}
            fullWidth={true}
            id="beer"
            label="Name of the beer you drank"
            variant="outlined"
          />
        </div>

        <div>
          <TextField
            id="message"
            label="Was it good?"
            fullWidth
            multiline
            value={message}
            onChange={changeHandler(setMessage)}
          />
        </div>

        <div>
          <FormControl fullWidth>
            <InputLabel id="type-label">Type of a beer you drank</InputLabel>
            <Select
              id="type"
              value={type}
              labelId="type-label"
              onChange={changeHandler(setType)}
              label="type of a beer you drank"
            >
              <MenuItem value="">Select a beer type</MenuItem>
              {types.map((type) => (
                <MenuItem key={type.name} value={type.name}>
                  {type.name} - {type.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <Button type="submit" variant="contained">
            Send
          </Button>
        </div>
      </Box>
    </Paper>
  );
}

export default BeerMessage;
