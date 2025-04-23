import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import {StyleSheet} from 'react-native';
import Navbar from '../components/navbar';
import '../App.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }

    return(
        <>
            <main >        
              <Navbar/>
                <section>
                    <div>                                            
                        <h1 style={styles.text}> Log in to start your map creation! </h1> 
                        <form style = {styles.bg}>
                            <div>
                                <div htmlFor="email-address"  style={styles.subtext}>
                                    Email
                                </div>
                                <input style = {styles.inputStyle}
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <div htmlFor="password"  style={styles.subtext}>
                                    Password
                                </div>
                                <input style = {styles.inputStyle}
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <button style = {styles.button}                                   
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>

                        <p className="text-sm text-white text-center" style = {styles.bg}>
                            Want to curate your own texture library? {' '}
                            <NavLink to="/signup" style = {styles.bg}>
                                Sign up here
                            </NavLink>
                        </p>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Login;

const styles = StyleSheet.create({

  bg : {
    textAlign: 'center',
    color : 'lightyellow',
    fontSize: 20,
    marginTop: 40
    },

  text : {
    textAlign: 'center',
    color : 'lightyellow',
    fontSize: 30,
    },
  subtext:{
    textAlign: 'center',
    color : 'lightyellow',
    fontSize: 20,
    marginTop:30
  },

    inputStyle : {
        borderWidth: 1,
        borderRadius: 5,
    marginTop: 5,
    marginRight: 5,
        width: '20%',
        height: 40,
    fontSize: 20,
    color: 'darkslategrey',
        textAlign: 'center',
        backgroundColor: 'lightyellow',
    },

    labelText:{
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 5,
    },

  button:{
        textAlign: 'center',
        marginTop: 10,
    width: '15%',
    height: 40,
    backgroundColor: 'lightslategray',
    color: 'lightyellow',
    fontSize: 20,
    borderWidth: 1,
        borderRadius: 5,
    },

  buttonDel:{
        textAlign: 'center',
        marginBottom: 25,
    width: '15%',
    backgroundColor: 'lightslategray',
    color: 'lightyellow',
    fontSize: 20
    }


});