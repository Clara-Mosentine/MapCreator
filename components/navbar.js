// Updated code for Navbar.js
import React from 'react';
import './navbarformat.css';
import { Text } from 'react-native-web';
import {StyleSheet} from 'react-native';
import {Link} from "react-router-dom";

function navbar() {
  return (
    <div className='navigation-menu'>
      <ol>
        <li><Link to={"/"}><Text style={styles.labelText}>Home</Text></Link></li>
        <li><Link to={"/login"}><Text style = {styles.labelText}>Login</Text></Link></li>
        <li><Link to={"/texture-library"}><Text style={styles.labelText}>Textures</Text></Link></li>
        <li><Link to={"/asset-library"}><Text style={styles.labelText}>Assets</Text></Link></li>
        <li><Link to={"/mapCreation"}><Text style={styles.labelText}>Map Creation</Text></Link></li>
      </ol>
    </div>
  )
};

export default navbar;


const styles = StyleSheet.create({

	labelText:{
		textAlign: 'center',
    color: 'lightyellow',
    fontSize: 20,
    fontWeight: 'bold',
	},

  container:{
    margin: 10
  }

});