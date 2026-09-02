import "./Orders.css";
import Header from "../components/Header";

export default function Orders() {
  return (
    <div className="page">
      <Header />
      <h2>Orders</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>ORD-7841</td>
            <td>Ananya</td>
            <td>₹32,990</td>
            <td className="processing">Processing</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

