import "./Dashboard.css";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="page">
      <Header />
      <main className="dashboard-content">
        <div className="welcome"><div><h1>Good Morning, Vendor 👋</h1><p>Here's what's happening with your store today.</p></div><button>This month ⌄</button></div>
        <div className="cards">
          <Metric icon="₹" label="Total Sales" value="₹1,24,560" change="↗ 12.4%" note="Compared to this month last period" tone="purple" />
          <Metric icon="🛒" label="Total Orders" value="1,248" change="↗ 8.1%" note="42 orders placed in last 24 hours" tone="green" />
          <Metric icon="◇" label="Total Products" value="356" change="↗ 2.6%" note="10 products in this catalogue view" tone="purple" />
          <Metric icon="◷" label="Pending Orders" value="24" change="↘ 4.3%" note="3 need action right now" tone="orange" negative />
        </div>
        <div className="dashboard-grid"><section className="panel sales"><div className="panel-head"><div><h3>Sales Overview</h3><p>Revenue trend for the last 7 days</p></div><div className="tabs"><b>7 Days</b><span>30 Days</span><span>3 Months</span><span>1 Year</span></div></div><div className="chart"><div className="y-labels"><span>₹1L</span><span>₹75K</span><span>₹50K</span><span>₹25K</span></div><svg viewBox="0 0 620 230" preserveAspectRatio="none" aria-label="Sales trend"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#7643ed" stopOpacity=".25"/><stop offset="1" stopColor="#7643ed" stopOpacity=".02"/></linearGradient></defs><path className="area" d="M20 170 C80 145 105 145 150 178 S220 180 260 135 S350 103 390 75 S460 35 500 60 S560 110 600 88 L600 230 L20 230Z"/><path className="line" d="M20 170 C80 145 105 145 150 178 S220 180 260 135 S350 103 390 75 S460 35 500 60 S560 110 600 88"/><g className="points"><circle cx="20" cy="170" r="4"/><circle cx="110" cy="150" r="4"/><circle cx="200" cy="178" r="4"/><circle cx="295" cy="120" r="4"/><circle cx="390" cy="75" r="4"/><circle cx="500" cy="60" r="4"/><circle cx="600" cy="88" r="4"/></g></svg><div className="x-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div></section><section className="panel health"><div className="panel-head"><div><h3>Store Health</h3><p>Live snapshot of key operations</p></div></div><div className="health-items"><Health label="Order fulfilment rate" value="92%" color="green"/><Health label="On-time delivery" value="87%" color="purple"/><Health label="Catalogue completeness" value="74%" color="orange"/><Health label="Return rate" value="6%" color="red"/></div><div className="health-footer"><b>You're doing great!</b><span>Keep up the excellent work.</span></div></section></div>
      </main>
    </div>
  );
}

function Metric({ icon, label, value, change, note, tone, negative }) {
  return <div className="metric"><div className={`metric-icon ${tone}`}>{icon}</div><span className={`change ${negative ? "negative" : ""}`}>{change}</span><p>{label}</p><strong>{value}</strong><small>{note}</small></div>;
}

function Health({ label, value, color }) {
  return <div className="health-row"><div><span>{label}</span><b>{value}</b></div><div className="progress"><i className={color} style={{ width: value }} /></div></div>;
}

