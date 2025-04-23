import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import Navbar from '../components/navbar.js';
import {getItems} from '../utility/DatabaseHelper';
import {getAssets} from '../utility/assetHelper';


export default function MapCreation() {
	// Loading textures
	const [textures, setTextureList] = useState([]);
	useEffect(()=>{getTextureInfo();},[]);
	const getTextureInfo = async() => { 
		const data = await getItems(); 
		setTextureList(data);}
	// Loading assets
	const [assets, setAssets] = useState([]);
	useEffect(()=>{getAssetInfo();},[]);
	const getAssetInfo = async() => { const data = await getAssets(); setAssets(data);}

 
	return (
	<div>
      {/* Nav bar */}
      <Navbar style={styles.container}/>
	  {/* Drawing component */}
      <Drawable/>
	  </div>
	);
}

// DRAWING FUNCTIONALITY
function Drawable(){
	const [mouseLoc, setMouseLoc] = useState({ x: 0, y: 0 });
	const canvasRef = useRef(null);
	const [canvasCTX, setCanvasCTX] = useState(null);
	const [color, setColor] = useState('#000000');
	const [size, setSize] = useState(10);
 
	const [textures, setTextureList] = useState([]);
	useEffect(()=>{getTextureInfo();},[]);
	const getTextureInfo = async() => { 
		const data = await getItems(); 
		// let pat = createPattern(
		// 	<img src={textures.url} width={textures.width} height={textures.height} alt="Invalid URL"/>, repetition);
		setTextureList(data);}


	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight-80;
		setCanvasCTX(ctx);
	}, [canvasRef]);
 
	const SetPos = (e) => {
		setMouseLoc({
			x: e.clientX,
			y: e.clientY-80
		});
	};
 
	const Draw = (e) => {
		if (e.buttons !== 1) return;
		const ctx = canvasCTX;
		ctx.beginPath();
		ctx.moveTo(mouseLoc.x, mouseLoc.y);
		setMouseLoc({
			x: e.clientX,
			y: e.clientY-80
		});
		ctx.lineTo(e.clientX, e.clientY-80);
		ctx.strokeStyle = color;
		ctx.lineWidth = size;
		// Set the line cap to round
		ctx.lineCap = 'round';
		ctx.stroke();
	};
 
	return (
	<div>
      	{/* Canvas - draw-able area */}
		<canvas
			ref={canvasRef}
			onMouseEnter={(e) => SetPos(e)}
			onMouseDown={(e) => SetPos(e)}
			onMouseMove={(e) => Draw(e)}
		></canvas>
 
      	{/* drawing controls */}
		<div
			className="controlpanel"
			style={{
				position: 'absolute',
				top: '10%',
				left: '2%',
				width: '100%'
			}}
		>
        {/* Pen size */}
				<input style={styles.controlContainer}
					type="range"
					value={size}
					max={40}
					onChange={(e) => {
						setSize(e.target.value);
					}}
				/>
        {/* Color select */}
				<input style={styles.controlContainer}
					type="color"
					value={color}
					onChange={(e) => {
						setColor(e.target.value);
					}}
				/>
        {/* clear canvas */}
				<button style={styles.controlContainer}
					onClick={() => {
						const ctx = canvasCTX;
						ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
					}}
				>
					Clear
				</button>
			</div>
		</div>
	);
}


const styles = StyleSheet.create({

labelText:{
	textAlign: 'center',
	color: 'lightyellow',
	fontSize: 20,
	fontWeight: 'bold',
},

controlContainer:{
    marginRight: 5,
    backgroundColor: 'lightyellow',
    borderWidth: 1,
	borderRadius: 5,
},

});