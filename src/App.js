import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const initialColors = [
  "#c5beba",
  "#363432",
  "#363432",
  "#be503e",
  "#7bb292",
  "#d7ae38",
  "#628b97",
  "#c7a095",
  "#88a2a4",
  "#837d7a",
  "#645d59",
  "#f0a4af",
  "#9ad1bc",
  "#c4c18b",
  "#bad4f5",
  "#e7c6be",
  "#a8c1c5",
  "#c5beba"
]

function App() {

  const [colors, setColors] = useState(initialColors);

  return (
    <div className="App">
      <Container sx={{marginTop: 5}} maxWidth="md">
        <Paper sx={{padding: 10}} elevation={10}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{marginBottom: 3}}>
                Enter a list of hexadecimal colors to display them in batch.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Hex Colors"
                variant="outlined"
                sx={{width: "100%"}}
                rows={10}
                multiline
                value={colors.join("\n")}
                onChange={(e) => setColors(e.target.value.split("\n"))}
              />
            </Grid>
            <Grid item xs={12}>
              <List>
                {colors.map((color, index) => (
                  <Box key={index}>
                    <ListItem>
                      <ListItemText primaryTypographyProps={{fontFamily: "Roboto Mono"}} primary={color} />
                      <Box
                        sx={{ width: 550, height: 50, backgroundColor: color }}
                      />
                    </ListItem>
                    {index < colors.length-2 && <Divider />}
                  </Box>
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
