import { useState } from "react";

const UserProfileEditor = () => {
  const [profile, setProfile] = useState({
    name: "Krishna",
    age: 24,
    city: "Delhi",
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <button onClick={() => setIsEditing(true)}>Edit Profile</button>

      {isEditing && (
        <div>
          <input
            value={profile.name}
            onChange={(e) => {
              setProfile({
                ...profile,
                name: e.target.value,
              });
            }}
            placeholder="Edit name"
          />

          <input
            value={profile.age}
            onChange={(e) => {
              setProfile({
                ...profile,
                age: e.target.value,
              });
            }}
            placeholder="Edit age"
            type="number"
          />

          <input
            value={profile.city}
            onChange={(e) => {
              setProfile({
                ...profile,
                city: e.target.value,
              });
            }}
            placeholder="Edit city"
          />

          <button onClick={() => setIsEditing(false)}>Save Profile</button>
        </div>
      )}

      <div style={{ border: "2px solid black", width: "200px" }}>
        <p>{profile.name}</p>
        <p>{profile.age}</p>
        <p>{profile.city}</p>
      </div>
    </div>
  );
};

export default UserProfileEditor;
