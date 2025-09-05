interface ScoreThresholds {
  high: number;
  medium: number;
}

export const getScoreColor = (
  score: number,
  thresholds: ScoreThresholds = { high: 80, medium: 60 }
) => {
  if (score >= thresholds.high) return "text-green-600 dark:text-green-400";
  if (score >= thresholds.medium) return "text-yellow-600 dark:text-yellow-400";
  return "text-red-600 dark:text-red-400";
};

export const getScoreBadgeColor = (
  score: number,
  thresholds: ScoreThresholds = { high: 80, medium: 60 }
) => {
  if (score >= thresholds.high)
    return "bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-300";
  if (score >= thresholds.medium)
    return "bg-yellow-100 text-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-300";
  return "bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-300";
};
