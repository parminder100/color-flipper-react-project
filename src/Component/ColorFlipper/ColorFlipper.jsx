import { useState } from "react";
import "../ColorFlipper/ColorFlipper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"

const ColorFlipper = () =>{
    const [bgColor, setBgColor] = useState('grey');
    const handleColorChange = () =>{
        const color = ['red', 'yellow', 'blue', 'orange'];
        const randomColor = Math.floor(Math.random() * color.length);
        const selectedColor = color[randomColor];
        setBgColor(selectedColor);
    }
    return(
        <>
            <main className="bg-main" style={{backgroundColor: bgColor}}>
                <section className="bg-section">
                    <div className="color-flipper-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="bg-container">
                                        <div className="bg-label">
                                            Background color : <span className="color-value">{bgColor}</span>
                                        </div>
                                        <button className="bg-change-btn" onClick={handleColorChange}>Click Me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default ColorFlipper;