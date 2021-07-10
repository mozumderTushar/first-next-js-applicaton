import React from 'react';
import styles from '../../styles/Details.module.css'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  const paths = data.map(path => {
    return {
      params: { id: path.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json();

  return {
    props: { data }
  }
}

const details = ({ data }) => {
  return (
    <div className={styles.single}>
      <h1>{data.name}</h1>
      <h3>Email: {data.email}</h3>
      <h3>Website: {data.website}</h3>
      <h3>Address: {data.address.city}</h3>
    </div>
  );
};

export default details;