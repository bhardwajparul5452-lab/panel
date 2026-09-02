import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const menu = [
    ["Dashboard", "/", "▦"], ["Products", "/products", "◇"],
    ["Orders", "/orders", "🛒"], ["Customers", "/customers", "♧"],
    ["Inventory", "#", "▤"], ["Payments", "#", "▭"], ["Analytics", "#", "▥"],
    ["Offers & Coupons", "#", "◇"], ["Reviews", "#", "☆"],
    ["Notifications", "#", "♧"], ["Support", "#", "◉"], ["Settings", "#", "⚙"],
  ];

  return (
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark">⌂</span><span><b>Balaji Enterprises</b><small>Vendor Panel</small></span></div>

      <ul>
        {menu.map(([name, path, icon]) => (
          <li
            key={name}
            className={pathname === path ? "active" : ""}
          >
            <Link to={path}><span className="menu-icon">{icon}</span><span>{name}</span></Link>
          </li>
        ))}
      </ul>

      <button className="logout"><span>↪</span> Logout</button>
    </aside>
  );
}

