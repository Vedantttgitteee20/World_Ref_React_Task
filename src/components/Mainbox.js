import React from 'react';
import styles from '../css/Mainbox.module.css';
import china from '../assets/china.png'
import india from '../assets/india.png'
import eu from '../assets/eu.png'

const Mainbox = () => {
    return (
    <div className={styles.mainbox}>
            <div className={styles.top}>
              <div className={styles.topleft}>
                <div className={styles.topleftcontent}>
                <span className={styles.first_title}>1 Feb 2023</span>
                <span className={styles.second_title}>
                    <b>RFQ ID   :</b>
                    <span>01098098</span>
                </span>
                <img className={styles.third_title} src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png" width="20px"/>
                </div>
              
              </div>
              <div className={styles.topright}>
              <div className={styles.toprightcontent}><b>Closing date</b> 25 Feb 2023</div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomleft}>
              <div className={styles.bottomleftcontent}>
              <h4>Spare Parts</h4>
                <p>
                    Supply AC Stator Coil Dummy Textt
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    A, voluptatibus. Nulla dolorem quod tenetur quisquam nostrum
                    ut! Quos inventore commodi am ut perspiciatis
                </p>
              </div>
              </div>
              <div className={styles.bottommid}>
                <div className={styles.bottommidcontent}>
              <h4>Prefered Source of origin</h4>
                <div>
                    <img src={china} width="20px" alt="" /> China
                </div>
                <div>
                    <img src={india} width="20px" alt="" />  India
                </div>
                <div>
                    <img src={eu} width="20px" alt="" />  Euprope Worldwide
                </div>
                </div>
              </div>
              <div className={styles.bottomright}>
              <div className={styles.bottomrightcontent}>
               <button type='button' className={styles.btn}>Check Details</button><br />
               <button type='button' className={styles.btn}>Share RFQ</button>
              </div>
              </div>
            </div>
    </div>
    )
}

export default Mainbox