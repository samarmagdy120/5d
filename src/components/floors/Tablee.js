import React from "react";
import { MdEdit } from "react-icons/md";

const Tablee = (props) => {
  return (
    <tr>
      <td>{props.details.floorName}</td>
      <td>{props.details.caseX}</td>
      <td>{props.details.appear}</td>
      <td>{props.details.description}</td>
      <td>{props.details.attachs}</td>
      <td>
        {" "}
        <span
          onClick={() => {
            props.handleDelete(props.id);
          }}
        >
          &times;
        </span>{" "}
        <MdEdit />
      </td>
    </tr>
  );
};

export default Tablee;
