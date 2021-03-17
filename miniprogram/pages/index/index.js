import { getArticleList } from '../../service/article';
Page({
  data: {
    list: []
  },
  async onReady() {
    const { data, total } = await getArticleList({ page: 1, pageSize: 10 });
    this.setData({ list: data })
  }
})