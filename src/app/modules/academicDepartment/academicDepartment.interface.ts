import { Model, Types } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';

export type IAcademicDepartment = {
  title: string;
  syncId?:string;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
};

export type AcademicDepartmentModel = Model<
  IAcademicDepartment,
  Record<string, unknown>
>;

export type IAcademicDepartmentFilter = {
  searchTerm?: string;
  academicFaculty?: Types.ObjectId;
};

export type IAcademicDepartmentEvent = {
  title: string;
  academicFacultyId:string ;
  id:string;
};