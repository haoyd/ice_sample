import React, {Component, useState, useEffect} from 'react';
import ColumnForm from './components/ColumnForm';
import styles from './index.module.scss';

export default function () {

    return (
        <div className="Form-page">
          <ColumnForm />
        </div>

        // <div className={styles.container}>
        //     <button onClick={timer} >点我</button>
        //     <label>倒计时:{time}</label>
        // </div>
    );
}
