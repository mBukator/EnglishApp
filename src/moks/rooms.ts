import { Room } from "src/room/room.entity";

// Mock data for the rooms
export const ROOMS: Room[] = [
  {
    _id: 1,
    name: 'Advanced English',
    description: "This room is for students who have a strong understanding of English.",
    teacherId: 1,
    studentId: 2,
    maxStudents: 1,
    task: 'Write an essay about War in Ukraine'
  },
  {
    _id: 2,
    name: 'Beginner English',
    description: "This room is for students who have a beginner understanding of English.",
    teacherId: 1,
    studentId: 4,
    maxStudents: 5,
    task: 'Write 5 sentences using Past Simple'
  },
];
  