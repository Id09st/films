import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">PhimMoi</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Trang chủ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/phim-bo">Phim bộ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/phim-le">Phim lẻ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/the-loai">Thể loại</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/quoc-gia">Quốc gia</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dang-ky">Đăng ký</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dang-nhap">Đăng nhập</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
