import '../App.css';
import React, { useState, useEffect} from 'react';
import {addItem, getItems, deleteItem} from '../utility/DatabaseHelper';
import {StyleSheet, View} from 'react-native';
import Navbar from '../components/navbar.js';
import { useNavigate} from "react-router-dom"; 
import {createContext} from 'react';
export const MyContext = createContext("");

function Library( ) {

  //Get texture info
  const [textures, setTextureList] = useState([]);
  useEffect(()=>{getTextureInfo();},[]);
  const getTextureInfo = async() => { const data = await getItems(); setTextureList(data);}
  const navigate = useNavigate();

  //edit tmp variables
  const [url, seturl] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');  

  return (
    <div classurl="App">
      <Navbar />
      <View style = {styles.bg}>
          {/* NEW ENTRY */}
          <div>
            <h2 style = {styles.inputText}>Enter a new texture URL:</h2>
            <input style = {styles.inputStyle}
              value={url}
              onChange={e => seturl(e.target.value)}
            />
            <h2 style = {styles.inputText}>Texture name:</h2>
            <input style = {styles.inputStyle}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <h3 style = {styles.inputText}>Texture Height x Texture Width:</h3>
          <span>
            <input style = {styles.inputStyle2}
              pattern='[0-9*]'
              type='number'
              value={height}
              onChange={e => setHeight(e.target.value)}
            />
            <input style = {styles.inputStyle2}
              pattern='[0-9*]'
              type='number'
              value={width}
              onChange={e => setWidth(e.target.value)}
            />
          </span>
          <div>
            <button style = {styles.button} onClick={() => {
              if(name && url && height && width){
            addItem({name:name,url:url,height:height,width:width}).then(getTextureInfo());}
            }}>Add Image</button>
          </div>

          {/* FOR EACH IMAGE ENTRY */}
          <div style = {styles.bg}>
            {textures.map(oneTexture => (
              <div >
                {/* NAME, URL, IMAGE */}
                <div style={styles.textureInfo}>
                  <div style = {{fontWeight: 'bold'}}>{oneTexture.name}</div>
                  <div style = {{fontSize: 15}}>Height: {oneTexture.height} x Width: {oneTexture.width}</div>
                </div>
                <div style={styles.urlStyle}>{oneTexture.url}</div>
                <img src={oneTexture.url} width={oneTexture.width} height={oneTexture.height} alt="Invalid URL"/>

                {/* BUTTON TO EDIT */}
                <div>
                  <button style= {styles.button} onClick={() => {
                    navigate('/editTexture',{state:{id:oneTexture.id, name:oneTexture.name, url:oneTexture.url, height:oneTexture.height, width:oneTexture.width}})
                  }}>
                    Edit Texture
                  </button>
                </div>

                {/* BUTTON TO DELETE */}
                <div>
                  <button style = {styles.button} onClick={() => { 
                    deleteItem(oneTexture.id).then(getTextureInfo());}}>
                    Delete this Image
                  </button>
                </div>

              </div>
            ))}
          </div>
        
      </View>
    </div>
  );//}
}


export default Library;


const styles = StyleSheet.create({
// overall container
  bg : {
    textAlign: 'center',
    justifyContent: 'center',

    color : 'lightyellow',
    fontSize: 20
	},
  inputText:{
    margin: 0,
    marginTop: 10
  },

// text formatting
  urlStyle : {
    textAlign: 'center',
    color : 'lightslategray',
    fontSize: 15,
    fontWeight: 'bold'
	},
  textureInfo : {
    textAlign: 'center',
    color : 'lightyellow',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 20
	},

// UI formatting
	inputStyle : {
    // bubble
		borderWidth: 1,
		borderRadius: 5,
		width: '20%',
		height: 40,
		backgroundColor: 'lightyellow',
    // text
    fontSize: 20,
    color: 'darkslategrey',
		textAlign: 'center',
	},
  inputStyle2 : {
    // bubble
		borderWidth: 1,
		borderRadius: 5,
		width: '8%',
    marginRight: 5,
    justifyContent: 'center',
		height: 40,
		backgroundColor: 'lightyellow',
    // text
    fontSize: 20,
    color: 'darkslategrey',
		textAlign: 'center',
	},
  button:{
    //button
    marginTop: 5,
    justifyContent: 'center',
    width: '15%',
    borderWidth: 1,
		borderRadius: 5,
    backgroundColor: 'lightslategray',
    //text
		textAlign: 'center',
    color: 'lightyellow',
    fontSize: 20,

	},

});
