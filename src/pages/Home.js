import styles from "../css/Home.module.css";
import Mainbox from "../components/Mainbox.js";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.leftDiv}>
        <div className={styles.title}>RQF List</div>
        <div className={styles.sort}>
          <div className={styles.sortTitle}>Sort By:</div>
          <div className={styles.sortInput}>
            <div className={styles.checkbox}>
              <input type="checkbox" id="published" />
              <label htmlFor="publihed">Published Date</label>
            </div>
            <input type="date" className={styles.date} />
            <div className={styles.checkbox}>
              <input type="checkbox" id="closing" />
              <label htmlFor="closing">Closing Date</label>
            </div>
            <input type="date" className={styles.date} />
          </div>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.header}>
          <div className={styles.searchMenu}>
            <div className={styles.searchBar}>
              <img
                className={styles.searchIcon}
                src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                width="20px"
              />
              <input
                type="text"
                className={styles.search}
                placeholder="Search"
              />
            </div>
            <div className={styles.sortTitle}>Sort By:</div>
            <div className={styles.sortTitle2}>
              <div className={styles.checkbox}>
                <input type="checkbox" id="published" />
                <label htmlFor="published">Published Date</label>
              </div>
              <input type="date" className={styles.date} />
            </div>
            <div className={styles.sortTitle2}>
              <div className={styles.checkbox}>
                <input type="checkbox" id="closing" />
                <label htmlFor="closing">Closing Date</label>
              </div>
              <input type="date" className={styles.date} />
            </div>
          </div>
          <div className={styles.searchResult}>
            <span style={{ color: "blue", fontWeight: "700" }}>135 New </span>
            <span style={{ fontWeight: "700" }}>
              Buying Request from 35 buyers
            </span>
          </div>
          <Mainbox />
        </div>
      </div>
    </div>
  );
};

export default Home;
