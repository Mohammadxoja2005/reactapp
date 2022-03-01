import React from 'react'
import {Link} from 'react-router-dom'; 

export default function Social() {
  return (
    <ul className="social-link-small">
                      <li>
                        <Link to="#">
                          <i className="ion-social-facebook" style={{color: "black"}}/>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ion-social-twitter" style={{color: "black"}}/>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ion-social-googleplus-outline"style={{color: "black"}} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ion-social-instagram-outline" style={{color: "black"}}/>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ion-social-youtube" style={{color: "black"}}/>
                        </Link>
                      </li>
                    </ul>
  )
}
