import React from 'react';
import '../css/Header2.css';
import { Link } from 'react-router-dom';

export function Header2() {
  return (
    <header className="empresa-header">
        <Link to='/'>
            <div className="empresa-nombre">
                ECOCHILL
            </div>
        </Link>
    </header>
  );
}