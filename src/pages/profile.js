import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileEditor from '../components/ProfileEditor';

const ProfilePage = ({ user, updateProfile }) => {
    return (
        <div className="profile-page">
            <Header />
            <ProfileEditor profile={user.profile} updateProfile={updateProfile} />
            <Footer />
        </div>
    );
}

export default ProfilePage;
