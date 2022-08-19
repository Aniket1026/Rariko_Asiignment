import React from 'react'

import './Content.css'
// import Boy from '../Images/boy dummy data.jpg'
// import Girl from '../Images/cartoon girl dummy data.jpg'

import {Boys, Girls } from './data'

function Content() {
  return (
      <div className='content'>
          <div className='all-activity'>
              
          </div>
          <div className='wrapper'>
              <div> <Boys text='BAYC #2231' /></div>
              <div><Girls text='Cow #1659' /></div>
              <div> <Boys text='BAYC #2231' /></div>
              <div><Girls text='Cow #1659' /></div>
              <div> <Boys text='BAYC #2231' /></div>
              <div><Girls text='Cow #1659' /></div>
          </div>
      </div>
  )
}

export default Content