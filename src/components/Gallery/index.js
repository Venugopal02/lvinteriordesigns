import ProfileItem from '../ProfileItem'
import './index.css'

const profilesList2 = [
    {
        id: 11,
        imageUrl: "./Images/Profiles/livingroom.avif",
        name: "Living Room",
        path: "LivingRoom",
    },
    {
        id: 22,
        imageUrl: "./Images/Profiles/poojaroom.jpg",
        name: "Pooja Room",
        path: "PoojaRoom",
    },
    {
        id: 33,
        imageUrl: "./Images/Profiles/kitchen.avif",
        name: "Modular Kitchen",
        path: "ModularKitchen",
    },
    {
        id: 44,
        imageUrl: "./Images/Profiles/bedroom.avif",
        name: "Master Bedroom",
        path: "MasterBedroom",
    },
    {
        id: 55,
        imageUrl: "./Images/Profiles/childrenbedroom.avif",
        name: "Children Bedroom",
        path: "ChildrenBedroom",
    },
    {
        id: 66,
        imageUrl: "./Images/Profiles/homeoffice.avif",
        name: "Home Office",
        path: "HomeOffice",
    }
]


const Gallery = () => (
    <div className='gallery-route-bg-container'>
        <div className='gallery-route-container'>
            <h1 className='gallery-route-heading'>Design is thinking made visual.</h1>
        </div>

        <div className='gallery-bg-container'>
        <h1 className='profile-heading'>Design Gallery</h1>
        <ul className='profile-bg-container'>
            {profilesList2.map(eachProfile => ( 
                <ProfileItem key={eachProfile.id} eachProfile={eachProfile} />
            ))}
        </ul>
        </div>
    </div>
)

export default Gallery