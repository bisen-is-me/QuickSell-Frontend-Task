import React from "react";
import "./Card.css";
import {
  MdOutlineCancel,
  MdSignalCellularAlt,
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
} from "react-icons/md";
import { BsThreeDots, BsFillExclamationSquareFill, BsCircleFill } from "react-icons/bs";
import { BiSolidCheckCircle } from "react-icons/bi";
import { RiContrastLine } from "react-icons/ri";
import { LuCircle, LuCircleDashed } from "react-icons/lu";

let images = {
  "usr-1":
    "https://images.unsplash.com/photo-1622782262245-bfb660f4ff93?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "usr-2":
    "https://images.unsplash.com/photo-1607081692251-d689f1b9af84?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "usr-3":
    "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "usr-4":
    "https://images.unsplash.com/flagged/photo-1577996693134-e50d294a665f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "usr-5":
    "https://images.unsplash.com/photo-1595502124338-950db27ea1c7?auto=format&fit=crop&q=80&w=1364&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

let Status_Icons = {
  Backlog: <LuCircleDashed style={{ color: "#aaa", fontSize: "18px" }} />,
  Todo: <LuCircle style={{ color: "#aaa", fontSize: "18px" }} />,
  "In progress": <RiContrastLine style={{ color: "#fc2", fontSize: "18px" }} />,
  Done: <BiSolidCheckCircle style={{ color: "#3d3", fontSize: "18px" }} />,
  Canceled: <MdOutlineCancel style={{ color: "red", fontSize: "16px" }} />,
};

let Priority_Icons = {
  0: <BsThreeDots style={{ color: "gray", fontSize: "18px" }} />,
  1: (
    <>
      <MdSignalCellularAlt
        style={{
          color: "lightgray",
          fontSize: "18px",
          position: "absolute",
        }}
      />
      <MdSignalCellularAlt1Bar
        style={{
          color: "gray",
          fontSize: "18px",
          zIndex: "1",
        }}
      />
    </>
  ),
  2: (
    <>
      <MdSignalCellularAlt
        style={{
          color: "lightgray",
          fontSize: "18px",
          position: "absolute",
        }}
      />
      <MdSignalCellularAlt2Bar
        style={{
          color: "gray",
          fontSize: "18px",
          zIndex: "1",
        }}
      />
    </>
  ),
  3: <MdSignalCellularAlt style={{ color: "gray", fontSize: "18px" }} />,
  4: (
    <BsFillExclamationSquareFill
      style={{ color: "orange", fontSize: "18px" }}
    />
  ),
};

const Card = ({
  id,
  title,
  tag,
  userId,
  status,
  priority,
  name,
  is_available,
  GroupBy,
}) => {
  return (
    <div className={`Card__Main `}>
      <div className="Card__Heading">
        <p className="Profile__Name">{id}</p>
        <div className="Profile__Photo">
          <div
            className={`Profile__Available Is_Available__${is_available}`}
          ></div>
          {GroupBy === "user" ? <></> : <img src={images[userId]} alt="" />}
        </div>
      </div>
      <div className="Card__Content">
        {GroupBy === "status" ? (
          <></>
        ) : (
          <div className="Card__Status__Icon">{Status_Icons[status]}</div>
        )}
        <h1 className="Ticket__Title">{title}</h1>
      </div>
      <div className="Card__Footer">
        {GroupBy === "priority" ? (
          <></>
        ) : (
          <div className="Priority__Icon">{Priority_Icons[priority]}</div>
        )}

        <h4 className="Message__Tag">
          <BsCircleFill style={{color:'var(--dark2)',fontSize:'12px', marginTop:'2px', marginRight:'6px'}}/>
          {tag}
          </h4>
      </div>
    </div>
  );
};

export default Card;
