// 统一封装云函数调用, 集中处理错误、解构数据
export default async (name, data, config = {}) => {
  const { showMessage = true, ...rest } = config;
  return wx.cloud.callFunction({
    name,
    data,
    ...rest
  }).then(res => res.result).catch(err => {
    //统一错误处理
    const { errMsg } = err;
    if (showMessage) {
      wx.showToast({
        title: errMsg || '请求出错了'
      })
    }
    return Promise.reject(err);
  });
}