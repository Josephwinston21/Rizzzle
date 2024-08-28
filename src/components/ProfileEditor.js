import React, { useState } from 'react';

const ProfileEditor = ({ profile, updateProfile }) => {
    const [name, setName] = useState(profile.name || '');
    const [age, setAge] = useState(profile.age || '');
    const [bio, setBio] = useState(profile.bio || '');
    const [image, setImage] = useState(profile.image || '');

    const handleSaveProfile = () => {
        const updatedProfile = {
            name,
            age,
            bio,
            image
        };
        updateProfile(updatedProfile);
        alert('Profile updated successfully!');
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Logic to upload the image to the server or cloud storage (e.g., AWS S3)
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-editor">
            <h3>Edit Profile</h3>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>
            <label>
                Bio:
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </label>
            <label>
                Profile Image:
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
            </label>
            {image && <img src={image} alt="Profile Preview" />}
            <button onClick={handleSaveProfile}>Save Profile</button>
        </div>
    );
}

export default ProfileEditor;
