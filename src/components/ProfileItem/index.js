import { Link } from 'react-router-dom'
import './index.css'

const ProfileItem = props => {
    const {eachProfile} = props
    const {imageUrl, name, path} = eachProfile
    return(
        <Link to={"/" + path} className='profile-item-bg-container' id='item'>
            <img className='profile-img' src={imageUrl} alt={name} />
            <h1 className='profile-name'>{name}</h1>
        </Link>
    )
}

export default ProfileItem