'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ManagementDepartmentRouters = void 0;
const express_1 = __importDefault(require('express'));
const managementDepartment_controller_1 = require('./managementDepartment.controller');
const router = express_1.default.Router();
router.post(
  '/create-management',
  managementDepartment_controller_1.ManagementDepartmentController
    .createManagementDepartment
);
router.get(
  '/',
  managementDepartment_controller_1.ManagementDepartmentController
    .getAllManagementDepartments
);
router.get(
  '/:id',
  managementDepartment_controller_1.ManagementDepartmentController
    .getSingleManagementDepartment
);
router.patch(
  '/:id',
  managementDepartment_controller_1.ManagementDepartmentController
    .updateManagementDepartment
);
exports.ManagementDepartmentRouters = router;
