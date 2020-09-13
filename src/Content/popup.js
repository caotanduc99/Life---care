import React from 'react';

export default ({ close }) => (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
      </a>
      <div className="content">
        Dat lich thanh cong, vui long kiem tra E-mail
      </div>
    </div>
  );