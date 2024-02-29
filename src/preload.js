const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("window_actions", {
	closeApp: () => ipcRenderer.send('closeApp')
});