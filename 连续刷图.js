console.log('脚本启动');
sleep(2000);
/*console.log('请求截图');
if (!requestScreenCapture(true)) {
  toast('请求截图失败');
  console.error('请求截图失败');
  exit();
}
toastLog('请求截图成功');
*/
auto();
requestScreenCapture();

sleep(2000);
xx = 800 + Math.round(Math.random() * 120);
yy = 900 + Math.round(Math.random() * 140);
click(xx,yy);
click(xx,yy);

do{
    log("找下一步");
    var 下一步 = images.read("./img/下一步.jpg");
    var next = findImage(captureScreen(), 下一步, {threshold: 0.8});
    if(next){
        log("找到下一步");
        sleep(300);
        next.x += Math.round(Math.random() * 下一步.getWidth());
        next.y += Math.round(Math.random() * 下一步.getHeight());
        click(next.x,next.y);
    }else{
        log("没找到下一步，继续");
    }
  }
while(next==null);

do{
    log("找再次挑战");
    var 再次挑战 = images.read("./img/再次挑战.jpg");
    var again = findImage(captureScreen(), 再次挑战, {threshold: 0.8});
    if(again){
        log("找到再次挑战");
        sleep(300);
        again.x += Math.round(Math.random() * 再次挑战.getWidth());
        again.y += Math.round(Math.random() * 再次挑战.getHeight());
        click(again.x,again.y);
    }else{
        log("没找到再次挑战，继续");
    }
  }
while(again==null);

do{
    log("找OK");
    var PCR_OK = images.read("./img/PCR_OK.jpg");
    var OK = findImage(captureScreen(), PCR_OK, {threshold: 0.8});
    if(OK){
        log("找到OK");
        sleep(300);
        OK.x += Math.round(Math.random() * PCR_OK.getWidth());
        OK.y += Math.round(Math.random() * PCR_OK.getHeight());
        click(OK.x,OK.y);
    }else{
        log("没找到OK，继续");
    }
  }
while(OK==null);

var floating = images.read("./img/floating.jpg");
var window = findImage(captureScreen(), floating, {threshold: 0.8});
if(window){
    log("找到悬浮窗");
    window.x += Math.round(Math.random() * floating.getWidth());
    window.y += Math.round(Math.random() * floating.getHeight());
    click(window.x,window.y);
}else{
    log("没找到悬浮窗");
}
sleep(500)

var jsmenu = images.read("./img/jsmenu.jpg");
var list = findImage(captureScreen(), jsmenu, {threshold: 0.8});
if(list){
    log("找到脚本列表");
    list.x += Math.round(Math.random() * jsmenu.getWidth());
    list.y += Math.round(Math.random() * jsmenu.getHeight());
    click(list.x,list.y);
}else{
    log("没找到脚本列表");
}
sleep(500)

do{
    log("找脚本");
    var mainjs = images.read("./img/连续刷图.jpg");
    var js = findImage(captureScreen(), mainjs, {threshold: 0.8});
    if(js){
        log("找到脚本");
        click(js.x,js.y);
    }else{
        log("没找到脚本");
        swipe(1020, 754, 1020, 369, 200);//1020，754/1020，369
        sleep(500)
    }
  }
  while(js==null);