import Link from 'next/link';
import React from 'react';
import styles from '../../styles/List.module.css'

export const getStaticProps = async (state) => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  return {
    props: {
      data: data,
    }
  }

}

const list = ({ data }) => {
  return (
    <div>
      <h1>All List</h1>
      {
        data.map(pd => (
          <Link href={`/list/${pd.id}`} key={pd.id}>
            <a className={styles.single}>
              <h3>{pd.name}</h3>
            </a>
          </Link>
        ))
      }
    </div>
  );
};

export default list;