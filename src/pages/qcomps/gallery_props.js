import Avatar from "../components/profile_props";

function Profile(scientist, size) {
  return (
    <div>
    <img
      className="avatar"
      src={'https://i.imgur.com/' + scientist.imageId + 's.jpg'}
      alt={scientist.name}
      width={size}
      height={size}
    />
    <ul>
      <li>
        <b>Profession: </b>
            {scientist.profession};
          </li>
          <li>
            <b>Awards: {scientist.awardCount} </b>
            ({scientist.awards})
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discovered}
          </li>
        </ul>
        </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <Profile scientist={{name:"Maria Skłodowska-Curie", imageId:"szV5sdGs",
        profession:"physicist and chemist", awardCount:"4", 
        awards:"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
        discovered:"polonium (element)"}}
        size={70}/>
      </section>
      <section className="profile">
      <Profile scientist={{name:"Katsuko Saruhashi", imageId:"YfeOqp2s",
        profession:"geochemist", awardCount:"2", 
        awards:"Miyake Prize for geochemistry, Tanaka Prize",
        discovered:"a method for measuring carbon dioxide in seawater"}}
        size={70}/>
      </section>
    </div>
  );
}
