import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter} from "react-router-dom";
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SideList from './sideList';
import AppContext from '../../index';
import Inbox from '../Inbox';
import Starred from '../Starred';
import SendEmail from '../SendEmail';
import Drafts from '../Drafts';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        paddingLeft: drawerWidth + theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});

function LayOut(props) {
    const { classes } = props;
    const {transition}=useContext(AppContext);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Clipped drawer
                    </Typography>
                    <Button color="inherit" onClick={() => {
                        transition('logout');
                        props.history.push('/')}}>logout</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.grow}>
                    <Drawer
                        variant='permanent'
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        {SideList}
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Route path="/Inbox" component={Inbox} />
                        <Route path="/Starred" component={Starred} />
                        <Route path="/SendEmail" component={SendEmail} />
                        <Route path="/Drafts" component={Drafts} />
                    </main>
                </div>
        </div>
    );
}

LayOut.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles),withRouter)(LayOut);