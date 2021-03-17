import xcall from '../utils/xcall';
export const getArticleList = (params) => {
  return xcall('article-list', params);
}