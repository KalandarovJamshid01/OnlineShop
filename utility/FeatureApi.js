class FeatureApi {
  constructor(clientQuery, databaseQuery) {
    this.clientQuery = clientQuery;
    this.databaseQuery = databaseQuery;
  }
  //filter

  filter() {
    let queryClient = JSON.stringify(this.clientQuery);
    queryClient = queryClient.replace(/\bgt|gte|lte|lt\b/g, (val) => `$${val}`);
    let queryData = JSON.parse(queryClient);
    this.databaseQuery = this.databaseQuery.find(queryData);
    return this;
  }

  //sorting

  sorting() {
    if (this.clientQuery.sort) {
      const sortQuery = this.clientQuery.sort.split(",").join(" ");
      this.databaseQuery = this.databaseQuery.sort(sortQuery);
    } else {
      this.databaseQuery = this.databaseQuery.sort("-createdAt");
    }
    return this;
  }
  //Selecting fields

  fields() {
    if (this.clientQuery.field) {
      const fieldQuery = this.clientQuery.field.split(",").join(" ");
      this.databaseQuery = this.databaseQuery.select(fieldQuery);
    } else {
      this.databaseQuery = this.databaseQuery.select("-__v");
    }
    return this;
  }

  //pagination

  pagination() {
    const page = this.clientQuery.page * 1 || 1;
    const limit = this.clientQuery.limit * 1 || 10;
    const skip = (page - 1) * limit;
    this.databaseQuery = this.databaseQuery.skip(skip).limit(limit);
    return this;
  }
}

module.exports = FeatureApi;
