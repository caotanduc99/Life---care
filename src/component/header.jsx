import React, { StyleHTMLAttributes, Component, StyComponent} from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
          <div id="preloader">
      <img class="preloader" src="/assets/images/loaders/heart-loading2.gif" alt=""/>
   </div>
        <header>
          <div class="header-top wow fadeIn">
            <div class="container">
              <a class="navbar-brand" href="index.html">
                <img src="/assets/images/logo.png" alt="image" />
              </a>
              <div class="right-header">
                <div class="header-info">
                  <div class="info-inner">
                    <span class="icontop">
                      <img src="/assets/images/phone-icon.png" alt="#" />
                    </span>
                    <span class="iconcont">
                      <a href="tel:088 613 468">088613468</a>
                    </span>
                  </div>
                  <div class="info-inner">
                    <span class="icontop">
                      <i class="fa fa-envelope" aria-hidden="true" />
                    </span>
                    <span class="iconcont">
                      <a data-scroll href="mailto:hotro@healthcare.com">
                        hotro@healthcare.com
                      </a>
                    </span>
                  </div>
                  <div class="info-inner">
                    <span class="icontop">
                      <i class="far fa-clock" aria-hidden="true"/>
                    </span>
                    <span class="iconcont">
                      <a data-scroll href="#">
                        Daily: 7:00 AM - 18:00 PM
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-bottom wow fadeIn">
            <div class="container">
              <nav class="main-menu">
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                  >
                    <i class="fa fa-bars" aria-hidden="true"></i>
                  </button>
                </div>

                <div id="navbar" class="navbar-collapse collapse">
                  <ul class="nav navbar-nav d-inline col-12">
                    <li>
                      <a class="active" href="home">
                        Trang chủ
                      </a>
                    </li>
                    
                    <li class="nav-item dropdown">
                      <a className="nav-item dropdown" data-scroll href="#service">
                        Dịch vụ
                      </a>
                    </li>


                    <li class="nav-item ml-5 float-right">
                      <Link className="nav-item"  to="/login">
                        Đăng nhập
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
