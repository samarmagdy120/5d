import React, { Component, Fragment } from "react";

import "./Floor.css";
import Form from "./Form";
import Tablee from "./Tablee";
import { Table } from "react-bootstrap";

class Floor extends Component {
  state = {
    items: [
      { id: 1, name: "خالد", age: 28 },
      { id: 2, name: "سمر", age: 27 },
    ],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  addItems = (item) => {
    let { items } = this.state;
    items.push(item);
    this.setState({
      items,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addItems(this.state);
    this.setState({
      name: "",
      age: "",
    });
  };
  render() {
    const { items } = this.state;
    const List = items.map((item, id) => {
      return <Tablee details={item} key={id} />;
    });
    return (
      <div>
        <Form
          handleChange={this.handleChange}
          addItems={this.addItems}
          handleSubmit={this.handleSubmit}
        />
        <Table responsive>
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


import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <input
              type="text"
              placeholder="اسم الدور"
              onChange={props.handleChange}
              id="name"
            />
            <br />
            <textarea
              placeholder="الوصف"
              onChange={props.handleChange}
              id="desc"
            ></textarea>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={props.handleChange}
            />
            <label>ذكر</label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={props.handleChange}
            />
            <label>أنثى</label>
            <br />
            <input
              type="radio"
              id="active"
              name="case"
              value="active"
              onChange={props.handleChange}
            />
            <label>ناشط</label>

            <input
              type="radio"
              id="inactive"
              name="case"
              value="inactive"
              onChange={props.handleChange}
            />
            <label>غير ناشط</label>
            <button>السابق</button>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <select id="cars">
              <option value="volvo" onChange={props.handleChange}>
                أختار تردد الظهور
              </option>
              <option value="saab" onChange={props.handleChange}>
                تردد الظهور
              </option>
            </select>
            <input
              type="file"
              accept="image/*"
              name="image-upload"
              id="input"
              onChange={props.handleChange}
            />
            <button>اضافة دور</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;




state={
    value:odin
  }
  
  render{
    const {value} = this.state
  
    return(
      <form>
        <h1>current is : {value}</h1>
        <label>odin</label>
  <input type="radio" value="odin" onChange={this.onChange} checked={value === "odin"}/>
  <label>thor</label>
  <input type="radio" value="thor" onChange={this.onChange} checked={value === "thor"}/>
        </form>
    )
  }

