import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAndButton from '../InputAndButton';
import Lists from '../Lists';
const styles = theme => ({

})
const Inbox =(props)=>{
    const {classes}=props;
    return(
        <div>
            <InputAndButton/>
            <Lists/>
        </div>
    )
}
Inbox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inbox);