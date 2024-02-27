import { useState } from "react";
import { H7 } from "../../component/shared/Title/H7";
import Input from "../../component/shared/inputForm/Input";
import ColoredButton from "../../component/shared/button/coloredButton/ColoredButton";
import styles from "./Subscription.module.scss";
import polygon from "/Polygon2.png";
import mail from "/mail1.png";
import {
  subscriptionContianer,
  subscriptionWrapper,
  titleBox,
  descriptionBox,
  formBox,
  form,
  polygonStyle,
  mailStyle
} from "./styles";

const Subscription = () => {
  const [input] = useState();
  return (
    <div style={subscriptionContianer}>
      <div style={subscriptionWrapper}>
        <div style={titleBox}>
          <H7 title={"Subscribe to our newsletter"} />
        </div>
        <div style={descriptionBox}>
          Lorem ipsum dolor sit amet consectetur. Vel felis consectetur turpis
          vitae feugiat tellus proin porta molestie. Sit.
        </div>
        <div style={formBox}>
          <form style={form}>
            <Input
              className={styles.subscriptionInput}
              type={"input"}
              placeholder={"Enter your email address"}
              name={"newsletter subscription"}
              value={input}
            />
            <ColoredButton
              className={styles.button}
              text={"Subscribe"}
              link={""}
            />
          </form>
        </div>
      </div>
      <img src={polygon} className={styles.polygon} style={polygonStyle} />
      <img src={mail} style={mailStyle} />
    </div>
  );
};

export default Subscription;
