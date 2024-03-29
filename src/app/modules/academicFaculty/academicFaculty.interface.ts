import { Model } from 'mongoose';

export type IAcademicFaculty = {
  title: string;
  syncId?: string;
};

export type AcademicFacultyModel = Model<IAcademicFaculty>;

export type IAcademicFacultyFilter = {
  searchTerm?: string;
};

export type IAcademicFacultyEvent = {
  title: string;
  id: string;
}; 
