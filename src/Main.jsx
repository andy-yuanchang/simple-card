import React from 'react'
import './Main.css';

const terms = [
  {
    "name": "iPhone",
    "count": 90
  },
  {
    "name": "Android",
    "count": 80
  },
  {
    "name": "Samsung",
    "count": 70
  },
  {
    "name": "Sony",
    "count": 60
  },
  {
    "name": "HTC",
    "count": 50
  },
  {
    "name": "ASUS",
    "count": 40
  },
  {
    "name": "小米",
    "count": 30
  },
  {
    "name": "Nokia",
    "count": 20
  }
]

function Main(props) {
  return (
    <div className="main">
      <span className="main__title">
        top terms
      </span>
      <div className="main__scroll-table">
        <table className="table">
          <thead>
            <tr className="header">
              <th colSpan="1">terms</th>
              <th colSpan="2">% of total posts</th>
              <th colSpan="1"># of posts</th>
            </tr>
          </thead>
          <tbody>
            {
              terms.map((term, index) => (
                <tr key={`term-${index}`}>
                  <td className="name">
                    {term.name}
                  </td>
                  <td colSpan="2">
                    <div
                      className="progress-bar"
                      style={{
                        background: `linear-gradient(90deg, rgb(209, 209, 49) 0%, rgb(245, 245, 149) ${term.count}%, rgba(0, 0, 0, 0.1) ${term.count}%)`
                      }}
                    >
                      {`${term.count}%`}
                    </div>
                  </td>
                  <td className="posts">{term.count}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

Main.propTypes = {

}

export default Main

