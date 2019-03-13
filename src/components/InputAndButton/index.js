import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles=theme=>({
    textField:{},
    button: {
        margin: theme.spacing.unit,
    },
})
const InputAndButton = (props) => {
    const {classes}=props;
    return (
        <div>
            <TextField
                id="standard-bare"
                className={classes.textField}
                margin="normal"
            />
            <Button variant="contained" color="primary" className={classes.button}>搜索</Button>
        </div>
    )
}
InputAndButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAndButton);