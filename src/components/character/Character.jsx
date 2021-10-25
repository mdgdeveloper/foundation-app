import './character.css'

const Character = ({name, img, type, planet, era, bio}) => {
    return (
<div className="c-item">
          <img src={img} alt="" className="c-image" />
          <div className="c-desc">
            <h2 className="c-desc-title">{name}</h2>
            <div className="c-tag-list">
                <div className="c-tag c-tag-race">{type}</div>
                <div className="c-tag c-tag-planet">{planet}</div>
                <div className="c-tag c-tag-era">{era}</div>
            </div>
            <p className="c-desc-text">
              {bio}
            </p>
          </div>
        </div>
    )
}

export default Character
