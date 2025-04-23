import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import Navbar from '../components/navbar.js';
import {StyleSheet} from 'react-native';

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
      e.preventDefault()

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });


    }

  return (
    <main>        
        <Navbar/>
        <section>
            <div>
                <div>                  
                    <h1 style={styles.text}> Sign Up Today! </h1>                                                                            
                    <form>                                                                                            
                        <div style = {styles.bg}>
                            <div htmlFor="email-address" style={styles.subtext}>
                                Email
                            </div>
                            <input style = {styles.inputStyle}
                                type="email"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email"                                
                            />
                        </div>

                        <div style = {styles.bg}>
                            <div htmlFor="password">
                                Password
                            </div>
                            <input style = {styles.inputStyle}
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        <div style = {styles.bg}>
                        <button style={styles.button}
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button></div>

                    </form>

                    <p  style = {styles.bg}>
                        Already have an account? Log in here!{' '}
                        <NavLink to="/login" style={styles.bg}>
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  );
};

export default Signup;

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