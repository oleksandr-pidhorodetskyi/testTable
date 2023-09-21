import React from "react";
import styles from "./tables.module.scss";

const Table = ({ title }) => {
  return (
    <section>
      <h3 className={styles.tableTitle}>{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Referal event</th>
            <th>Advocate</th>
            <th>Friend</th>
            <th>Referal status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.itemContainer}>
                <p className={styles.rowFirstLine}>Purchase</p>
                <p className={styles.date}>06/17/2020 at 7:13 PM PDT</p>
                <p className={styles.price}>$120.00</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>autouser23926@gmail.com</p>
                <p className={styles.type}>Advocate</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>fr58272@gmail.com</p>
                <p className={styles.type}>Friend</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>Pending</p>
                <p className={styles.statusMessage}>Passed fraud checks</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.itemContainer}>
                <p className={styles.rowFirstLine}>Purchase</p>
                <p className={styles.date}>07/10/2020 at 4:05 AM PDT</p>
                <p className={styles.price}>$100.00</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>ad0379118142@gmail.com</p>
                <p className={styles.type}>Advocate</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>fr0379118142@gmail.com</p>
                <p className={styles.type}>Friend</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.status}`}>Flagged</p>
                <p
                  className={`${styles.statusMessage} ${styles.statusMessageError}`}
                >
                  Marked as fraud
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.itemContainer}>
                <p className={styles.rowFirstLine}>Purchase</p>
                <p className={styles.date}>05/09/2020 at 12:42 PM PDT</p>
                <p className={styles.price}>$28.00</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>ad56881@gmail.com</p>
                <p className={styles.type}>Advocate</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>fr94250@gmail.com</p>
                <p className={styles.type}>Friend</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>Approved</p>
                <p className={styles.statusMessage}>Passed fraud checks</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.itemContainer}>
                <p className={styles.rowFirstLine}>Purchase</p>
                <p className={styles.date}>08/07/2020 at 4:20 AM PDT</p>
                <p className={styles.price}>$100.00</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>user.to.be.blocked92187@gmail.com</p>
                <p className={styles.type}>Advocate</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>user.to.be.blocked2682@gmail.com</p>
                <p className={styles.type}>Friend</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.status}`}>Blocked</p>
                <p
                  className={`${styles.statusMessage} ${styles.statusMessageError}`}
                >
                  Marked as fraud
                </p>
              </div>
            </td>
          </tr>
          <tr className={styles.lastRow}>
            <td>
              <div className={styles.itemContainer}>
                <p className={styles.rowFirstLine}>Purchase</p>
                <p className={styles.date}>06/09/2020 at 2:08 AM PDT</p>
                <p className={styles.price}>$100.00</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>ad0693677382@gmail.com</p>
                <p className={styles.type}>Advocate</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.emailField}`}>fr0693677382@gmail.com</p>
                <p className={styles.type}>Friend</p>
              </div>
            </td>
            <td>
              <div className={styles.itemContainer}>
                <p className={`${styles.rowFirstLine} ${styles.status}`}>Voided</p>
                <p
                  className={`${styles.statusMessage} ${styles.statusMessageError}`}
                >
                  Marked as fraud
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Table;
