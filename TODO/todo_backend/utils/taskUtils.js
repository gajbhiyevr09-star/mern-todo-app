function validateTask(task) {
  return typeof task === "string" && task.trim().length > 0;
}

function calculateCompletionPercentage(total, completed) {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

module.exports = {
  validateTask,
  calculateCompletionPercentage,
};