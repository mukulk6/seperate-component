import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './InfiniteScroll.module.css';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(
    () => {
      fetchData(page)
    },[page])

  const fetchData = (page) => {
    const newItems = [];
    for (let i = 0; i < 100; i++) {
      newItems.push(i);
    }
    if (page === 100) {
      sethasMore(false);
    }
    setItems([...items, ...newItems])
  }

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.addEventListener('scroll', onScroll)
  })
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            {item}
          </div>
        )
      })}
    </div>

  )
};

InfiniteScroll.propTypes = {};

InfiniteScroll.defaultProps = {};

export default InfiniteScroll;
