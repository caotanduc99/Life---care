import React, { StyleHTMLAttributes, Component, StyComponent } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import ReactDOM from "react-dom";
import Content from "../Content/popup";
import Popup from "reactjs-popup";
import Header from './header'
import "../index.css";


const mystyle = {
  backgroundColor: "#2895f1",
};
const mystyles = {
  backgroundColor: "#0071d1",
};
const mystyles1 = {
  backgroundColor: "#0060b1",
};











class Home extends React.Component {


  constructor(props) {
    super(props);
    //Khởi tạo state chứa giá trị của input
    this.state = {
      email: "",
      phone: ""
    };
  }

  changeInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  validationForm() {
    let returnData = {
      error: false,
      msg: ''
    }

    const { email, phone } = this.state
    //Kiểm tra email
    const re = / ^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: 'Không đúng định dạng email'
      }
    }

    if (phone.length < 10 || phone.length > 10) {
      returnData = {
        error: true,
        msg: 'Chưa đúng định dạng số điện thoại'
      }
    }
    return returnData;
  }




  submitForm(e) {
    //Chặn các event mặc định của form
    e.preventDefault()

    //Gọi hàm validationForm() dùng để kiểm tra form
    const validation = this.validationForm()

    //Kiểm tra lỗi của input trong form và hiển thị
    if (validation.error) {
      alert(validation.msg)
    } else {
      alert('Submit form success')
    }
  }





  render() {
    return (
      <div>
        <div
          id="home"
          class="parallax first-section wow fadeIn"
          data-stellar-background-ratio="0.4"
          style={{ backgroundImage: `url("assets/images/slider-bg.png")` }}>
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="text-contant">

                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="time-table" class="time-table-section">
          <div class="container">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="row">
                <div class="service-time one" style={mystyle}>
                  <span class="info-icon">
                    <i class="fa fa-ambulance" aria-hidden="true"></i>
                  </span>
                  <h3>Chăm sóc tận nơi</h3>
                  <p>
                    Chỉ cần cung cấp địa chỉ và dịch vụ cần có. Điều dưỡng viên
                    sẽ đến chăm sóc ngay với nhu cầu của bạn.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="row">
                <div class="service-time middle" style={mystyles}>
                  <span class="info-icon">
                    <i class="far fa-clock" aria-hidden="true"></i>
                  </span>
                  <h3>Giờ làm việc</h3>
                  <div class="time-table-section">
                    <ul>
                      <li>
                        <span class="left">Thứ hai - Thứ sáu</span>
                        <span class="right">7.00 – 18.00</span>
                      </li>
                      <li>
                        <span class="left">Thứ bảy</span>
                        <span class="right">8.00 – 16.00</span>
                      </li>
                      <li>
                        <span class="left">Chủ nhật</span>
                        <span class="right">8.00 – 16.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="row">
                <div class="service-time three" style={mystyles1}>
                  <span class="info-icon">
                    <i class="far fa-heart" aria-hidden="true"></i>
                  </span>
                  <h3>Tri Ân</h3>
                  <p>
                    Người sử dụng sẽ được ưu đãi nhiều chương trình khuyến mãi
                    hấp dẫn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="service" class="services wow fadeIn">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                <div class="inner-services">
                  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div class="serv">
                      <span class="icon-service">
                        <img src="./assets/images/service-icon1.png" alt="#" />
                      </span>
                      <h4>Nghiêng cứu</h4>
                      <p>
                        Nghiêng cứu cách tiếp cận và hiểu được bệnh nhân cách
                        tốt nhất.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div class="serv">
                      <span class="icon-service">
                        <img src="./assets/images/service-icon2.png" alt="#" />
                      </span>
                      <h4>Chăm sóc từ xa</h4>
                      <p>
                        Chăm sóc bệnh nhan 24/7, phụ vụ tốt nhất cho bệnh nhân.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div class="serv">
                      <span class="icon-service">
                        <img src="./assets/images/service-icon3.png" alt="#" />
                      </span>
                      <h4>Tư liệu rõ ràng</h4>
                      <p>
                        Tất cả chi phí đều minh bạch, bệnh nhân có thể kiểm tra.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div class="serv">
                      <span class="icon-service">
                        <img src="./assets/images/service-icon4.png" alt="#" />
                      </span>
                      <h4>Quy trình kín</h4>
                      <p>
                        Kiểm tra tổng quan trước khi bắt đầu thực hiện nghiệp
                        vụ.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div class="serv">
                      <span class="icon-service">
                        <img src="./assets/images/service-icon5.png" alt="#" />
                      </span>
                      <h4>Kiến thức dược vượt trội</h4>
                      <p>
                        Đội ngũ điều dưỡng viên được trnag bị kiến thức chuyên
                        môn về các loại thuốc.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div class="serv">
                      <span class="icon-service">
                        <img src="./assets/images/service-icon6.png" alt="#" />
                      </span>
                      <h4>Tính thẩm mỹ</h4>
                      <p>
                        Mỗi hành động đều chú trọng đến chất lượng và sự hài
                        lòng của khách hàng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="appointment-form">
                  <h3>
                    <span>+</span> Đặt lịch
                  </h3>
                  <div class="form">
                    <form onSubmit={e => { this.submitForm(e); }}>
                      <fieldset>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <input
                                type="text"
                                id="name"
                                placeholder="Họ tên"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <input
                                type="text"
                                className="email"
                                name="email"
                                placeholder="Email"
                                id="email"
                                onChange={e => this.changeInputValue(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <input
                                className="phone"
                                type="text"
                                name="phone"
                                placeholder="Số điện thoại"
                                id="phone"
                                onChange={e => this.changeInputValue(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <select
                                class="custom-select"
                                placeholder="Dịch vụ"
                                type="text"
                                id="dich"
                              >
                                <option value="" disabled selected>
                                  Chọn dịch vụ
                                </option>
                                <option value="1">Cắt chỉ thẩm mỹ</option>
                                <option value="2">Chạy khí dung</option>
                                <option value="3">Khâu 1 vết thương</option>
                                <option value="4">Đặt ống truyền</option>
                                <option value="5">Đặt sond dạ dày</option>
                                <option value="6">Đặt sond tiểu</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <select
                                class="custom-select"
                                placeholder="Tỉnh/Thành phố"
                                type="text"
                                id="dich"
                              >
                                <option value="" disabled selected>
                                  Chọn tỉnh\thành phố
                                </option>
                                <option value="1">Bình Dương</option>
                                <option value="2">Bình Thạnh</option>
                                <option value="3">Dĩ An</option>
                                <option value="4">Thuận An</option>
                                <option value="5">Tân Bình</option>
                                <option value="6">Quận 12</option>
                                <option value="7">Quận 11</option>
                                <option value="8">Quận 10</option>
                                <option value="9">Quận 9</option>
                                <option value="10">Quận 8</option>
                                <option value="11">Quận 7</option>
                                <option value="12">Quận 6</option>
                                <option value="13">Quận 5</option>
                                <option value="14">Quận 4</option>
                                <option value="15">Quận 3</option>
                                <option value="16">Quận 1</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <input
                                class="form-control"
                                type="date"
                                placeholder="Ngày bắt đầu"
                                defaultValue="2020-01-01"
                                id="day"
                              />
                            </div>
                            <div class="form-group pmd-textfield pmd-textfield-floating-label">
                              <input
                                class="form-control"
                                type="time"
                                placeholder="Thời gian"
                                onfocus="(this.type='time')"
                                onblur="(this.type='text')"
                                defaultValue="07:30"
                                id="time"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <textarea
                                rows="4"
                                id="address"
                                class="form-control"
                                placeholder="Địa chỉ"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <textarea
                                rows="4"
                                id="note"
                                class="form-control"
                                placeholder="Ghi chú"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <textarea
                                rows="1"
                                id="note"
                                class="form-control"
                                placeholder="Giá Tiền"
                                readOnly
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                                Dat lich
                              </button>

                              <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                  </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-primary">Understood</button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
