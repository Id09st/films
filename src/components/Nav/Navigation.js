import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <a className="navbar-brand" href="/">
        PhimMoi
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Trang chủ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/phim-bo">
              Phim bộ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/phim-le">
              Phim lẻ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/the-loai">
              Thể loại
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/quoc-gia">
              Quốc gia
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dang-ky">
              Đăng ký
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dang-nhap">
              Đăng nhập
            </a>
          </li>
        </ul>
        <div style={{ position: "relative" }}>
          <a
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? "Dark" : "Light"} mode
          </a>
        </div>
      </div>
    </nav>
  );
}
