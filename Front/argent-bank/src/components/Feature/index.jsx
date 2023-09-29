const Feature = ({imgSrc, imgAlt, title, text}) => {
    return (
        <div className="feature-item">
            <img src={imgSrc} className="feature-icon" alt={imgAlt} />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    );
}
  
export default Feature;