import Link from 'next/link';
import React from 'react';

import styles from './ViewAllTasks.module.scss';

const ViewAllTasks = () => {
  return (
    <nav className={styles.nav}>
      <Link href={`posts/page/2`}>
        <a className={styles.viewAll}>View all tasks</a>
      </Link>
    </nav>
  );
};

export default ViewAllTasks;
