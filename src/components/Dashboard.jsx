import React from "react";
import Card from "./Card";
import "./Dashboard.css";
import { MdAdd, MdOutlineCancel } from "react-icons/md";
import { BiSolidCheckCircle, BiDotsHorizontalRounded } from "react-icons/bi";

import "./Card.css";
import {
  MdSignalCellularAlt,
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
} from "react-icons/md";
import { BsThreeDots, BsFillExclamationSquareFill } from "react-icons/bs";
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
  Done: <BiSolidCheckCircle style={{ color: "#75f", fontSize: "18px" }} />,
  Canceled: <MdOutlineCancel style={{ color: "gray", fontSize: "16px" }} />,
};

let Priority_Icons = {
  0: <BsThreeDots style={{ color: "var(--dark3)", fontSize: "18px" }} />,
  1: (
    <>
      <MdSignalCellularAlt
        style={{
          color: "var(--dark2)",
          fontSize: "18px",
          // position: "absolute",
          zIndex: "-1",
        }}
      />
      <MdSignalCellularAlt1Bar
        style={{
          color: "var(--dark3)",
          fontSize: "18px",
          position: "absolute",
          transform: "translate(-18px,0)",
          zIndex: "1",
        }}
      />
    </>
  ),
  2: (
    <>
      <MdSignalCellularAlt
        style={{
          color: "var(--dark2)",
          fontSize: "18px",
          // position: "absolute",
          zIndex: "-1",
        }}
      />
      <MdSignalCellularAlt2Bar
        style={{
          color: "var(--dark3)",
          fontSize: "18px",
          position: "absolute",
          transform: "translate(-18px,0)",
          zIndex: "1",
        }}
      />
    </>
  ),
  3: (
    <MdSignalCellularAlt style={{ color: "var(--dark3)", fontSize: "18px" }} />
  ),
  4: (
    <BsFillExclamationSquareFill
      style={{ color: "orange", fontSize: "18px" }}
    />
  ),
};

let allGroups = {
  priority: [0, 4, 3, 2, 1],
  status: ["Backlog", "Todo", "In progress", "Done", "Canceled"],
  user: ["usr-1", "usr-2", "usr-3", "usr-4", "usr-5"],
};

let keys = {
  priority: "priority",
  status: "status",
  user: "userId",
};

function CustomeOrderByProperty(property) {
  return function (a, b) {
    if (property === "priority") {
      if (a[property] < b[property]) return 1;
      else if (a[property] > b[property]) return -1;
      return 0;
    } else {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
      return 0;
    }
  };
}

const Dashboard = ({ data, GroupBy, OrderBy }) => {
  const getUserName = (userId) => {
    const user = data.users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  const getAvailabilityStatus = (userId) => {
    const user = data.users.find((user) => user.id === userId);
    return user.available;
  };

  const getPriorityName = (priority) => {
    if (priority === 0) return "no priority";
    if (priority === 1) return "low";
    if (priority === 2) return "medium";
    if (priority === 3) return "high";
    if (priority === 4) return "urgent";
  };

  if (data.tickets) {
    data.tickets.sort(CustomeOrderByProperty(OrderBy));
  }


  return (
    <div className="Main__Body__Content">
      {data.tickets &&
        allGroups[GroupBy].map((Curr__Group) => (
          <div className="Verticle__Columns">
            <div className="Verticle__Column__Header">
              <div className="Header__Left">
                <div>
                  {GroupBy === "user" ? (
                    <div className="Profile__Photo">
                      <div
                        className={`Profile__Available Is_Available__${getAvailabilityStatus(
                          Curr__Group
                        )}`}
                      ></div>
                      <img src={images[Curr__Group]} alt="" />
                    </div>
                  ) : GroupBy === "priority" ? (
                    <div style={{ marginTop: "7px" }}>
                      {Priority_Icons[Curr__Group]}
                    </div>
                  ) : (
                    <div style={{ marginTop: "7px" }}>
                      {Status_Icons[Curr__Group]}
                    </div>
                  )}
                </div>
                <div>
                  {GroupBy === "user"
                    ? getUserName(Curr__Group)
                    : GroupBy === "priority"
                    ? getPriorityName(Curr__Group)
                    : Curr__Group}
                </div>
                <div>
                  {
                    data.tickets.filter(
                      (ticket) => ticket[keys[GroupBy]] === Curr__Group
                    ).length
                  }
                </div>
              </div>
              {data.tickets.filter(
                (ticket) => ticket[keys[GroupBy]] === Curr__Group
              ).length === 0 ? (
                <></>
              ) : (
                <div className="Header__Right">
                  <MdAdd />
                  <BiDotsHorizontalRounded />
                </div>
              )}
            </div>
            <div className="Column__Cards">
              {data.tickets.map(
                (ticket) =>
                  ticket[keys[GroupBy]] === Curr__Group && (
                    <Card
                      id={ticket.id}
                      title={ticket.title}
                      tag={ticket.tag}
                      status={ticket.status}
                      userId={ticket.userId}
                      priority={ticket.priority}
                      name={getUserName(ticket.userId)}
                      is_available={getAvailabilityStatus(ticket.userId)}
                      GroupBy={GroupBy}
                    />
                  )
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
