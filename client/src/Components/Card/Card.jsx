import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'


const Card = ({ title, image, diets, id, types }) => {


    return (

        <div className='cart-body'>

            {/* <div className='carta-box'>
                <img src={image} alt='img' className='cart-image' />
                <div className='card-link'>
                    <Link to={`/home/details/${id}`}>
                        <button className='cart-button'>
                            <span>View</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='cart-header'>
                <h3 className='cart-title'>{title}</h3>
                <div className='card-diet-type'>
                    <div className='first'>
                        <h3 className='title-diets'>Diets</h3>
                        <div className='card-ul'>
                            {diets.map(e => <li key={e.name} className='cart-diets'>{e.name}</li>)}
                        </div>
                    </div>
                    <div className='first'>
                        <h3 className='title-diets'>Types</h3>
                        <div className='card-ul'>
                            {types ? types.map(e => <li key={e.name} className='cart-diets'>{e.name}</li>): <div></div>}
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="container">
                <div class="post">
                    <div class="header_post">
                        <Link to={`/home/details/${id}`}>
                        <img src={image} alt=""/>
                        </Link>
                    </div>

                    <div class="body_post">
                        <div class="post_content">

                            <h1>{title}</h1>
                            <div class="container_infos">
                                <div class="postedBy">
                                    <span>Diets</span>
                                    {diets.map(e => <li key={e.name} className='cart-diets'>{e.name}</li>)}
                                </div>

                                <div class="container_tags">
                                    <span>type of dish</span>
                                    <div class="tags">
                                        <ul>
                                        {types ? types.map(e => <li key={e.name} className='cart-diets'>{e.name}</li>): <div></div>}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

// imagen
// Nombre
// Tipo de dieta