import { useState, useEffect } from 'react';

const STORAGE_KEY = 'rifa_maths_progress';

const defaultProgress = {
  quizScores: {},        // topicId -> [scores]
  flashcardsCompleted: [], // topicIds
  weakAreas: {},         // topicId -> [question indices]
  achievements: [],
  totalStars: 0,
  gamesPlayed: 0,
  visitedTopics: [],
  lastVisit: null,
  streakDays: 0,
};

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultProgress, ...JSON.parse(stored) } : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const recordQuizScore = (topicId, score, total, wrongQuestions) => {
    setProgress(prev => {
      const newScores = { ...prev.quizScores };
      if (!newScores[topicId]) newScores[topicId] = [];
      newScores[topicId] = [...newScores[topicId], { score, total, date: new Date().toISOString() }];

      const newWeakAreas = { ...prev.weakAreas };
      if (wrongQuestions && wrongQuestions.length > 0) {
        newWeakAreas[topicId] = [...new Set([...(newWeakAreas[topicId] || []), ...wrongQuestions])];
      } else {
        // Perfect score - clear weak areas for this topic
        delete newWeakAreas[topicId];
      }

      const starsEarned = Math.round((score / total) * 3);
      return {
        ...prev,
        quizScores: newScores,
        weakAreas: newWeakAreas,
        totalStars: prev.totalStars + starsEarned,
      };
    });
  };

  const recordFlashcardComplete = (topicId) => {
    setProgress(prev => ({
      ...prev,
      flashcardsCompleted: [...new Set([...prev.flashcardsCompleted, topicId])],
    }));
  };

  const recordTopicVisit = (topicId) => {
    setProgress(prev => ({
      ...prev,
      visitedTopics: [...new Set([...prev.visitedTopics, topicId])],
      lastVisit: new Date().toISOString(),
    }));
  };

  const recordGamePlayed = () => {
    setProgress(prev => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }));
  };

  const unlockAchievement = (achievementId) => {
    setProgress(prev => {
      if (prev.achievements.includes(achievementId)) return prev;
      return { ...prev, achievements: [...prev.achievements, achievementId] };
    });
  };

  const getTopicMastery = (topicId) => {
    const scores = progress.quizScores[topicId] || [];
    if (scores.length === 0) return 0;
    const latest = scores[scores.length - 1];
    return Math.round((latest.score / latest.total) * 100);
  };

  const clearProgress = () => {
    setProgress(defaultProgress);
  };

  return {
    progress,
    recordQuizScore,
    recordFlashcardComplete,
    recordTopicVisit,
    recordGamePlayed,
    unlockAchievement,
    getTopicMastery,
    clearProgress,
  };
}
