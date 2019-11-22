import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './Products.css'

const Products = ({
  prodtitle,
  proddisc,
  productlink,
  productbutton,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' Product-large'
  return (
    <div>
    <div className={`Product relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={prodtitle}
          size="cover"
        />
      )}
      </div>
      <div>
      <div className="container skinny relative">
        <h1 className="Product--Title">{prodtitle}</h1>
        {proddisc && (
          <Content className="PageHeader--Subtitle" src={proddisc} />
        )}
        <div className="section thin">
          <button className="Product--button" onClick={productlink}>
            {productbutton}
          </button>
        </div>  
      </div>
    </div>
    </div>
  )
}

Products.propTypes = {
  prodtitle: PropTypes.string,
  proddisc: PropTypes.string
}

export default Products
