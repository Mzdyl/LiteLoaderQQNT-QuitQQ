const { app, BrowserWindow, ipcMain } = require("electron");

// 关闭程序
ipcMain.on("closeApp", () => {
    app.quit();
});