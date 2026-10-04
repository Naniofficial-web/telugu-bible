const {app,BrowserWindow,ipcMain}=require("electron");
const path=require("path");
ipcMain.handle("dl",async(e,url)=>{
 const r=await fetch(url);
 if(!r.ok)throw new Error("HTTP "+r.status);
 return new Uint8Array(await r.arrayBuffer());
});
app.whenReady().then(()=>{
 const w=new BrowserWindow({width:560,height:860,webPreferences:{preload:path.join(__dirname,"preload.js")}});
 w.setMenuBarVisibility(false);
 w.loadFile("index.html");
});
app.on("window-all-closed",()=>app.quit());
