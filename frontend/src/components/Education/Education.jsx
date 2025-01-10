import React, { useState } from 'react';
import { CgSearch } from "react-icons/cg";
import './Education.css';

function Education() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '5px',
        paddingLeft: '35px',
        position: 'relative',
    };

    const iconStyle = {
        position: 'absolute',
        left: '10px',
        color: '#ccc',
    };

    const inputStyle = {
        border: '2px solid black',
        outline: 'none',
        flex: 1,
        padding: '10px',
        fontSize: '16px',
        paddingLeft: '20px',
    };

    const buttonStyle = {
        display: 'inline-block',
        padding: '10px 20px',
        margin: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f0f0f0',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'white',
		backgroundColor:'#2d5649'
    };


    const staticContent = [
        { id: 1, name: 'Sewa Bharti', distance: 'New Delhi', fee: 'No fee', type: 'Certified', link: 'https://www.sewabhartidelhi.org/' },
        { id: 2, name: 'Sapna India', distance: 'New Delhi', fee: 'Reasonable fees', type: 'Certified/Non-certified', link: 'https://sapnaindia.org/' },
        { id: 3, name: 'Smile Foundation', distance: '7km far away', fee: 'Rs500/month', type: 'Certified', link: 'https://www.smilefoundationindia.org/' },
        { id: 4, name: 'Nivedia', distance: '12km away from you', fee: 'No fees', type: 'Both certified and Non-certified', link: 'https://www.nivedafoundation.org/' },
        { id: 5, name: 'Sakshi Organisation', distance: 'Within 25km', fee: 'Rs900/month', type: 'Certified', link: 'https://sakshi.org.in/' },
        // Add more static content here
    ];

    const filteredContent = staticContent.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="loader-container" id="loader-container">
                <div className="loader"></div>
            </div>
            <div className="content" id="content" style={{ display: 'none' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Some NGOs offering training</h3>
                <div style={searchStyle}>
                    <CgSearch style={iconStyle} size="20px" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={inputStyle}
                    />
                </div>
                <div className="othercourses">
                    <div className="courses">
                        <div style={buttonStyle} onClick={() => handleItemClick('Teaching')}>Teaching</div>
                        <div style={buttonStyle} onClick={() => handleItemClick('Sewing')}>Sewing</div>
                        <div style={buttonStyle} onClick={() => handleItemClick('Carpenter')}>Carpenter</div>
                        <div style={buttonStyle} onClick={() => handleItemClick('Industrial Work')}>Industrial Work</div>
                        <div style={buttonStyle} onClick={() => handleItemClick('Painter')}>Painter</div>
                        <div style={buttonStyle} onClick={() => handleItemClick('Mechanic')}>Mechanic</div>
                        <div style={buttonStyle} onClick={() => handleItemClick('Explore more')}>Explore more</div>
                    </div>
                </div>
                <div className="container">
                    {filteredContent.map((item) => (
                        <section className="job-listings" key={item.id}>
                            <ul>
                                <li className="job-card">
                                    <div>
                                        <h3 className='name-color' >{item.name}</h3>
                                        <p className='text'>{item.distance}</p>
                                        <span className="location">{item.fee},</span>
                                        <span className="job-type">{item.type}</span>
                                    </div>
                                    <a href={item.link} target="_blank" style={buttonStyle}>Enquire</a>
                                </li>
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
          
            <script>
                document.addEventListener('DOMContentLoaded', function () {
                    setTimeout(function () {
                        const loaderContainer = document.getElementById('loader-container');
                        const content = document.getElementById('content');

                        loaderContainer.style.display = 'none';
                        content.style.display = 'block';
                    }, 1000)
                });
            </script>
        </div>
    );
}

export default Education;
