// pages/api/createAssignment.js
import { firestore } from '../../firebase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, dueDate, classroomId } = req.body;

    try {
      const assignmentId = firestore.collection('classrooms').doc().id; // Generate an ID for the assignment
      const assignment = {
        assignmentId,
        title,
        description,
        dueDate: firebase.firestore.Timestamp.fromDate(new Date(dueDate)),
        submissions: []
      };

      // Update the classroom's assignments array
      await firestore.collection('classrooms').doc(classroomId).update({
        assignments: firebase.firestore.FieldValue.arrayUnion(assignment)
      });

      res.status(200).json({ id: assignmentId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
