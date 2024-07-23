import React from 'react'

import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='page about'>
        <div className="about-header">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto voluptate fugit sunt ad quos nobis!</p>
        </div>

        <div className="about-body">
            <div className="content">
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, sit?</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos recusandae ipsam odio. Sunt, incidunt. Qui, nostrum, nesciunt, reiciendis tempora minima placeat facere dolore fugit sequi debitis minus voluptatum aperiam soluta.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint fugit quaerat quibusdam dolor a esse assumenda odio tempora, illo eos cupiditate nemo natus, ipsum velit suscipit neque, dolores dicta tenetur.</p>
            </div>
            <div className="image">
                {/* <img src={`https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png`} alt="about-img" /> */}
                <img src={`https://www.tatvasoft.com/blog/wp-content/uploads/2022/07/Why-Use-React.jpg`} alt="about-img" />
            </div>
        </div>
    </div>
  )
}

export default AboutUs