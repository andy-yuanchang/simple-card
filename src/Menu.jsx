import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Menu.css';

function Menu(props) {
  const { platformList, selectedPlatform, onSelectPlatform } = props
  const [isHideMenu, setIsHideIcons] = useState(false);

  function handleClickButton() {
    setIsHideIcons(true);
  }

  return (
    <div className={`menu ${isHideMenu && "hidden"}`}>
      {
        <div className="menu__items">
          {
            Object.keys(platformList).map((platform, index) => {
              return (
                <span
                  onClick={() => {
                    onSelectPlatform(platform);
                  }}
                  className={`${platform === selectedPlatform && "selected"}`}
                  key={`platform-${index}`}
                >
                  {platform}
                </span>
              )
            })
          }
        </div>
      }
      <div
        className="menu__button"
        onClick={handleClickButton}
      >
        Hide
      </div>
    </div>
  )
}

Menu.propTypes = {
  platformList: PropTypes.object,
  selectedPlatform: PropTypes.string,
  onSelectPlatform: PropTypes.func
}

export default Menu

