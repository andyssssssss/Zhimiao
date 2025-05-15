# MiaoAndZhi

情侣纪念日与焦虑抑制剂网站

## 启动方式

1. 安装依赖

   ```bash
   npm install
   ```

2. 配置 Firebase

   - 在 `src/firebase/config.js` 填入你的 Firebase 配置信息

3. 启动开发服务器

   ```bash
   npm run dev
   ```

4. （可选）用 ngrok 暴露本地端口

   ```bash
   ngrok http 5173
   ```

## 主要依赖

- React
- Firebase
- React Router DOM
- dayjs
- Vite 