import { Button, Form, Input, message } from "antd";
import { useHistory } from "react-router-dom";
import styles from "./SignIn.module.css";
import { useState } from "react";
import CircularProgressBar from "../CircularProgressBar";

/* If user revists the page on root url. this component is mounted, If token exists we move to the application url's. */
const SignInPage = () => {
  // CONSTANTS
  const history = useHistory();

  // STATE
  const [loader, setLoader] = useState<boolean>(false);

  // HANDLERS

  const handleFinish = async (formObj: {
    username: string;
    password: string;
  }) => {
    setLoader(true);
    message.destroy();
    message.success("Login Successful!");
    history.push("/home");
    setLoader(false);
  };

  return (
    <>
      <Form
        onFinish={handleFinish}
        autoComplete="off"
        validateTrigger="onBlur"
        name="basic"
        className={`gx-signin-form gx-form-row0`}
      >
        <Form.Item
          name="username"
          // rules={[
          //   { required: true, message: "The email address is required" },
          //   {
          //     type: "email",
          //     message: "The input is not a valid email address.",
          //   },
          //   {
          //     pattern: /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/,
          //     message: "Invalid email address format.",
          //   },
          //   {
          //     message: "Only characters allowed, no leading/trailing spaces.",
          //     validator: (_, value) => {
          //       if (value && (value.startsWith(" ") || value.endsWith(" "))) {
          //         return Promise.reject();
          //       } else {
          //         return Promise.resolve();
          //       }
          //     },
          //   },
          // ]}
        >
          <Input placeholder="User Email" />
        </Form.Item>

        <Form.Item
          name="password"
          className={styles["signIn-form__password"]}
          // rules={[
          //   { required: true, message: "The password is required" },
          //   {
          //     min: 4,
          //     message: "Password cannot be less than 4 characters",
          //   },
          //   {
          //     max: 12,
          //     message: "Password cannot be greater than 12 characters",
          //   },

          //   {
          //     message: "Only characters allowed, no leading/trailing spaces.",
          //     validator: (_, value) => {
          //       if (value && (value.startsWith(" ") || value.endsWith(" "))) {
          //         return Promise.reject(
          //           new Error(
          //             "Provided value has leading or trailing space characters."
          //           )
          //         );
          //       } else {
          //         return Promise.resolve();
          //       }
          //     },
          //   },
          // ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <div className={styles["forgot-password-text"]}>Forgot Password?</div>

        <Form.Item>
          <Button
            className={`${styles["signIn-btn"]} button-gradiant`}
            htmlType="submit"
            disabled={loader}
          >
            {loader ? <CircularProgressBar /> : "  Login"}
          </Button>
        </Form.Item>

        <span className={`${styles["version"]}`}>
          Version: 02.02.02 (05-08-2023)
        </span>
      </Form>
    </>
  );
};

export default SignInPage;
