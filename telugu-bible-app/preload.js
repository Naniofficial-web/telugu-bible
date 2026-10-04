const {contextBridge,ipcRenderer}=require("electron");
contextBridge.exposeInMainWorld("api",{dl:u=>ipcRenderer.invoke("dl",u)});
