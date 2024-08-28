import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileEditor from '../components/ProfileEditor';

const ProfileEditorPage = ({ user, updateProfile }) => {
    return (
        <div className="profile-editor-page">
            <Header />
            <ProfileEditor profile={user.profile} updateProfile={updateProfile} />
            <Footer />
        </div>
    );
}

export default ProfileEditorPage;
