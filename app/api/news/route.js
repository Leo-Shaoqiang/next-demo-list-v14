// pages/api/news.js
export default async function handler(req, res) {
    // 模拟从数据库获取新闻列表，延迟 2 秒
    await new Promise((resolve) => setTimeout(resolve, 2000));
    res.status(200).json([
      { id: 1, title: 'News 1' },
      { id: 2, title: 'News 2' },
    ]);
  }