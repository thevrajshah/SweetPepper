import courses from "../../../data.json";

export default function personHandler({ query: { id } }, res) {
  const filtered = courses.filter((p) => p.id === id);

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Course with id: ${id} not found.` });
  }
}
