import { FaCopy } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <p className="con-p">Color Palette Generator</p>
        <button>Generate Palette</button>
        <div className="colors">
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
          </div>

          {/* <div className="eachcolor">
            <div className="color6"></div>
            <div className="paramIcon">
              <p className="param">#800080</p>
              <FaCopy size={"15px"} />
            </div>
          </div> */}

          
          {/* 
            <div className="color7">hello</div>
            <div className="color8">hello</div>
            <div className="color9">hello</div>
            <div className="color10">hello</div>
            <div className="color12">hello</div>
            <div className="color13">hello</div>
            <div className="color14">hello</div> */}
        </div>
      </div>
    </div>
  );
}
