import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Map, GoogleApiWrapper } from "google-maps-react";

import "./DetailsProject.css";

class DetailsProject extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dohhf9d",
        "template_5jhlr96",
        e.target,
        "user_nm7ljmkEZaUTCiUSDYtSR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;

    return (
      <form onSubmit={this.sendEmail} className="bg-white details-project">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h3>اسم المنشاة</h3>
              <input
                type="email"
                placeholder="البريد الالكترونى"
                name="email"
              />
              <div className="text-section">
                <p>
                  {" "}
                  منذ زمن طويل وهي أن المحتوى الخارجي هناك حقيقة مثبتة منذ زمن
                  طويل وهي أن المحتوى الخارجي للنص
                </p>
                <p>
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم منذ زمن
                  طويل وهي أن المحتوى الخارجي
                </p>
              </div>
              <div className="r-date">
                <input type="radio" id="male" value="male" name="date" />
                <label>2-1-2018 | 10:30م</label>
                <br />
                <input type="radio" id="female" value="female" name="date" />
                <label>2-1-2018 | 10:30م</label>
                <br />
                <input type="radio" id="other" value="other" name="date" />
                <label>2-1-2018 | 10:30م</label>
              </div>
              <div className="l-date">
                <input type="radio" id="male" value="male" name="date" />
                <label>2-1-2018 | 10:30م</label>
                <br />
                <input type="radio" id="female" value="female" name="date" />
                <label>2-1-2018 | 10:30م</label>
                <br />
                <input type="radio" id="other" value="other" name="date" />
                <label>2-1-2018 | 10:30م</label>
              </div>
              <br />

              <button>ارسال</button>
            </div>
            <div className="col-lg-4">
              <div className="img-holder">
                <img src={profileImg} alt="" id="img" className="img" />
              </div>
              <input
                type="file"
                accept="image/*"
                name="my_file"
                id="input"
                onChange={this.imageHandler}
              />
              <Map
                google={this.props.google}
                zoom={8}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBQuMW3CGggNMkJUPhpzDKiVzmD6aICpLs",
})(DetailsProject);
