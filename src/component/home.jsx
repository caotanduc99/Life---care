import React, { StyleHTMLAttributes, Component, StyComponent } from 'react';
/* import {Link} from 'react-router-dom' */
import "../index.css";
import "./Modal.css"
import callApi from '../API/callApi';
import swal from 'sweetalert';


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
    super(props)
    //Khởi tạo state chứa giá trị của input
    this.state = {
      Name:'',
      Mail: '',
      Phone: '',
      Service: '',
      Location: '',
      Date: '',
      Time: '',
      Totalday:'',
      Adress: '',
      Note: '',

    }

    this.changetenKhachHangHandler = this.changetenKhachHangHandler.bind(this);
    this.changeemailHandler = this.changeemailHandler.bind(this);
    this.changedienThoaiHandler = this.changedienThoaiHandler.bind(this);
    this.changedichVuHandler = this.changedichVuHandler.bind(this);
    this.changekhuVucHandler = this.changekhuVucHandler.bind(this);
    this.changengayBatDauHandler = this.changengayBatDauHandler.bind(this);
    this.changesoNgayHandler = this.changesoNgayHandler.bind(this);
    this.changegioBatDauHandler = this.changegioBatDauHandler.bind(this);
    this.changediaChiHandler = this.changediaChiHandler.bind(this);
    this.changeghiChuHandler = this.changeghiChuHandler.bind(this);
    this.booksv = this.booksv.bind(this);
    
  }


  booksv = (e) =>{
    e.preventDefault();
    // let users = {
    // tenKhachHang :this.state.tenKhachHang,
    // email: this.state.email,
    // dienThoai:this.state.dienThoai,
    // diaChi:this.state.diaChi
    //           };
    let datlich = {
    tenKhachHang :this.state.tenKhachHang,
    email: this.state.email,
    dienThoai:this.state.dienThoai,
    diaChi:this.state.diaChi,
    //dichVu:this.state.dichVu,
    //khuVuc: this.state.khuVuc,
    ngayBatDau:this.state.ngayBatDau,
    gioBatDau:this.state.gioBatDau,
    soNgay:this.state.soNgay,
    ghiChu:this.state.ghiChu
              };
    // console.log('user => ' + JSON.stringify(users));
    console.log('datlich => ' + JSON.stringify(datlich));
    swal("Đặt lịch thành công!", "Mail xác nhận đã gửi đến bạn!", "success");

    callApi.adduser(datlich).then(res =>{
      this.setState({datlich: res.data.data});
    }).catch(err =>{
      throw err
    });
    // apikh.adduser(users).then(res =>{
    //   this.setState({user:res.data.data})
    // });
    }
  


  changetenKhachHangHandler = (event) =>{
    this.setState({tenKhachHang: event.target.value})
  }
  changeemailHandler = (event) =>{
    this.setState({email: event.target.value})
  }
  changedienThoaiHandler = (event) =>{
    this.setState({dienThoai: event.target.value})
  }
  changedichVuHandler = (event) =>{
    this.setState({dichVu: event.target.value})
  }
  changekhuVucHandler = (event) =>{
    this.setState({khuVuc: event.target.value})
  }
  changengayBatDauHandler = (event) =>{
    this.setState({ngayBatDau: event.target.value})
  }
  changegioBatDauHandler = (event) =>{
    this.setState({gioBatDau: event.target.value})
  }
  changesoNgayHandler = (event) =>{
    this.setState({soNgay: event.target.value})
  }
  changediaChiHandler = (event) =>{
    this.setState({diaChi: event.target.value})
  }
  changeghiChuHandler = (event) =>{
    this.setState({ghiChu: event.target.value})
  }


 /*  componentDidMount(){
    callApi.adduser().then((res)=>{
      this.setState({user: res.data.data});
    });
  } */

  validationForm() {
    let returnData = {
      error: false,
      msg: ''
    }

    const { email, dienThoai } = this.state
    //Kiểm tra email
    const re = / ^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: 'Không đúng định dạng email'
      }
    }

    if (dienThoai.length < 10 || dienThoai.length > 10) {
      returnData = {
        error: true,
        msg: 'Chưa đúng định dạng số điện thoại'
      }
    }
    return returnData;
  };



  render() {
    
    return (
      <div>
        <div
          id="home"
          className=" first-section"
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
          <div className="container">
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
                <div class="service-time" style={mystyles}>
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
                <div class="service-time" style={mystyles1}>
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
        <div id="service" class="services">
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
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="appointment-form">
                  <h3>
                    <span>+</span> Đặt lịch
                  </h3>
                  <div className="form">
                    <form onSubmit={this.onSave}>
                      <fieldset>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <input
                                type="text"
                                id="name"
                                placeholder="Họ tên"
                                name="tenKhachHang"
                                value={this.state.tenKhachHang}
                                onChange={this.changetenKhachHangHandler}
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
                                placeholder="Email"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.changeemailHandler}
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
                                placeholder="Số điện thoại"
                                id="phone"
                                name="dienThoai"
                                value={this.state.dienThoai}
                                onChange={this.changedienThoaiHandler}
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
                                id="dichvu"
                                name="dichVu"
                                value={this.state.dichVu}
                                onChange={this.changedichVuHandler}
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
                                id="location"
                                name="khuVuc"
                                value={this.state.khuVuc}
                                onChange={this.changekhuVucHandler}
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
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="row">
                            <div className="form-group">
                              <input
                                class="form-control"
                                type="date"
                                placeholder="Ngày bắt đầu"
                                defaultValue="2020-01-01"
                                id="day"
                                name="ngayBatDau"
                                value={this.state.ngayBatDau}
                                onChange={this.changengayBatDauHandler}
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
                                name="gioBatDau"
                                value={this.state.gioBatDau}
                                onChange={this.changegioBatDauHandler}
                              />
                            </div>
                          </div>
                        </div>


                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <select
                              
                                className="custom-select fa-scroll "
                                placeholder="Số ngày"
                                
                                type="text"
                                id="totalday"
                                name="soNgay"
                                value={this.state.soNgay}
                                onChange={this.changesoNgayHandler}
                              >
                                <option value="" disabled selected>
                                  Chọn số ngày
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                              </select>
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
                                name="diaChi"
                                value={this.state.diaChi}
                                onChange={this.changediaChiHandler}
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
                                name="ghiChu"
                                value={this.state.ghiChu}
                                onChange={this.changeghiChuHandler}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="row">
                            <div class="form-group">
                              <textarea
                                rows="1"
                                id="price"
                                name="giaTien"
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
                              <button className="btn btn-primary" onClick={this.booksv}>
                                Đặt Lịch
                              </button>
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
