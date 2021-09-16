import React, { useState } from 'react'
import './Card.css';
import Menu from './Menu';
import Main from './Main';

const PLATFORM_ENUM = {
  "All": "All",
  "Twitter": "Twitter",
  "Facebook": "Facebook",
  "Instagram": "Instagram",
  "Youtube": "Youtube"
}

function Card() {
  const [selectedPlatform, setSelectedPlatform] = useState(PLATFORM_ENUM.All);
  return (
    <div className="card">
      <header className="card__header">
        card
      </header>

      <div className="card__second-header">
        <Menu
          platformList={PLATFORM_ENUM}
          selectedPlatform={selectedPlatform}
          onSelectPlatform={setSelectedPlatform}
        />
      </div>

      <div className="card__content">
        {
          selectedPlatform === PLATFORM_ENUM.All && <Main />
        }
      </div>

      <footer className="card__footer">
        footer
      </footer>
    </div>
  )
}

export default Card

