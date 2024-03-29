import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { academicFacultyFilterableFields } from './academicFaculty.constant';
import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFacultyService } from './academicFaculty.service';

const createFaculty: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicFacultyService.createFaculty(
      academicSemesterData
    );
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      status: 'success',
      message: 'Academic Faculty created successfully',
      data: result,
    });
  }
);

const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterableFields);
  const paginationOption = pick(req.query, paginationFields);
  const result = await AcademicFacultyService.getAllFaculty(
    filters,
    paginationOption
  );
  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    status: 'success',
    meta: result.meta,
    data: result.data,
  });
});

// const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
//   const result = await AcademicFacultyervice.getSingleSemester(req.params.id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     status: 'success',
//     data: result,
//   });
//   // next();
// });

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const result = await AcademicFacultyService.updateFaculty(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: 'success',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicFacultyService.deleteFaculty(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: 'success',
    data: result,
  });
});
export const AcademicFacultyController = {
  createFaculty,
  getAllFaculty,
  updateFaculty,
  deleteFaculty,
  //   getSingleSemester,
};
