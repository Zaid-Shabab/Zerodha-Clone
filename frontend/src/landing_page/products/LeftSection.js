import React from 'react';


function LeftSection({  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
    return ( 
        <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className="product-link">Try Demo <i className="fa fa-arrow-right"></i></a>
            <a href={learnMore} className="product-link" style={{ marginLeft: "50px" }}>
              Learn More <i className="fa fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
        
  