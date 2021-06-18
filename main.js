"ui";

var x1, x2, x3, x4, x5, x6, x7, d1, d2, d3, d4, d5, d6, d7;
var y, dy1, dy2;
var time;
setScreenMetrics(1440, 3168)
//钢琴中间健位置
var dax1 = 1127;
var dax2 = 1327;
var dax3 = 1527;
var dax4 = 1727;
var dax5 = 1927;
var dax6 = 2127;
var dax7 = 2327;
var day1 = 1030;
//钢琴上面键位置
var dad1 = 1070;
var dad2 = 1270;
var dad3 = 1470;
var dad4 = 1670;
var dad5 = 1870;
var dad6 = 2070;
var dad7 = 2270;
var dady1 = 740;
//钢琴下面键位置
var dady2 = 1245;

// var zhongx1 = 1920;
// var zhongx2 = 1920;
// var zhongx3 = 1920;
// var zhongx4 = 1920;
// var zhongx5 = 1920;
// var zhongx6 = 1920;
// var zhongx7 = 1920;
// var xiaox1 = 1920;
// var xiaox2 = 1920;
// var xiaox3 = 1920;
// var xiaox4 = 1920;
// var xiaox5 = 1920;
// var xiaox6 = 1920;
// var xiaox7 = 1920;
// var xiaox8 = 1920;
x1 = dax1;
x2 = dax2;
x3 = dax3;
x4 = dax4;
x5 = dax5;
x6 = dax6;
x7 = dax7;
y1 = day1;
d1 = dad1;
d2 = dad2;
d3 = dad3;
d4 = dad4;
d5 = dad5;
d6 = dad6;
d7 = dad7;
dy1 = dady1;
dy2 = dady2;



var 当你 = "51X155XX 51X155XX1 S1X13 S1X123 3131 11X122 51X155XX 51X155431 S1X13 S11123 4321 321 1";
var 听妈妈的话 = "32431 15432 32431 61121";
var 想见你想见你想见你 = "d7d 3235 2127 7dd35 d7d 656d 5d53 465632 d7d 3235 2127 7ddrm rmd 66 65d5 3456d mrd";
var 热爱105度的你 = "3343236 21612 2232123 16616 3343213236 61177321";
var 知足 = "171551713 17153326712 1715556715 67153343621";
var 花海 = "12355 32123 12371 1717565 12355 32121 12351 17671";
var 遇见 = "56717176565 12343451233 56717121235 12343432171";
var 晴天 = "3243 1571751 166 655 5432343";
var 园游会 = "543211 512355 543211 512311 54323322332231 16123322332344";
var 我怀念的 = "122155323 122155321 122155323 2223266554 6163221 6152213 161121 161121 61232 365";
var 干杯 = "3553556715365 671536532132212 3553556715123 35432115371";
var 剩下的盛夏 = "1237112371 1231111117665 1235556332 11433 1237112371 12311112362 954343332 1711";
var 小星星 = "1155665 4433221 544332 544332 1155665 4433221";
function gequid(id) {
    switch (id) {
        case 0:
            an(当你, 200);
            break;
        case 1:
            an(想见你想见你想见你, 250);
            break;
        case 2:
            an(听妈妈的话, 250);
            break;
        case 3:
            an(热爱105度的你, 250);
            break;
        case 4:
            an(知足, 250);
            break;
        case 5:
            an(花海, 250);
            break;
        case 6:
            an(遇见, 250);
            break;
        case 7:
            an(晴天, 250);
            break;
        case 8:
            an(园游会, 250);
            break;
        case 9:
            an(我怀念的, 250);
            break;
        case 10:
            an(干杯, 250);
            break;
        case 11:
            an(剩下的盛夏, 250);
            break;
        case 12:
            an(小星星, 250);s
            break;
        default:
            toast("没有找到该歌曲。加群704345713，让他添加吧");
    }
}


ui.layout(
    <vertical>
        {/* 标题 */}
        <appbar>
            <toolbar id="toolbar" title="摩扎特QQ群:704345713" />
        </appbar>

        {/* 加群 */}
        <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
            cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <text text="QQ群:704345713" textColor="#42b983" textSize="16sp" />
                <text text="反馈bug,更多谱曲,欢迎进群交流" textColor="#999999" textSize="14sp" />
            </vertical>
            <View bg="#9be9fd" h="*" w="10" />
        </card>
        {/* 无障碍服务 */}
        <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />
            </vertical>
            <View bg="#ed3239" h="*" w="5" />
        </card>

        <card w="*" h="400" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <horizontal>
                    <text textSize="20sp">选择钢琴谱</text>
                    <spinner id="sp1" entries="当你|想见你想见你想见你|听妈妈的话(待完善)|热爱105度的你(待完善)|知足(待完善)|花海(待完善)|遇见(待完善)|晴天(待完善)|园游会(待完善)|我怀念的(待完善)|干杯(待完善)|剩下的盛夏(待完善)|小星星" />
                </horizontal>
            </vertical>
            <View bg="#8e6ed1" h="*" w="10" />
        </card>

        <button id="start" text="开始运行" />
    </vertical>
);



ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.start.on("click", function () {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    threads.start(function () {
        main();
    });

});

function yunxing() {
    setInterval(() => { }, 1000);
    var w = floaty.window(
        <frame>
            <button id="action" text="开始演奏" w="90" h="40" bg="#77ffffff" />
        </frame>
    );
    //记录按键被按下时的触摸坐标
    var xx = 0, xy = 0;
    //记录按键被按下时的悬浮窗位置
    var windowX, windowY;
    //记录按键被按下的时间以便判断长按等动作
    var downTime;

    w.action.setOnTouchListener(function (view, event) {
        switch (event.getAction()) {
            case event.ACTION_DOWN:
                xx = event.getRawX();
                xy = event.getRawY();
                windowX = w.getX();
                windowY = w.getY();
                downTime = new Date().getTime();
                return true;
            case event.ACTION_MOVE:
                //移动手指时调整悬浮窗位置
                w.setPosition(windowX + (event.getRawX() - xx),
                    windowY + (event.getRawY() - xy));
                //如果按下的时间超过1.5秒判断为长按，退出脚本
                if (new Date().getTime() - downTime > 1500) {
                    exit();
                }
                return true;
            case event.ACTION_UP:
                //手指弹起时如果偏移很小则判断为点击
                if (Math.abs(event.getRawY() - xy) < 5 && Math.abs(event.getRawX() - xx) < 5) {
                    threads.start(function () {
                        onClick();
                    });

                }
                return true;
        }
        return true;
    });

    function onClick() {
        let execution = false;
        if (!execution) {
            execution = true;
            gequid(ui.sp1.getSelectedItemPosition());
            w.action.setText('再来一次');
        } else {
            exit();
            if (execution) {
                execution = false;
            }
            w.action.setText('开始演奏');
        }
    }
}


function main() {
    // 这里写脚本的主逻辑

    toast("启动摩尔庄园");
    launchApp("摩尔庄园");
    yunxing();
    sleep(2000);
    log("运行结束");

}




function tan(notes) {
    switch (notes) {
        case "1":
            Do();
            break;
        case "2":
            Re();
            break;
        case "3":
            Mi();
            break;
        case "4":
            Fa();
            break;
        case "5":
            Sol();
            break;
        case "6":
            La();
            break;
        case "7":
            Si();
            break;
        case "d":
            dDo();
            break;
        case "r":
            rRe();
            break;
        case "m":
            mMi();
            break;
        case "f":
            fFa();
            break;
        case "s":
            sSol();
            break;
        case "l":
            lLa();
            break;
        case "x":
            xSi();
            break;
        case "D":
            DDo();
            break;
        case "R":
            RRe();
            break;
        case "M":
            MMi();
            break;
        case "F":
            FFa();
            break;
        case "S":
            SSol();
            break;
        case "L":
            LLa();
            break;
        case "X":
            XSi();
            break;
        default:
            kong();
            break;
    }
}


function Do() {
    click(x1, y1);
    sleep(time);
}

function Re() {
    click(x2, y1);
    sleep(time);
}

function Mi() {
    click(x3, y1);
    sleep(time);
}

function Fa() {
    click(x4, y1);
    sleep(time);
}
function Sol() {
    click(x5, y1);
    sleep(time);
}

function La() {
    click(x6, y1);
    sleep(time);
}

function Si() {
    click(x7, y1);
    sleep(time);
}

function dDo() {
    click(d1, dy1);
    sleep(time);
}

function rRe() {
    click(d2, dy1);
    sleep(time);
}

function mMi() {
    click(d3, dy1);
    sleep(time);
}

function fFa() {
    click(d4, dy1);
    sleep(time);
}
function sSol() {
    click(d5, dy1);
    sleep(time);
}

function lLa() {
    click(d6, dy1);
    sleep(time);
}

function xSi() {
    click(d7, dy1);
    sleep(time);
}
function DDo() {
    click(d1, dy2);
    sleep(time);
}

function RRe() {
    click(d2, dy2);
    sleep(time);
}

function MMi() {
    click(d3, dy2);
    sleep(time);
}

function FFa() {
    click(d4, dy2);
    sleep(time);
}
function SSol() {
    click(d5, dy2);
    sleep(time);
}

function LLa() {
    click(d6, dy2);
    sleep(time);
}

function XSi() {
    click(d7, dy2);
    sleep(time);
}
function kong() {
    sleep(time);
}


function an(pu, times) {
    time = times;
    for (let i = 0; i < pu.length; i++) {
        tan(pu[i]);
    }
}

//an(想见你想见你想见你,250);
//an(当你, 200);



// click(1070,740)
// 
// click(2327,1030)
// sleep(350);
// click(1070,740)
// sleep(350);
// click(1527,1030);
// sleep(350);
// click(1327,1030);
// sleep(350);
// click(1527,1030);
// sleep(350);
// click(1927,1030);



