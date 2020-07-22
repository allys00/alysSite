import React from "react";
import MePicture from "../../assets/images/me.jpeg";
import './MyPhoto.scss';

interface IProps {
  style: any;
}

const MyPhoto = ({ style }: IProps) => (
  <img className="my-photo" src={MePicture} alt="andre alys" style={style} />
);

export default MyPhoto;
