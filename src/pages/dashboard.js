// src/pages/dashboard.js

import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import TopPicks from '../components/TopPicks';
import NotificationBell from '../components/NotificationBell';
import AdComponent from '../components/AdComponent';
import NavBar from '../components/NavBar';
import { getProfile, getTopPicks, getNotifications } from '../utils/api';
import { useAuth } from '../utils/auth';
import { motion } from 'framer-motion';
import styles from '../styles/dashboard.module.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [topPicks, setTopPicks] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data and display a loading spinner until everything is ready
    async function fetchData() {
      try {
        const profileData = await getProfile(user.id);
        const topPicksData = await getTopPicks(user.id);
        const notificationsData = await getNotifications(user.id);

        setProfile(profileData);
        setTopPicks(topPicksData);
        setNotifications(notificationsData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [user.id]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <motion.div
          className={styles.spinner}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      <NavBar user={user} onLogout={logout} />
      <motion.main
        className={styles.mainContent}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <section className={styles.profileSection}>
          {profile ? (
            <ProfileCard profile={profile} />
          ) : (
            <p className={styles.errorText}>Could not load profile.</p>
          )}
        </section>

        <section className={styles.topPicksSection}>
          <h2>Top Picks</h2>
          {topPicks.length > 0 ? (
            <TopPicks picks={topPicks} />
          ) : (
            <p className={styles.errorText}>No top picks available at the moment.</p>
          )}
        </section>

        <section className={styles.notificationsSection}>
          <NotificationBell notifications={notifications} />
        </section>

        <section className={styles.adSection}>
          <AdComponent />
        </section>
      </motion.main>
    </div>
  );
};

export default Dashboard;

//Old Code for dashboard
/*import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import TopPicks from '../components/TopPicks';
import NotificationBell from '../components/NotificationBell';

const DashboardPage = ({ user, topPicks, fetchNotifications }) => {
    return (
        <div className="dashboard-page">
            <Header />
            <main>
                <ProfileCard profile={user.profile} />
                <TopPicks picks={topPicks} />
                <NotificationBell fetchNotifications={fetchNotifications} />
            </main>
            <Footer />
        </div>
    );
}

export default DashboardPage;*/
