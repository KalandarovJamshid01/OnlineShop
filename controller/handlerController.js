const AppError = require("./../utility/AppError");
const { catchErrorAsyncPro } = require("./../utility/catchErrorAsync");
const FeatureApi = require("./../utility/FeatureApi");
const resFunc = (res, statusCode, data) => {
  if (Array.isArray(data)) {
    res.status(statusCode).json({
      status: "Succes",
      result: data.length,
      data: data,
    });
  } else {
    res.status(statusCode).json({
      status: "Succes",
      data: data,
    });
  }
};

const getAll = catchErrorAsyncPro(
  async (req, res, next, Model, options, options2) => {
    let datas;
    const filter = new FeatureApi(req.query, Model)
      .filter()
      .sorting()
      .fields()
      .pagination();

    if (options) {
      if (options2) {
        datas = await filter.databaseQuery.populate(options).populate(options2);
      } else {
        datas = await filter.databaseQuery.populate(options);
      }
    } else {
      datas = await filter.databaseQuery;
    }

    resFunc(res, 200, datas);
  }
);

const getOne = catchErrorAsyncPro(async (req, res, next, Model) => {
  const data = await Model.findById(req.params.id);
  resFunc(res, 200, data);
});

const add = catchErrorAsyncPro(async (req, res, next, Model) => {
  const data = await Model.create(req.body);
  resFunc(res, 201, data);
});

const update = catchErrorAsyncPro(async (req, res, next, Model) => {
  const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  resFunc(res, 203, data);
});

const deleteData = catchErrorAsyncPro(async (req, res, next, Model) => {
  const data = await Model.findByIdAndDelete(req.params.id);
  resFunc(res, 204, data);
});
module.exports = { getAll, getOne, add, update, deleteData };
