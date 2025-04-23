import '../App.css';
import {StyleSheet, View} from 'react-native';
//import {useDispatch} from 'react';
import { editItem } from '../utility/DatabaseHelper';
import { useLocation } from 'react-router';
import { Link } from 'react-router';
import { useState } from 'react';

const EditTexture = (props) => {
  const { state } = useLocation();
  const { id, name, url, height, width} = state;

  const [newurl, seturl] = useState(url);
  const [newname, setName] = useState(name);
  const [newheight, setHeight] = useState(height);
  const [newwidth, setWidth] = useState(width);

  return(
      <View style = {styles.bg}>
      <h2 style = {styles.inputText}>Enter a new texture URL:</h2>
      <div>
      <input style = {styles.inputStyle}
        defaultValue={url}
        onChange={e => seturl(e.target.value)}
        />
      <h2 style = {styles.inputText}>Texture name:</h2>
      <input style = {styles.inputStyle}
        defaultValue={name}
        onChange={e => setName(e.target.value)}
        />
      </div>
      <h3 style = {styles.inputText}>Texture Height x Texture Width:</h3>
      <span>
        <input style = {styles.inputStyle2}
          defaultValue={height}
          onChange={e => setHeight(e.target.value)}
          />
        <input style = {styles.inputStyle2}
          defaultValue={width}
          onChange={e => setWidth(e.target.value)}
          />
      </span>
      <div>
        <button style= {styles.button} onClick={() => {
          editItem(id, {url: newurl, name:newname, height:newheight, width:newwidth});
        }}
        >Confirm Edits</button>
      </div>

      <div>
        <Link to={"/texture-library"}>
        <button style= {styles.button}>
          Return to Library
        </button>
        </Link>
      </div>

    </View>
  )

};
export default EditTexture;




const styles = StyleSheet.create({
  // overall container
    bg : {
      textAlign: 'center',
      color : 'lightyellow',
      fontSize: 20,
      justifyContent: 'center',

    },
    inputText:{
      margin: 0,
      marginTop: 10
    },
  
  // text formatting
    urlStyle : {
      textAlign: 'center',
      color : 'lightslategray',
      fontSize: 12
    },
    textureInfo : {
      textAlign: 'center',
      color : 'lightyellow',
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
      justifyContent: 'center',

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