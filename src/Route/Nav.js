import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default function Nav() {
  return (
    <>
      <nav>
        <ul  className="nav-list" style={{ display: "flex" , flexWrap:"wrap", width: '100%' , padding:"10px", justifyContent:"center", listStyle:"none",gap: "20px" , textDecoration: "none"}}>
          <li>
            <Link to={"/one"}>One</Link>
          </li>
          <li>
            <Link to={"/two"}>two</Link>
          </li>
          <li>
            <Link to={"/three"}>three</Link>
          </li>
          <li>
            <Link to={"/four"}>four</Link>
          </li>
          <li>
            <Link to={"/five"}>five</Link>
          </li>
          <li>
            <Link to={"/six"}>six</Link>
          </li>
          <li>
            <Link to={"/seven"}>seven</Link>
          </li>
          <li>
            <Link to={"/eight"}>eight</Link>
          </li>
          <li>
            <Link to={"/nine"}>nine</Link>
          </li>
          <li>
            <Link to={"/ten"}>ten</Link>
          </li>
          <li>
            <Link to={"/eleven"}>eleven</Link>
          </li>
          <li>
            <Link to={"/twelve"}>twelve</Link>
          </li>
          <li>
            <Link to={"/thirteen"}>thirteen</Link>
          </li>
          <li>
            <Link to={"/fourteen"}>fourteen</Link>
          </li>
          <li>
            <Link to={"/fifteen"}>fifteen</Link>
          </li>
          <li>
            <Link to={"/sixteen"}>sixteen</Link>
          </li>
          <li>
            <Link to={"/seventeen"}>seventeen</Link>
          </li>
          <li>
            <Link to={"/eighteen"}>eighteen</Link>
          </li>
          <li>
            <Link to={"/nineteen"}>nineteen</Link>
          </li>
          <li>
            <Link to={"/twenty"}>twenty</Link>
          </li>
          <li>
            <Link to={"/twenty-one"}>twenty-One</Link>
          </li>
          <li>
            <Link to={"/twenty-two"}>twenty-two</Link>
          </li>
          <li>
            <Link to={"/twenty-three"}>twenty-three</Link>
          </li>
          <li>
            <Link to={"/twenty-four"}>twenty-four</Link>
          </li>
          <li>
            <Link to={"/twenty-five"}>twenty-five</Link>
          </li>
          <li>
            <Link to={"/twenty-six"}>twenty-six</Link>
          </li>
          <li>
            <Link to={"/twenty-seven"}>twenty-seven</Link>
          </li>
          <li>
            <Link to={"/twenty-eight"}>twenty-eight</Link>
          </li>
          <li>
            <Link to={"/twenty-nine"}>twenty-nine</Link>
          </li>
          <li>
            <Link to={"/thirty"}>thirty</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
