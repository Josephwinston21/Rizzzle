import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import TopPicks from '../components/TopPicks';
import NotificationBell from '../components/NotificationBell';
import AdComponent from '../components/AdComponent';
import NavBar from '../components/NavBar';
import { getProfile, getTopPicks, getNotifications } from '../utils/api';
import { useAuth } from '../utils/auth';
import styles from '../styles/dashboard.module.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [topPicks, setTopPicks] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch user profile
    getProfile(user.id)
      .then((data) => setProfile(data))
      .catch((error) => console.error('Error fetching profile:', error));

    // Fetch top picks
    getTopPicks(user.id)
      .then((data) => setTopPicks(data))
      .catch((error) => console.error('Error fetching top picks:', error));

    // Fetch notifications
    getNotifications(user.id)
      .then((data) => setNotifications(data))
      .catch((error) => console.error('Error fetching notifications:', error));
  }, [user.id]);

  return (
    <div className={styles.dashboardContainer}>
      <NavBar user={user} onLogout={logout} />
      <main className={styles.mainContent}>
        <section className={styles.profileSection}>
          {profile && <ProfileCard profile={profile} />}
          {!profile && <p>Loading profile...</p>}
        </section>

        <section className={styles.topPicksSection}>
          <h2>Top Picks</h2>
          {topPicks.length > 0 ? (
            <TopPicks picks={topPicks} />
          ) : (
            <p>Loading top picks...</p>
          )}
        </section>

        <section className={styles.notificationsSection}>
          <NotificationBell notifications={notifications} />
        </section>

        <section className={styles.adSection}>
          <AdComponent />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

/*
Instructions to Make It Your Own:
API Endpoints:

Replace getProfile, getTopPicks, and getNotifications API calls in ../utils/api.js with your actual endpoints.
Styling:

Adjust the CSS in dashboard.module.css to match your app's color scheme and design language.
Component Customization:

Modify the NavBar, ProfileCard, TopPicks, NotificationBell, and AdComponent as needed to fit your specific use case and design.
Authentication:

Ensure useAuth in ../utils/auth.js is configured with your authentication logic.
Error Handling:

Implement more robust error handling and possibly add user-friendly error messages or retry mechanisms.
AdComponent Customization:

Customize the AdComponent to integrate with your ad network and manage ads based on user behavior.*/


/*old dashboard code replace incase the new one is unworkable

import React from 'react';
import ProfileCard from './ProfileCard';
import TopPicks from './TopPicks';

const Dashboard = ({ user, topPicks }) => {
    return (
        <div className="dashboard">
            <ProfileCard profile={user.profile} />
            <TopPicks picks={topPicks} />
        </div>
    );
}

export default Dashboard;*/
