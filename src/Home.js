// Home.js

import React from 'react';
import './Home.css';
import { Card, Button } from 'react-bootstrap';
import sandtimer from './logo/sandtimer.png';
import calender from './logo/calender.png';
import join from './logo/join.png';
import away from './logo/away.png';
import work from './logo/work.png';
import Johndoe from './images/Johndoe.jpg';
import speaker from './images/speaker.jpg';
import speaker3 from './images/speaker3.jpg';
import speaker4 from './images/speaker4.jpg';
import thai from './images/thai.jpg';
import settings from './images/settings.jpg'

function Home() {
  const totalTasks = 71;
  const pendingTasks = 14;
  const totalProjects = 2;
  const leaveTaken = 4.5;
  const remainingLeave= 12;
  const apporved = '5.0' ;
  const remaining = 15;
  return (
    <div >
      <div className="header bg-white">
        <div className="profile">
          <img
            src={Johndoe} 
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <div className="user-info">
          <h5 className='name'><b>Welcome, John Doe</b></h5>
          <span className='date'>Monday, 20 May 2023</span>
        </div>
      </div>
      <div className="content">
        <div className="row">
          <div className="col-8 main-content">
            <h4 className='section-heading'>TODAY</h4>
            <Card>
              <Card.Body className='thicker-text vertically-centered'>
                <div className="card-text">
                  <img
                    src={sandtimer}
                    alt="Logo"
                    className='logo-pic'
                  />
                  <span className='text-color-red'>Richard Miles is off sick today</span>
                  <div className="profile-pic-card">
                    <img
                      src={speaker3} 
                      alt="Profile"
                      className="profile-pic-card"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className='thicker-text vertically-centered'>
                <div className="card-text">
                  <img
                    src={away}
                    alt="Logo"
                    className='logo-pic'
                  />
                  <span>You are away today</span>
                  <div className="profile-pic-card">
                    <img
                      src={Johndoe} 
                      alt="Profile"
                      className="profile-pic-card"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className='thicker-text vertically-centered'>
                <div className="card-text">
                  <img
                    src={work}
                    alt="Logo"
                    className='logo-pic'
                  />
                  <span >You are working from home today</span>
                  <div className="profile-pic-card">
                    <img
                      src={Johndoe} 
                      alt="Profile"
                      className="profile-pic-card"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <h4 className='section-heading'>TOMORROW</h4>
            <Card>
              <Card.Body className='thicker-text vertically-centered'>
                <div className="card-text">
                  <img
                    src={away}
                    alt="Logo"
                    className='logo-pic'
                  />
                  <span>2 people will be away tommorow</span>
                  <div className="profile-pic-card">
                    <img
                      src={speaker4} 
                      alt="Profile"
                      className="profile-pic-card"
                    />
                    <img
                      src={thai} 
                      alt="Profile"
                      className="profile-pic-card-overlap"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <h4 className='section-heading'>NEXT SEVEN DAYS</h4>
            <Card>
              <Card.Body className='thicker-text vertically-centered'>
                <div className="card-text">
                  <img
                    src={away}
                    alt="Logo"
                    className='logo-pic'
                  />
                  <span>2 people are going to be away</span>
                  <div className="profile-pic-card">
                    <img
                      src={speaker3} 
                      alt="Profile"
                      className="profile-pic-card"
                    />
                    <img
                      src={speaker} 
                      alt="Profile"
                      className="profile-pic-card-overlap"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className='thicker-text vertically-centered'>
                <div className="card-text">
                  <img
                    src={join}
                    alt="Logo"
                    className='logo-pic'
                  />
                  <span>Your first day is going to be on Thursday</span>
                  <div className="profile-pic-card">
                    <img
                      src={Johndoe} 
                      alt="Profile"
                      className="profile-pic-card"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className='thicker-text vertically-centered'>
                <div className="card-text">
                  <img
                    src={calender}
                    alt="Logo"
                    className='logo-pic'
                  />
                  <span>It's Spring Bank Holiday on Monday </span>
                </div>
              </Card.Body>
            </Card>
          </div>  
          <div className="col-4 sidebar">
          <h4 className='project-heading'>PROJECTS</h4>
          <Card>
        <Card.Body className='thicker-text vertically-centered'>
          <div className="cardtext">
            <div className="leave-info project-1">
              <div className="leave-count">{totalTasks}</div>
              <div className="leave-label">TOTAL TASKS</div>
            </div>
            <div className="line"></div>
            <div className="leave-info project-2">
              <div className="leave-count">{pendingTasks}</div>
              <div className="leave-label">PENDING TASKS</div>
            </div>
          </div>
          <div className="apply-leave">
            <div className="leave-count ">{totalProjects}</div>
            <div className="leave-label">TOTAL PROJECTS</div>
          </div>
        </Card.Body>
      </Card>
          <h4 className='project-heading'>YOUR LEAVE</h4>
          <Card>
        <Card.Body className='thicker-text vertically-centered'>
          <div className="cardtext">
            <div className="leave-info project-1">
              <div className="leave-count">{leaveTaken}</div>
              <div className="leave-label">LEAVE TAKEN</div>
            </div>
            <div className="line"></div>
            <div className="leave-info project-2">
              <div className="leave-count">{remainingLeave}</div>
              <div className="leave-label">REMAINING</div>
            </div>
          </div>
          <div className="button">
            <Button className='Button' size="sm">Apply Leave</Button>
          </div>
        </Card.Body>
      </Card>
          <h4 className='project-heading'>YOUR TIME OF ALLOWANCE</h4>
          <Card>
        <Card.Body className='thicker-text vertically-centered'>
          <div className="cardtext">
            <div className="leave-info project-1">
              <div className="leave-count">{apporved} Hours</div>
              <div className="leave-label">APPROVED</div>
            </div>
            <div className="line"></div>
            <div className="leave-info project-2">
              <div className="leave-count">{remaining} Hours</div>
              <div className="leave-label">REMAINING</div>
            </div>
          </div>
          <div className="button">
            <Button className='Button' size="sm">Apply Time Off</Button>
          </div>
        </Card.Body>
      </Card>
          <h4 className='project-heading'>UPCOMING HOLIDAY </h4>
         <Card>
              <Card.Body className='thicker-text vertically-centered lastcard'>
                <div className="cardtext">
                  <span className="leavecount">Mon 20 May 2023 - Ramzan</span>
                </div>
              </Card.Body>
          </Card>
          </div>
        </div>
      </div>
      <img
        src={settings} 
        alt="Profile"
        className="settings-pic"
      />
    </div>
  )
}

export default Home;
