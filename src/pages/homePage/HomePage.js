import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import DetailsProject from "../../components/detailsproject/DetailsProject";
import Floor from "../../components/floors/Floor";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="home-section">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="تعين مدير المشروع"></Tab>
            <Tab eventKey="profile" title="تفاصيل المشروع">
              <DetailsProject />
            </Tab>
            <Tab eventKey="floor" title="الادوار">
              <Floor />
            </Tab>
            <Tab eventKey="contact" title="ردود الكاستينج">
              gdfggg
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default HomePage;
