import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="footer">
        <div className="overlay">
          <div className="container">
            <h4>أتصل بنا</h4>
            <p>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص
            </p>

            <form>
              <input type="text" />
              <br />
              <input type="email" />
              <br />
              <textarea></textarea>
              <br />
              <button>ارسال</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer2">
        <ul className="list-unstyled text-center list1">
          <li>
            <FaInstagram />
          </li>
          <li>
            <AiOutlineTwitter />
          </li>

          <li>
            <FaFacebookF />
          </li>
        </ul>
        <ul className="text-center list2">
          <li>الرئيسية</li>
          <li>عن بوكاست</li>
          <li>قسم المواهب</li>
          <li>المنتجون</li>
          <li>المؤلفون</li>
          <li>فريق العمل</li>
          <li>المواهب</li>
          <li>أتصرل بنا </li>
        </ul>
        <hr />
        <span className="text-center">جميع الحقوق محفوظة</span>
      </div>
    </div>
  );
};

export default Footer;
