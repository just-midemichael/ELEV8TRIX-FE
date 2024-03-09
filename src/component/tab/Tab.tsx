import React from "react";
import { CSSProperties, useState } from "react";
import { H5 } from "../shared/Title/H5";
import styles from "../../style/Courses.module.scss";

interface Tabs {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tabs[];
  headerClassName?: string;
  labelClassName?: string;
  tabTitle: string;
}

const Tab = ({
  tabs,
  headerClassName,
  labelClassName,
  tabTitle
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div style={tabContaier}>
      <div className={headerClassName} style={titleBox}>
        <H5 style={title} title={tabTitle} />
      </div>
      <div style={tabLabl}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={labelClassName}
            onClick={() => handleTabClick(index)}
            style={{
              fontSize: "1.1rem",
              color: index === activeTab ? "#3149A1" : "inherit",
              padding: "6px 40px 6px 0",
              textDecoration: index === activeTab ? "4px underline" : "none",
              textUnderlineOffset: "12px",
              cursor: "pointer"
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div style={contentContainer} className={styles.courseTab}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tab;

const tabContaier: CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: "200px",
  padding: "20px 0 0px 0"
};

const titleBox: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "50px",
  fontWeight: "700",
  textAlign: "left",
  padding: "10px 0"
};

const title: CSSProperties = {
  maxWidth: "496px",
  lineHeight: "40px"
};

const tabLabl: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  borderBottom: "1px solid silver",
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
