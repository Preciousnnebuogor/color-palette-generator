import { useState } from "react";
import { FaCopy } from "react-icons/fa6";
export default function Home() {
  const [color, setColor] = useState([]);
  const [copy, setCopy] = useState();

  function generateColors() {
    const newColor = [];
    for (let i = 0; i < 5; i++) {
      const randomColors =
        "#" + Math.floor(Math.random() * 16777215)
          .toString(16).padStart(6, "0");
          newColor.push(randomColors)
    }
    setColor(newColor);
  }

//   function handleCopy(newColor) {
//     navigator.clipboard.writeText(newColor);
//     setCopy(newColor);
//   }

function copyToClipboard(color) {
  navigator.clipboard.writeText(color); // copies color code to clipboard
  setCopy(color); // update state to show feedback
  setTimeout(() => setCopy(null), 1000); // reset after 1 sec
}
  

  return (
    <div className="container">
      <div className="content">
        <p className="con-p">Color Palette Generator</p>

        <button onClick={generateColors}>Generate Palette</button>

        <div className="colors">
          {color.map((color, index) => (
            <div className="eachcolor" key={index}>
              <div
                style={{
                  backgroundColor: color,
                  width: "100px",
                  height: "100px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              ></div>
              <div className="paramIcon">
                {/* <p className="param">{color}</p> */}
                
                <FaCopy
                  onClick={() => copyToClipboard(color)}
                  style={{
                    cursor: "pointer",
                    fontWeight: copy === color ? "bold" : "normal",
                    color: copy === color ? "green" : "#333",
                  }}
                  size={"15px"}
                />
                {copy === color ? "Copied!" : color}
                
              </div>
            </div>
          ))}
        </div>

        {/* <div className="colors">
          <div className="eachcolor">
            <div className="color1"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div>

          <div className="eachcolor">
            <div className="color2"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div>

          <div className="eachcolor">
            <div className="color3"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div>

          <div className="eachcolor">
            <div className="color4"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div>

          <div className="eachcolor">
            <div className="color5"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div> */}

        {/* <div className="eachcolor">
            <div className="color6"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div> 

          <div className="eachcolor">
            <div className="color7"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div> 

          <div className="eachcolor">
            <div className="color8"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div> 

          <div className="eachcolor">
            <div className="color9"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div> 

          <div className="eachcolor">
            <div className="color10"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div> 
          
          
          */}

        {/* 
           
            <div className="color12">hello</div>
            <div className="color13">hello</div>
            <div className="color14">hello</div> */}
      </div>
    </div>
  );
}
