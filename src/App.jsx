import React, { useState } from 'react';
import { UserStatsProvider } from '@/context/UseStatsContext';
import AppLayout from '@/layout/AppLayout';
import HomeView from '@/features/home/HomeView';
import QuizView from '@/features/quiz/QuizView';
import MapView from '@/features/map/MapView';
import AchievementsView from '@/features/achievements/AchievementsView';
import GamesView from '@/features/games/GamesView';
import KnowledgeView from '@/features/knowledge/KnowledgeView';
import ChallengesView from '@/features/challenges/ChallengesView';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <UserStatsProvider>
      <AppLayout currentView={currentView} setCurrentView={setCurrentView}>
        {currentView === 'home' && <HomeView />}
        {currentView === 'quiz' && <QuizView />}
        {currentView === 'map' && <MapView />}
        {currentView === 'achievements' && <AchievementsView />}
        {currentView === 'games' && <GamesView />}
        {currentView === 'knowledge' && <KnowledgeView />}
        {currentView === 'challenges' && <ChallengesView />}
      </AppLayout>
    </UserStatsProvider>
  );
}

export default App;