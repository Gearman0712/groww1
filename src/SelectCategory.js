import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectCategory() {
  const classes = useStyles();
  const [category, setCategory] = React.useState('MUMBAI');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">SelectCategory</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        > 
        <MenuItem value='IFSC'>IFSC</MenuItem>
          <MenuItem value='branch'>branch</MenuItem>
          <MenuItem value='bank_name'>bank_name</MenuItem>
          <MenuItem value='bank_id'>bank_id</MenuItem>
         
          
        </Select>
      </FormControl>
 </div>
  )
};

