import styles from "./Container.module.css";

function Container(PropTypes) {
  return (
    <div className={`${styles.container} ${styles[PropTypes.customClass]}`}>
      {PropTypes.children}
    </div>
  );
}

export default Container;
