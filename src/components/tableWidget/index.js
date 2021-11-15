import faker from "faker";
import "./tableWidget.css";
import { fDateTime } from "../../utils/formatTime";

export default function TableWidget() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Admins</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Admin</th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Created At</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_9.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Emeka John</span>
          </td>
          <td className="widgetLgAmount">adrian@example.com</td>
          <td className="widgetLgStatus">
            <Button type="active" />
          </td>
          <td className="widgetLgDate">{fDateTime(faker.date.past())}</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_1.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Lil John</span>
          </td>
          <td className="widgetLgAmount">adrian@example.com</td>
          <td className="widgetLgStatus">
            <Button type="active" />
          </td>
          <td className="widgetLgDate">{fDateTime(faker.date.past())}</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://zuri-taskxyz.netlify.app/img/about-img.svg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Chris John</span>
          </td>
          <td className="widgetLgAmount">adrian@example.com</td>
          <td className="widgetLgStatus">
            <Button type="inactive" />
          </td>
          <td className="widgetLgDate">{fDateTime(faker.date.past())}</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_20.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName"> Emeka Johnl</span>
          </td>
          <td className="widgetLgAmount">adrian@example.com</td>
          <td className="widgetLgStatus">
            <Button type="active" />
          </td>
          <td className="widgetLgDate">{fDateTime(faker.date.past())}</td>
        </tr>
      </table>
    </div>
  );
}
