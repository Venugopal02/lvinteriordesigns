import Footer from '../Footer'
import ProfileItem from '../ProfileItem'
import './index.css'


const profilesList = [
    {
        id: 1,
        imageUrl: "./Images/Profiles/livingroom.avif",
        name: "Living Room",
        path: "LivingRoom",
    },
    {
        id: 2,
        imageUrl: "./Images/Profiles/poojaroom.jpg",
        name: "Pooja Room",
        path: "PoojaRoom",
    },
    {
        id: 3,
        imageUrl: "./Images/Profiles/kitchen.avif",
        name: "Modular Kitchen",
        path: "ModularKitchen",
    },
    {
        id: 4,
        imageUrl: "./Images/Profiles/bedroom.avif",
        name: "Master Bedroom",
        path: "MasterBedroom",
    },
    {
        id: 5,
        imageUrl: "./Images/Profiles/childrenbedroom.avif",
        name: "Children Bedroom",
        path: "ChildrenBedroom",
    },
    {
        id: 6,
        imageUrl: "./Images/Profiles/homeoffice.avif",
        name: "Home Office",
        path: "HomeOffice",
    }
]


const Home = () => (
    <>
    <div className='home-bg-container'>
        <h1 className='website-caption'>Elevate your space with timeless elegance and visionary design.</h1>
    </div>

    <div className='gallery-bg-container'>
        <h1 className='profile-heading'>Design Gallery</h1>
        <ul className='profile-bg-container'>
            {profilesList.map(eachProfile => (
                <ProfileItem key={eachProfile.id} eachProfile={eachProfile} />
            ))}
        </ul>
    </div>
    <Footer/>
    </>
    
)

export default Home
