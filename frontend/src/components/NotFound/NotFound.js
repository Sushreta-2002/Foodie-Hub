import React from 'react';
import classes from './notFound.module.css';
import { Link } from 'react-router-dom';

export default function NotFound({messege, linkRoute, linkText}) {

  return (
    <div className={classes.container}>
        {messege}
        <Link to= {linkRoute}>{linkText}</Link>
        </div>
  );
}

NotFound.defaultProps={
    messege:'Nothing Found!',
    linkRoute: '/',
    linkText: 'Go To Home Page'
};