const Service = require("./../model/serviceModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllService = (req, res, next) => {
  getAll(req, res, next, Service);
};

const getOneService = (req, res, next) => {
  getOne(req, res, next, Service);
};

const addService = (req, res, next) => {
  add(req, res, next, Service);
};

const updateService = (req, res, next) => {
  update(req, res, next, Service);
};

const deleteService = (req, res, next) => {
  deleteData(req, res, next, Service);
};

module.exports = {
  getAllService,
  getOneService,
  addService,
  updateService,
  deleteService,
};
