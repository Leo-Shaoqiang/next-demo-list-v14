// pages/api/user.js
export default async function handler(req, res) {
    // 模拟从数据库获取用户信息，延迟 1 秒
    await new Promise((resolve) => setTimeout(resolve, 1000));
    res.status(200).json({ name: 'John Doe' });
  }