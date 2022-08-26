import React from 'react'
import { Link } from "react-router-dom";


function JobCard(props) {
    // const background = props.product.companyImage;
  return (
    <div className='border-2 mb-4 aa rounded overflow-hidden container'>
        <div className='search'>
        </div>
         <Link id='cards'  to={`/job/${props.product.id}`} style={{ textDecoration: 'none' }}>
         <div 
            style={{
                        'background': `linear-gradient(109.6deg, rgba(119, 44, 232, 0.68) 11.5%, rgb(119, 44, 232) 91.2%)`,  "height":'103px',
                    }}
                    className="w-100  myCard d-flex ">
                        {/* <Link to={`/job/${props.product.id}`}> */}
                        <img src={props.product.companyImage} alt='aaa'/>
                        <h3>{props.product.name}</h3>

                        <div className='deadline mt-2'>
                            <p>{props.product.companyName}</p>
                        </div>
                        <div className='p-1 viewMore'>
                            <a href='/#'>Daha Ətraflı</a>
                        </div>
                        {/* </Link> */}
        </div>
        </Link>

    </div>
  )
}

export default JobCard