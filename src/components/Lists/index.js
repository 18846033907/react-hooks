import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
const styles=theme=>({
    demo:{}
})

const Lists = (props) => {
    const [lists,setListsState]=useState([]);
    useEffect(()=>{
        let listsLoad=[];
        fetch('http://localhost:3003/news', {method: 'get',})
            .then(response => response.json())
            .then(result=>{
                result.map(item => listsLoad.push(item.title));
                setListsState(listsLoad);
            })
            .catch(error=>{
            console.log(error)
            })
        }, [])
    const {classes}=props;
    return (
        <div>
            <div className={classes.demo}>
                <List dense={true}>
                {lists.map((item,index)=>{
                            return <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        })               
                       }
                </List>
            </div>
        </div>
    )
}

Lists.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Lists);