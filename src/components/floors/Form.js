import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="home-section  bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <input
              type="text"
              placeholder="اسم الدور"
              onChange={props.newOnChange}
              name="floorName"
            />
            <br />
            <textarea
              placeholder="الوصف"
              onChange={props.newOnChange}
              name="description"
              rows="4"
            ></textarea>
            <div className="gender">
              <span>النوع</span>
              <input
                type="radio"
                value="ذكر"
                onChange={props.newOnChange}
                checked={props.gender === "ذكر"}
                name="gender"
              />
              <label>ذكر</label>

              <input
                type="radio"
                value="أنثى"
                checked={props.gender === "أنثى"}
                onChange={props.newOnChange}
                name="gender"
              />
              <label>أنثى</label>
            </div>
            <div className="case">
              <span>الحالة</span>
              <input
                type="radio"
                name="caseX"
                value="ناشط"
                checked={props.caseX === "ناشط"}
                onChange={props.newOnChange}
              />
              <label>ناشط</label>

              <input
                type="radio"
                name="caseX"
                value="غير ناشط"
                checked={props.caseX === "غير ناشط"}
                onChange={props.newOnChange}
              />
              <label>غير ناشط</label>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <select name="appear" onChange={props.newOnChange}>
              <option value="تردد الظهور" onChange={props.newOnChange}>
                أختار تردد الظهور
              </option>
              <option
                value="تردد الظهور
"
                onChange={props.newOnChange}
              >
                تردد الظهور
              </option>
            </select>
            <input
              type="file"
              name="attachs"
              onChange={props.handleChangeFile}
            />
          </div>
        </div>
      </div>
      <button className="editDoor">اضافة دور</button>
    </form>
  );
};

export default Form;
