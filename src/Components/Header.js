import React from 'react'
import './Header.css'
import FilterDropdown from './FilterDropdown'


export default function Header() {
  return (
    <div className='header'>
      <FilterDropdown/>
    </div>
  )
}
