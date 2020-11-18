import React from 'react';
import s from './Profileinfo.module.css';






const Profileinfo = () => {
    return (
        <div className={s.pirofileInfo}>
            <img src="https://www.magi-tour.com.ua/images/2019/06/18/zolotoj-more-2.jpg"/>
            <div className={s.discriptionBlock}>
                ava + discripshion
            </div>

        </div>
    );
}

export default Profileinfo;