import LoadingIcon from "@/icons/loading.svg";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.root}>
      <LoadingIcon className={styles.loadingIcon} />
    </div>
  );
};

export default Loader;
