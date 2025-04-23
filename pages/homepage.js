import React from 'react'; // { useState}
import { StyleSheet} from 'react-native'; //  View, Text,
import Navbar from '../components/navbar.js';
import '../App.css';

export default function homepage() {
  return (
    <div>
      <Navbar />
      <header style = {styles.bg}>
        <h1>Welcome to Map Maker!</h1>
        <p><b>Log in / Sign up</b> to edit your own personal library of textures.</p>
        <p><b>Library</b> - This is where map textures are stored, and can be added, altered, or removed.</p>
        <p><b>Map Creation</b> - This is where new tabletop maps can be generated! </p>
      </header>
    </div>  
  );
}



const styles = StyleSheet.create({
  bg : {
    color : 'lightyellow',
    fontSize: 20,
    margin: 15
	},
});