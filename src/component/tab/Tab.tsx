import React from "react";
import { CSSProperties, useState } from "react";
import { H6 } from "../shared/Title/H6";
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
        <H6 style={title} title={tabTitle} />
      </div>
      <div style={tabLabel}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={labelClassName}
            onClick={() => handleTabClick(index)}
            style={{
              fontSize: "0.95rem",
              minWidth: "fit-content",
              color: index === activeTab ? "#3149A1" : "inherit",
              padding: "12px 14px 12px 0",
              textDecoration: index === activeTab ? "4px underline" : "none",
              textUnderlineOffset: "16px",
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
  fontWeight: "500",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  padding: "0"
};

const title: CSSProperties = {
  maxWidth: "800px",
  lineHeight: "40px"
};

const tabLabel: CSSProperties = {
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
  padding: "10px 0 30px 0",
  width: "100%",
  height: "100%",
  minHeight: "200px",
  overflowY: "hidden"
};
