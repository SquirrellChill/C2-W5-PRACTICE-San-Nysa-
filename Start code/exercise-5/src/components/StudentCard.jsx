export default function StudentCard({ student }) {
  return (
    <div className="student-card">
      {/* Dynamic Image */}
      <img src={student.image} alt={student.name} />
      
      {/* Name and Info */}
      <h2>{student.name}</h2>
      <p className="student-class"><strong>Class:</strong> {student.class}</p>
      <p className="student-hobbies"><strong>Hobbies:</strong> {student.hobbies}</p>
    </div>
  );
}