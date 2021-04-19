import React, { Component } from "react";

import "./Floor.css";
import Form from "./Form";
import Tablee from "./Tablee";
import { Table } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

class Floor extends Component {
  state = {
    items: [
      {
        id: 1,
        floorName: "خالد",
        description: "الوصف",
        gender: "ذكر",
        caseX: "ناشط",
        appear: "تردد الظهور",
        attachs: "المرفقات",
      },
    ],
    data: {
      floorName: "",
      description: "",
      gender: "",
      caseX: "",
      appear: "",
      attachs: "",
    },
  };

  /*
  handleChange = (e) => {
    this.setState((prev) => ({ ...prev, items: [{ value: e.target.value }] }));
  };
*/
  /*handleChangeFile = (e) =>
    this.setState((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        attachs: e.target.files[0],
      },
    }));
*/

  handleChangeFile = (e) => {
    this.setState((prev) => ({
      ...prev,
      data: { ...prev.data, attachs: e.target.files[0].name },
    }));
  };
  newOnChange = (e) => {
    this.setState((prev) => ({
      ...prev,
      data: { ...prev.data, [e.target.name]: e.target.value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      ...prev,
      items: [...prev.items, this.state.data],
    }));
  };

  handleDelete = (id) => {
    let { items } = this.state;
    items.splice(id, 1);
    this.setState({
      items,
    });
  };
  renderOldForm = () => {
    return (
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="file" />
        &times; <MdEdit />
      </form>
    );
  };
  renderNewForm = () => {
    return (
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="file" />
        <button>تعديل</button>
      </form>
    );
  };

  render() {
    const { prevTab } = this.props;

    const { items } = this.state;
    const { gender, caseX } = this.state.data;

    const List = items.map((item, id) => {
      return (
        <Tablee details={item} key={id} handleDelete={this.handleDelete} />
      );
    });
    return (
      <div className="floor">
        <Form
          newOnChange={this.newOnChange}
          handleSubmit={this.handleSubmit}
          gender={gender}
          caseX={caseX}
          handleChangeFile={this.handleChangeFile}
        />
        <div className="home-section">
          <span className="font">
            <AiFillStar />
          </span>
          <h2>لائحة الشخصيات</h2>
        </div>
        <Table responsive className="home-section  bg-white">
          <thead>
            <tr>
              <th>الدور</th>
              <th>الحالة</th>
              <th>تردد الظهور</th>
              <th>الوصف</th>
              <th>المرفقات</th>
              <th>الفعل</th>
            </tr>
          </thead>
          <tbody>{List}</tbody>
        </Table>
      </div>
    );
  }
}

export default Floor;
