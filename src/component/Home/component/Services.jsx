import React from "react";
// import { Link } from "react-router-dom";

import image1 from "./../../../assets/image/computer_white.gif";
import black1 from "./../../../assets/image/computer_black.gif";
import image3 from "./../../../assets/image/D_white.gif";
import black3 from "./../../../assets/image/D_black.gif";
import image2 from "./../../../assets/image/mission_white.gif";
import black2 from "./../../../assets/image/mission_black.gif";
import image4 from "./../../../assets/image/inquire_white.gif";
import black4 from "./../../../assets/image/inquire_black.gif";

// export default function Services() {
//   // const [image, setImage] = useState(<img src={image1} alt="" onMouseLeave={handleMouseEnter} id="anim" className="img1" />)
//   const [value, setValue] = useState();
//   // function handleMouseLeave() {
//   //   setImage(image);
//   //   console.log("ok")
//   // }
//   const handleMouseEnter = () => {
//     Services();
//     // window.location.reload();
//     // this.onLoad(setImage);
//   }

//   return (
//     <>
//     <div className="container mb-5">
//       <div className="d-flex justify-content-evenly services">

//           <div  className="box card mx-2 bxcd">
//             <img src={black1} alt="" className="img2" />
//             <img src={`./image/computer_white.gif?${Date.now()}`} alt="" onMouseLeave={handleMouseEnter} id="anim" className="img1" />
//           </div>

//           <div  className="box card mx-2 bxcd">
//             <img src={black3} alt="" className="img2" />
//             <img src={image3} alt="" className="img1" />
//           </div>

//           <div  className="box card mx-2 bxcd">
//             <img src={black2} alt="" className="img2" />
//             <img src={image2} alt="" className="img1" />
//           </div>

//           <div  className="box card mx-2 bxcd">
//             <img src={black2} alt="" className="img2"/>
//             <img src={image123} alt="" className="img1" />
//           </div>

//       </div>
//     </div>
//     </>
//   );
// }
class loadRefreshContent extends React.Component {

  // use for refresh gif image in services
  refresh = () => {
    this.setState({});
  };

  render() {
    return (
      <div className="container mb-5">
        <div className="d-flex justify-content-evenly services">
          <div className="box card mx-2 bxcd" onMouseEnter={this.refresh}>
            <img src={black1} alt="" className="img2" />
            <img src={`${image1}?${Date.now()}`} alt=""  className="img1" />
          </div>
          <div className="box card mx-2 bxcd" onMouseEnter={this.refresh}>
            <img src={black3} alt="" className="img2" />
            <img src={`${image3}?${Date.now()}`}  alt="" className="img1" />
          </div>
          <div className="box card mx-2 bxcd" onMouseEnter={this.refresh}>
            <img src={black2} alt="" className="img2" />
            <img src={`${image2}?${Date.now()}`}  alt="" className="img1" />
          </div>
          <div className="box card mx-2 bxcd" onMouseEnter={this.refresh}>
            <img src={black4} alt="" className="img2" />
            <img src={`${image4}?${Date.now()}`} alt="" className="img1" />
          </div>
        </div>
      </div>
    );
  }
}

export default loadRefreshContent;
