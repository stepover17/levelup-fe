import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
// import homeIcon from "./NavbarIcon";
// import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  VerNavBar: {
    width: "8vw",
    height: "100vh",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "0.8vw",
    // marginRight: "1vw",
    position: "fixed",
  },
  SvgIcon: {
    marginLeft: "3.5vw",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      opacity: "0.5",
      transform: "scale(1.5)",
    },
  },
}));
const VerticalNavbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.VerNavBar}>
      <Link to="/">
        <Logo />
      </Link>

      <Link to="/">
        <svg
          className={classes.SvgIcon}
          width="38"
          height="40"
          viewBox="0 0 38 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.2157 14.6435L18.1443 0.685927C17.6544 0.232175 17.0091 -0.0133888 16.3435 0.000563598C15.6779 0.014516 15.0434 0.286905 14.5726 0.760795L0.711344 14.714L0 15.43V36H13.3571V23.1655H20.6429V36H34V15.3699L33.2157 14.6435ZM16.3957 2.44471C16.4171 2.44471 16.4039 2.44937 16.3948 2.45846C16.3853 2.44937 16.3743 2.44471 16.3957 2.44471ZM31.5714 33.5553H23.0714V23.1655C23.0714 22.5171 22.8156 21.8953 22.3601 21.4369C21.9047 20.9784 21.287 20.7208 20.6429 20.7208H13.3571C12.713 20.7208 12.0953 20.9784 11.6399 21.4369C11.1844 21.8953 10.9286 22.5171 10.9286 23.1655V33.5553H2.42857V16.4427L16.3957 2.4894C16.3967 2.48849 16.3968 2.48765 16.3976 2.48673L31.5714 16.4427V33.5553Z"
            fill="#7F8488"
          />
        </svg>
      </Link>
      <Link to="/">
        <svg
          className={classes.SvgIcon}
          width="42"
          height="42"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.3125 14.75V11.0625H33.1875C33.1875 4.83062 36.875 3.6875 36.875 3.6875V0H18.4375V3.6875C18.4375 3.6875 22.125 4.83062 22.125 11.0625H0V55.3125H7.375V59H59V14.75H55.3125ZM51.625 51.625H3.6875V14.75H18.4375V18.4375H25.8125V25.8125H29.5V18.4375H36.875V14.75H51.625V51.625Z"
            fill="#7F8488"
          />
        </svg>
      </Link>
      <Link to="/">
        <svg
          className={classes.SvgIcon}
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.50001 44.603L14.2697 36.8333H39C40.1493 36.8333 41.2515 36.3768 42.0641 35.5641C42.8768 34.7515 43.3333 33.6493 43.3333 32.5V13C43.3333 11.8507 42.8768 10.7485 42.0641 9.93587C41.2515 9.12321 40.1493 8.66667 39 8.66667H10.8333C9.68407 8.66667 8.58187 9.12321 7.76921 9.93587C6.95656 10.7485 6.50001 11.8507 6.50001 13V44.603ZM6.50001 47.6667H4.33334V13C4.33334 11.2761 5.01816 9.62279 6.23715 8.40381C7.45614 7.18482 9.10944 6.5 10.8333 6.5H39C40.7239 6.5 42.3772 7.18482 43.5962 8.40381C44.8152 9.62279 45.5 11.2761 45.5 13V32.5C45.5 34.2239 44.8152 35.8772 43.5962 37.0962C42.3772 38.3152 40.7239 39 39 39H15.1667L6.50001 47.6667ZM14.0833 19.5C14.9453 19.5 15.7719 19.8424 16.3814 20.4519C16.9909 21.0614 17.3333 21.888 17.3333 22.75C17.3333 23.612 16.9909 24.4386 16.3814 25.0481C15.7719 25.6576 14.9453 26 14.0833 26C13.2214 26 12.3947 25.6576 11.7852 25.0481C11.1758 24.4386 10.8333 23.612 10.8333 22.75C10.8333 21.888 11.1758 21.0614 11.7852 20.4519C12.3947 19.8424 13.2214 19.5 14.0833 19.5ZM14.0833 21.6667C13.796 21.6667 13.5205 21.7808 13.3173 21.984C13.1141 22.1871 13 22.4627 13 22.75C13 23.0373 13.1141 23.3129 13.3173 23.516C13.5205 23.7192 13.796 23.8333 14.0833 23.8333C14.3707 23.8333 14.6462 23.7192 14.8494 23.516C15.0525 23.3129 15.1667 23.0373 15.1667 22.75C15.1667 22.4627 15.0525 22.1871 14.8494 21.984C14.6462 21.7808 14.3707 21.6667 14.0833 21.6667ZM24.9167 19.5C25.7786 19.5 26.6053 19.8424 27.2148 20.4519C27.8243 21.0614 28.1667 21.888 28.1667 22.75C28.1667 23.612 27.8243 24.4386 27.2148 25.0481C26.6053 25.6576 25.7786 26 24.9167 26C24.0547 26 23.2281 25.6576 22.6186 25.0481C22.0091 24.4386 21.6667 23.612 21.6667 22.75C21.6667 21.888 22.0091 21.0614 22.6186 20.4519C23.2281 19.8424 24.0547 19.5 24.9167 19.5ZM24.9167 21.6667C24.6294 21.6667 24.3538 21.7808 24.1506 21.984C23.9475 22.1871 23.8333 22.4627 23.8333 22.75C23.8333 23.0373 23.9475 23.3129 24.1506 23.516C24.3538 23.7192 24.6294 23.8333 24.9167 23.8333C25.204 23.8333 25.4795 23.7192 25.6827 23.516C25.8859 23.3129 26 23.0373 26 22.75C26 22.4627 25.8859 22.1871 25.6827 21.984C25.4795 21.7808 25.204 21.6667 24.9167 21.6667ZM35.75 19.5C36.612 19.5 37.4386 19.8424 38.0481 20.4519C38.6576 21.0614 39 21.888 39 22.75C39 23.612 38.6576 24.4386 38.0481 25.0481C37.4386 25.6576 36.612 26 35.75 26C34.8881 26 34.0614 25.6576 33.4519 25.0481C32.8424 24.4386 32.5 23.612 32.5 22.75C32.5 21.888 32.8424 21.0614 33.4519 20.4519C34.0614 19.8424 34.8881 19.5 35.75 19.5ZM35.75 21.6667C35.4627 21.6667 35.1871 21.7808 34.984 21.984C34.7808 22.1871 34.6667 22.4627 34.6667 22.75C34.6667 23.0373 34.7808 23.3129 34.984 23.516C35.1871 23.7192 35.4627 23.8333 35.75 23.8333C36.0373 23.8333 36.3129 23.7192 36.516 23.516C36.7192 23.3129 36.8333 23.0373 36.8333 22.75C36.8333 22.4627 36.7192 22.1871 36.516 21.984C36.3129 21.7808 36.0373 21.6667 35.75 21.6667Z"
            fill="#7F8488"
          />
        </svg>
      </Link>
      <Link to="/">
        <svg
          className={classes.SvgIcon}
          width="38"
          height="36"
          viewBox="0 0 38 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2415 10.1056H12.2415V10.0982C12.2415 7.40381 12.9041 5.32854 14.1161 3.75438C15.2629 2.26488 16.8292 1.5 19 1.5C21.1708 1.5 22.7371 2.26488 23.8839 3.75438C25.0959 5.32854 25.7585 7.40381 25.7585 10.0982L25.7585 10.1056C25.7748 13.4036 24.7223 15.871 22.6954 17.6861L22.6836 17.6966L22.6721 17.7074C21.9473 18.3844 21.7198 19.2954 21.9017 20.1981L21.9391 20.3836L22.0214 20.5539L22.6371 21.8294C22.9532 22.5076 23.4365 23.066 24.0767 23.465C24.6204 23.8039 25.5852 24.1961 26.8049 24.6347L26.8231 24.6413L26.8414 24.6473C26.9034 24.6678 28.0528 25.0375 30.2675 25.7495C31.3772 26.1062 32.223 26.3812 32.8076 26.5753C33.1006 26.6726 33.3227 26.7479 33.4774 26.802C33.5903 26.8415 33.6392 26.8603 33.6489 26.8636L33.6548 26.8665L33.7024 26.8862C35.0084 27.4263 35.6567 27.8951 35.928 28.2035C36.0572 28.5775 36.2067 29.3217 36.3169 30.5674C36.4095 31.6141 36.4679 32.9228 36.49 34.5H1.51002C1.53211 32.9228 1.59052 31.6141 1.68309 30.5674C1.79326 29.3217 1.9428 28.5775 2.07203 28.2035C2.34326 27.8951 2.99159 27.4263 4.29765 26.8862L4.34516 26.8665L4.3511 26.8636C4.36077 26.8603 4.40965 26.8415 4.5226 26.802C4.67733 26.7479 4.89939 26.6726 5.19238 26.5753C5.77697 26.3812 6.62282 26.1062 7.73248 25.7495C9.94725 25.0375 11.0966 24.6678 11.1586 24.6473L11.1769 24.6413L11.1951 24.6347C12.4148 24.1961 13.3796 23.8039 13.9233 23.465C14.5635 23.066 15.0468 22.5076 15.3629 21.8294L15.9786 20.5539L16.0609 20.3836L16.0983 20.1981C16.2802 19.2954 16.0527 18.3844 15.3279 17.7074L15.3164 17.6966L15.3046 17.6861C13.2777 15.871 12.2252 13.4036 12.2415 10.1056Z"
            fill="white"
            stroke="#7F8488"
            strokeWidth="3"
          />
        </svg>
      </Link>
      <Link to="/">
        <svg
          className={classes.SvgIcon}
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fill-rule="evenodd"
            // clip-rule="evenodd"
            d="M0 0H20.4615V2.92308H2.92308V35.0769H20.4615V38H0V0ZM28.804 9.196L38.5671 18.9591L28.842 29.4909L26.6965 27.5091L33.2003 20.4615H8.76923V17.5385H33.0103L26.7345 11.2655L28.804 9.196Z"
            fill="#7F8488"
            stroke="#7F8488"
          />
        </svg>
      </Link>
      <p></p>
    </div>
  );
};

export default VerticalNavbar;
