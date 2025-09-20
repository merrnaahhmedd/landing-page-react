import React from 'react';
import Carditem from './Carditem';
import './Cards.css';

function cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC destinations</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
            <ul className="cards-items">
                <Carditem src='images/img-9.jpg' text='Explore the hidden waterfall deep inside the amazon jungle' label='Advetnure' path='/services' />
            <Carditem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards-items'>
            <Carditem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <Carditem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <Carditem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cards
