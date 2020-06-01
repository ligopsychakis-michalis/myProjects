import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//     radio: { color: '#6495ed' }
// }); 

const useStyles = makeStyles({
    radio: {
      '&$checked': {
        color: '#6495ed'
      }
    },
    checked: {}
  })



function SearchBar(props){
    const classes = useStyles();

    return (
        <form onSubmit={props.handleSearchSubmit} style={{margin: '30px 5%'}}>
            <TextField value={props.searchInput} onChange={props.handleSearchChange} id="standard-basic" label="Search" />
            <RadioGroup onChange={props.setFilter1} row defaultValue="all">
                <FormControlLabel value="all" control={<Radio classes={{root: classes.radio, checked: classes.checked}} />} label="All"/>
                <FormControlLabel value="title" control={<Radio classes={{root: classes.radio, checked: classes.checked}} />} label="Title"/>
                <FormControlLabel value="author" control={<Radio classes={{root: classes.radio, checked: classes.checked}} />} label="Author"/>
            </RadioGroup>
            <RadioGroup onChange={props.setFilter2} row defaultValue="relative">
                <FormControlLabel value="relative" control={<Radio classes={{root: classes.radio, checked: classes.checked}} />} label="Relative"/>
                <FormControlLabel value="newest" control={<Radio classes={{root: classes.radio, checked: classes.checked}} />} label="Newest"/>
            </RadioGroup>
            <RadioGroup onChange={props.setFilter3} row defaultValue="all-books">
                <FormControlLabel value="all-books" control={<Radio classes={{root: classes.radio, checked: classes.checked}} />} label="All Books"/>
                <FormControlLabel value="free-ebooks" control={<Radio classes={{root: classes.radio, checked: classes.checked}} />} label="Free e-Books"/>
            </RadioGroup>
        </form>
    );
};

export default SearchBar;