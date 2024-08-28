import React from 'react';

const ProfileCard = ({ profile }) => {
    return (
        <div className="profile-card">
            <img src={profile.image} alt={`${profile.name}'s profile`} />
            <h2>{profile.name}, {profile.age}</h2>
            <p>Height: {profile.height}</p>
            <p>Weight: {profile.weight}</p>
            <p>Bio: {profile.bio}</p>
            <p>Likes: {profile.likes}</p>
            <p>Matches: {profile.matches}</p>
            <button onClick={() => handleLike(profile.id)}>Like</button>
            <button onClick={() => handleSuperLike(profile.id)}>Super Like</button>
        </div>
    );
}

const handleLike = (profileId) => {
    // Logic to handle liking a profile
    console.log(`Liked profile with ID: ${profileId}`);
};

const handleSuperLike = (profileId) => {
    // Logic to handle super liking a profile
    console.log(`Super Liked profile with ID: ${profileId}`);
};

export default ProfileCard;
