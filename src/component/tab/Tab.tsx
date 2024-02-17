import React from "react";
import { CSSProperties, useState } from "react";
import { H5 } from "../shared/Title/H5";

interface Tabs {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tabs[];
}

const Tab = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div style={tabContaier}>
      <div style={titleBox}>
        <H5
          style={title}
          title={"Elev8te your carrer with one of these courses"}
        />
      </div>
      <div style={tabLabl}>
        {tabs.map((tab, index) => (
          <div
            onClick={() => handleTabClick(index)}
            style={{
              fontSize: "1.1rem",
              color: index === activeTab ? "#3149A1" : "inherit",
              padding: "6px 40px 6px 0",
              textDecoration: index === activeTab ? "4px underline" : "none",
              textUnderlineOffset: "12px"
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div style={contentContainer}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;

const tabContaier: CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: "300px",
  padding: "20px 0"
};

const titleBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "50px",
  fontWeight: "700",
  textAlign: "left",
  padding: "18px 0"
};

const title: CSSProperties = {
  maxWidth: "496px",
  lineHeight: "40px"
};

const tabLabl: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  borderBottom: "2px solid black",
  overflowY: "hidden"
};

const contentContainer: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "30px 0",
  width: "100%",
  height: "100%",
  minHeight: "200px",
  overflowY: "hidden"
};
