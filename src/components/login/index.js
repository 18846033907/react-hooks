import React, { useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import fetchLogin from '../../utils/fetchLogin';
import AppContext from '../../index';
const styles=theme=>({
    main:{
        dispaly:'block',
        width:'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            margin: 'auto',
    },
},
    paper: {
       marginTop: theme.spacing.unit * 8,
       display:'flex',
       flexDirection: 'column',
       alignItems: 'center',
       padding:`${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`
    },
    form:{
        width:'100%',
        marginTop:theme.spacing.unit,
    },
    avater:{
        margin:theme.spacing.unit,
        backgroundColor:'#8e24aa',
    },
    submit:{
        cloor:'#000',
        marginTop:theme.spacing.unit,
    },
    margin: {
        margin: theme.spacing.unit*3,
    },
    textField: {
        flexBasis: 200,
    },
});
const Login = (props)=>{
    const [username,setUsername]=useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const context = useContext(AppContext);
    const { transition, logState } = context;
    const { classes } = props;
    const handleSubmit=()=>{
        transition('loading');
        fetchLogin(username, password)
            .then(result => {
                transition(result);
                props.history.push('/Inbox');
            })
            .catch(error => {
                transition(error);
            });  
    }
    
    return (
        <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Avatar className={classes.avater}>
                    <LockIcon/>
                </Avatar>
                <Typography>
                    Sign in
                </Typography>
                <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                <InputLabel >UserName</InputLabel>
                <Input
                    id="adornment-username"
                    value={username}
                            onChange={(e) => setUsername(e.target.value)}
                />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                <InputLabel >Password</InputLabel>
                <Input
                    id="adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="Toggle password visibility"
                        onClick={()=>setShowPassword(!showPassword)}
                        >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                    <Button
                    fullWidth
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    onClick={handleSubmit}>
                    {logState==='logout'?'Sign In':'loading'}
                    </Button>
                </form>
            </Paper>
        </main>
    )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withRouter)(Login);