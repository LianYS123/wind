// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const collect = name => {
  return cloud.database().collection(name);
}

// 云函数入口函数
exports.main = async ({ page, pageSize }, context) => {
  const { data } = await collect('article').skip((page - 1) * pageSize).limit(pageSize).get();
  const { total } = await collect('article').count();
  console.log(data, total);
  return {
    data, total
  };
}