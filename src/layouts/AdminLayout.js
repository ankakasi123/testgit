import React from "react";
import AsideComponent from "../components/common/AsideComponent";
import FooterComponent from "../components/common/FooterComponent";
import NavComponent from "../components/common/NavComponent";

export default function AdminLayout(props) {
  return (
    <div className="wrapper">
      {/* navbar */}
        <NavComponent />
      {/* sidebar */}
        <AsideComponent />
      {/* content */}
      { props.children }
      {/* footer */}
        <FooterComponent />
    </div>
  );
}
