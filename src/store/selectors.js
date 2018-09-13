/**
 * Selector: orders tasks based on some criteria.
 */
export const orderedTasks = (tasks) => {
  return [
    ...tasks.filter(t => !t.done && t.favorite),
    ...tasks.filter(t => !t.done && !t.favorite),
    ...tasks.filter(t => t.done)
  ];
};
