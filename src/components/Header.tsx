import "./styleComponents/HeaderStyle.scss";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="backGroundHeader">
     <div className="list-button">
        <ul>
          <li>
            <Link to="/">
                <button className="button-header">Episodes</button>
            </Link>
          </li>
          <li>
            <Link to="/characters">
                <button className="button-header">Characters</button>
            </Link>
          </li>
          <li>
            <Link to="/locations">
                <button className="button-header">Locations</button>
            </Link>
          </li>
        </ul>
     </div>
    </div>
  );
}
