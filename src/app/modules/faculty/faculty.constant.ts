export const gender = ['male', 'female'];
export const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const facultySearchableFields = [
  'id',
  'email',
  'contactNo',
  'name.firstName',
  'name.middleName',
  'name.lastName',
];

export const facultyFilterableFields = [
  'searchTerm',
  'id',
  'bloodGroup',
  'email',
  'contactNo',
  'academicYear',
  'emergencyContactNo',
];

export const EVENT_FACULTY_UPDATED = 'faculty.updated';