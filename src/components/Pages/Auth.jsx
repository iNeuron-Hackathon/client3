import React, {useState, useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { indigo } from '@mui/material/colors';
import { Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const [signUp, toggleSignUp] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('SUBMITTED');
        if(signUp){
            if(name && email && password){
                console.log('Sign UP', name, email, password);
                axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, {name, email, password})
                    .then(resp => {
                        const result = resp.data

                        // if(result.success) console.log();
                        if(result.success){
                            navigate('/order/confirm')
                        }
                    } )

            }
        }
        else{
            console.log('LOGIN');
            console.log(email, password);
            if(email && password){
                console.log('Sign UP',  email, password);
                axios.post('${process.env.REACT_APP_SERVER_URL}/login', { email, password})
                    .then(resp => {
                        const result = resp.data
                        // console.log(result);
                        // if(result.success) console.log();
                        if(result.success){
                            navigate('/order/confirm')
                        }
            
                    } )
                    .catch(err=>{
                        alert('Invalid email or password')
                    })
            }
        }
    }
    return (
    <Container component="main" maxWidth="xs">
              <Paper elevation={3} sx={{bgcolor:'white', px:3, pb:2}}>
                <CssBaseline />
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    {signUp ? 'signUp' : 'signIn'}
                    </Typography>

                    <Box component="form"  noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                        {signUp ? 
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label='name'
                                name="name"
                                autoComplete="name"
                                value={name}
                                onChange={e=>setName(e.target.value)}
                            />
                        : null}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label='email'
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label='password'
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 , bgcolor:indigo[900], '&:hover': {bgcolor:indigo[700]}}}
                    >
                        {signUp ? 'signUp' : 'signIn'}
                    </Button>
                    <Grid container>
                        {signUp ? 
                          <Grid item xs>
                            <Button size='small' onClick={(e)=> toggleSignUp(false)} >
                                Already account ? Sign IN
                            </Button>
                        </Grid>
                          : 
                          <>
                            <Grid item xs>
                                <Button size='small' onClick={(e)=> console.log('Forgot pass')} >
                                    forgotPaswd
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button size='small' onClick={(e)=> toggleSignUp(true)} >
                                    Sign Up
                                </Button>
                            </Grid>
                          </>
                          
                          }
                    </Grid>
                    </Box>
                </Box>

              </Paper>
            </Container>
  )
}

export default Auth