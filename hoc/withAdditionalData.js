import React from 'react';
import { useSelector } from 'react-redux';

const withAdditionalData = (Component, selectedData) => {
  return () => {
    const data = useSelector(selectedData);
    return <Component data={data}/>;
  };
};

export default withAdditionalData;
