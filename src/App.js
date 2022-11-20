import './App.css';
import profiles from './berlin.json';
console.log(profiles);

function App() {
  return (
    <>
      <FaceBook/>
    </>
  );
}

const FaceBook = (props) =>{
  return(
    <>
    {profiles.map(profile=>
    <section className='parent'>
      <img src={profile.img} alt="portrait"></img>
      <p className='firstName'><strong>First name: </strong>{profile.firstName}</p>
      <p className='lastName'><strong>Last name: </strong>{profile.lastName}</p>
      <p className='country'><strong>Country: </strong>{profile.country}</p>
      <p className='type'><strong>Type: </strong>{profile.isStudent ? "Student" : "Teacher"}</p>

    </section>
    )}
    </>
  )
}


export default App;
