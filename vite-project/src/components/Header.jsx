import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="workspace-bar"><b><span className="spark">●</span> Vendor Hub Pro</b><span className="workspace-pill">◉ Main</span><span className="preview-pill">◉ Preview</span><span className="workspace-title">Homepage⌄</span><button>Share</button><button className="publish">✦ Publish</button></div>
      <div className="header">
        <div className="breadcrumbs"><b>Dashboard</b><span>Home / Dashboard</span></div>
        <div className="right"><label className="search">⌕ <input placeholder="Search products, orders..." /></label><span className="notification">♧<i>3</i></span><span className="help">?</span><span className="avatar">BE</span><div className="profile"><b>Rakesh Balaji</b><p>Vendor</p></div><span>⌄</span></div>
      </div>
    </>
  );
}

