// SPDX-License-Identifier: MIT
using System;using System.IO;using System.Collections.Generic;using System.Web.Script.Serialization;using Microsoft.Web.WebView2.Core;
static class AssetLibrary {
 static string Safe(string text){var s="";foreach(char c in text??"")if(char.IsLetterOrDigit(c)||c=='-'||c=='_')s+=c;else s+="-";s=s.Trim('-');return s.Length==0?"Untitled":s.Substring(0,Math.Min(80,s.Length));}
 static string Value(Dictionary<string,object> d,string key){object v;return d.TryGetValue(key,out v)?Convert.ToString(v):"";}
 internal static void Receive(CoreWebView2 core,CoreWebView2WebMessageReceivedEventArgs message,string root){
  if(!message.Source.StartsWith("https://jagoworld.example/",StringComparison.OrdinalIgnoreCase))return;
  try{var j=new JavaScriptSerializer{MaxJsonLength=80000000};var d=j.Deserialize<Dictionary<string,object>>(message.WebMessageAsJson);if(Value(d,"type")!="jago-asset-copy")return;var src=Value(d,"src");const string prefix="data:image/png;base64,";if(!src.StartsWith(prefix)||src.Length>70000000)throw new Exception("Invalid asset copy.");var bytes=Convert.FromBase64String(src.Substring(prefix.Length));if(bytes.Length<8||bytes[0]!=137||bytes[1]!=80||bytes[2]!=78||bytes[3]!=71)throw new Exception("Asset copy is not a PNG.");var folder=Path.GetFullPath(Path.Combine(root,"Asset-library",Safe(Value(d,"worldName"))+"-"+Safe(Value(d,"world")),Safe(Value(d,"folder"))));var vault=Path.GetFullPath(Path.Combine(root,"Asset-library"))+Path.DirectorySeparatorChar;if(!folder.StartsWith(vault,StringComparison.OrdinalIgnoreCase))throw new Exception("Invalid asset folder.");Directory.CreateDirectory(folder);var file=Path.Combine(folder,Safe(Value(d,"name"))+"-"+Safe(Value(d,"id"))+".png");File.WriteAllBytes(file,bytes);core.PostWebMessageAsJson(j.Serialize(new{type="jago-asset-copy-result",ok=true,id=Value(d,"id")}));}
  catch(Exception e){core.PostWebMessageAsJson(new JavaScriptSerializer().Serialize(new{type="jago-asset-copy-result",ok=false,error=e.Message}));}
 }
}
