import React from "react";
import "./button.css";

const Button = ({type , content}) => {
  const ButtonType = () => {
    switch (type) {
      case "primary":
        return "primaryBtn";
      case "secondary":
        return "secondaryBtn";
      case "success":
        return "successBtn";
      default:
        return "PrimaryBtn";
    }
  };
  const ButtonVal = ButtonType(type);
  return (
    <>  
      <button className={`btn ${ButtonVal}`}>{content}</button>
    </>
  );
};

// const Button = ({content,type,width}) =>{

// const ButtonType = ()=> {
//         switch (type) {
//           case "primary":
//             return "primaryBtn";
//           case "secondary":
//             return "secondaryBtn";
//           case "success":
//             return "successBtn";
//           default:
//             return "";
//         }
//       }

//       function ButtonWidth() {
//         switch (width) {
//           case "full":
//             return "BtnFull";
//           default:
//             return "";
//         }
//       }
//       const BtnType=ButtonType(type);
//       const btnWidth = ButtonWidth(width);
//     return(
//         <button className={` ${BtnType} ${btnWidth}`}>{content}</button>
//     );
// }
export default Button;
