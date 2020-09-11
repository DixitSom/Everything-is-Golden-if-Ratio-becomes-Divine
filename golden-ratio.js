function goldenratioMain() {
    w = 440;
    h = 500;
    aClr = "#FF9B00";
    bClr = "#FF00EC";
    tClr = "#000000";
    goldClr = "#00FF00";
    notClr = "#FF0000";
    phi = 1.61803398874989484820;
    landQ = true;
    s = "";
    s += '<div style="position:relative; width:' + w + 'px; height:' + h + 'px; border: none; border-radius: 0px; background-color: #EAEAEA; margin:auto; display:block;">';
    s += '<canvas id="canvasId" width="' + w + '" height="' + h + '" style="z-index:1;"></canvas>';
    s += '<div style="font: 10pt arial; font-weight: bold; color: #888888; position:absolute;  left:180px; top:30px;">Drag me</div>';
    s += '<input type="range" id="r1"  value="50" min="0" max="100" step=".01" style="z-index:2; position:absolute; left:7px; margin-left: 7px; top:15px; width:414px; height:17px; border: none;" oninput="go()" onchange="go()" />';
    s += '<input type="text" id="num" style="color: #262727; background-color: #FFFFFF; text-align:center; font-size: 14pt; position:absolute; left:155px; top:90px; width:150px; border-radius: 5px; " placeholder="Enter length" onKeyUp="go()" />';
    s += '<div id="f1a" style="font: bold 12pt Arial; color:' + aClr + '; position:absolute; left:50px; top:130px; text-align:center;"></div>';
    s += '<div id="f1b" style="font: bold 12pt Arial; color:' + bClr + '; position:absolute; left:50px; top:149px; text-align:center; border-top: 2px solid black;"></div>';
    s += '<div style="font: bold 13pt Arial; position:absolute; left:90px; top:140px; text-align:center;">=</div>';
    s += '<div id="f1" style="font: bold 14pt Arial; color:' + aClr + '; position:absolute; left:110px; top:140px; text-align:center;"></div>';
    s += '<div id="f2t" style="font: bold 12pt Arial; color:' + tClr + '; position:absolute; left:50px; top:180px; text-align:center;"></div>';
    s += '<div id="f2a" style="font: bold 12pt Arial; color:' + aClr + '; position:absolute; left:50px; top:199px; text-align:center; border-top: 2px solid black;"></div>';
    s += '<div style="font: bold 13pt Arial; position:absolute; left:90px; top:190px; text-align:center;">=</div>';
    s += '<div id="f2" style="font: bold 14pt Arial; color:' + tClr + '; position:absolute; left:110px; top:190px; text-align:center;"></div>';
    s += '<div id="instr" style="font: 14pt Arial; position:absolute; left:180px; top:150px; text-align:center;"></div>';
    s += '<button id="phiBtn" style="z-index:2; position:absolute; left:360px; top:150px;" class="togglebtn"  onclick="makePhi()" >&nbsp;=&nbsp;</button>';
    s += '<div id="rectw" style="font: bold 12pt Arial; position:absolute; left:50px; top:180px; text-align:center;"></div>';
    s += '<div id="recth" style="font: bold 12pt Arial; position:absolute; left:50px; top:180px; text-align:center;"></div>';
    s += '';
    s += '</div>';
    document.write(s);
    el = document.getElementById('canvasId');
    ratio = 4;
    el.width = w * ratio;
    el.height = h * ratio;
    el.style.width = w + "px";
    el.style.height = h + "px";
    g = el.getContext("2d");
    g.setTransform(ratio, 0, 0, ratio, 0, 0);
    go();
}
function makePhi() {
    var r1 = document.getElementById("r1");
    r1.value = (phi - 1) * 100;
    go();
}
function go() {
    var r1 = document.getElementById("r1");
    var v = r1.value;
    v = v / 100;
    var drawScale = 400;
    var abHt = 50;
    var tHt = 85;
    var lt = 20;
    var phiQ = false;
    if (Math.abs(v - (phi - 1)) < 0.002) {
        v = phi - 1;
        phiQ = true;
        console.log("phiQ", phiQ);
    }
    var show = document.getElementById("num");
    var showScale = show.value;
    var a = (v * showScale).toPrecision(3);
    var b = (showScale - a).toPrecision(3);
    var t = showScale.toString();
    document.getElementById("f1a").innerHTML = a;
    document.getElementById("f1b").innerHTML = b;
    f1 = (v / (1 - v)).toPrecision(4);
    if (f1 == Number.POSITIVE_INFINITY)
        f1 = "Undefined";
    document.getElementById("f1").innerHTML = f1;
    document.getElementById("f2t").innerHTML = t;
    document.getElementById("f2a").innerHTML = a;
    f2 = (1 / v).toPrecision(4);
    if (f2 == Number.POSITIVE_INFINITY)
        f2 = "Undefined";
    document.getElementById("f2").innerHTML = f2;
    g.clearRect(0, 0, el.width, el.height);
    var instr = "";
    if (phiQ) {
        g.fillStyle = "#fffff0";
        g.beginPath();
        g.rect(105, 130, w - 110, 90);
        g.fill();
        document.getElementById("f1").style.color = goldClr;
        document.getElementById("f2").style.color = goldClr;
        document.getElementById("instr").style.color = goldClr;
        instr = "They are the same!<br/>The Golden Ratio!";
    } else {
        g.fillStyle = "#ffffff";
        g.beginPath();
        g.rect(105, 130, w - 110, 90);
        g.fill();
        document.getElementById("f1").style.color = notClr;
        document.getElementById("f2").style.color = notClr;
        document.getElementById("instr").style.color = notClr;
        instr = "Try to make<br/>these the same.";
    }
    document.getElementById("instr").innerHTML = instr;
    var rectX = 100;
    var rectY = 240;
    g.fillStyle = "#eeffee";
    g.beginPath();
    g.fill();
    if (phiQ) {
        g.strokeStyle = goldClr;
        g.fillStyle = "#f1f1be";
    } else {
        g.strokeStyle = "#000000";
        g.fillStyle = "#FFECBB";
    }
    g.beginPath();
    g.font = "bold 11pt Verdana";
    g.lineWidth = 3;
    if (landQ) {
        wd = 240;
        ht = wd * v;
        g.rect(110, rectY, wd, ht);
        g.stroke();
        g.fill();
        setDiv("rectw", t.toString(), rectX + wd / 2, rectY + 5);
        setDiv("recth", a.toString(), 112, rectY + ht / 2 - 10);
    } else {
        ht = 240;
        wd = ht * v;
        g.rect((w - wd) / 2, rectY, wd, ht);
        g.stroke();
        g.fill();
        setDiv("rectw", t.toString(), (w / 2) - 10, rectY + 5);
        setDiv("recth", (t / v).toPrecision(4), (w - wd) / 2, rectY + 110);
    }
    g.lineWidth = 2;
    g.strokeStyle = aClr;
    g.fillStyle = aClr;
    g.beginPath();
    g.moveTo(lt, abHt);
    g.lineTo(lt + v * drawScale, abHt);
    g.drawArrow(lt, abHt, 20, 2, 20, 10, Math.PI);
    g.drawArrow(lt + v * drawScale, abHt, 20, 2, 20, 10, 0);
    g.stroke();
    g.fill();
    g.font = "12pt Verdana";
    g.fillText(a.toString(), v / 2 * drawScale, abHt + 20);
    g.lineWidth = 2;
    g.strokeStyle = bClr;
    g.fillStyle = bClr;
    g.beginPath();
    g.moveTo(lt + v * drawScale, abHt);
    g.lineTo(lt + drawScale, abHt);
    g.drawArrow(lt + v * drawScale, abHt, 20, 2, 20, 10, Math.PI);
    g.drawArrow(lt + drawScale, abHt, 20, 2, 20, 10, 0);
    g.stroke();
    g.fill();
    g.font = "12pt Verdana";
    g.fillText(b.toString(), (v + 1) / 2 * drawScale, abHt + 20);
    g.lineWidth = 2;
    g.strokeStyle = tClr;
    g.fillStyle = tClr;
    g.beginPath();
    g.moveTo(lt, tHt);
    g.lineTo(lt + drawScale, tHt);
    g.drawArrow(lt, tHt, 20, 2, 20, 10, Math.PI);
    g.drawArrow(lt + drawScale, tHt, 20, 2, 20, 10, 0);
    g.stroke();
    g.fill();
}
function setDiv(id, txt, x, y) {
    div = document.getElementById(id);
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.innerHTML = txt;
}
CanvasRenderingContext2D.prototype.drawArrow = function(x0, y0, totLen, shaftHt, headLen, headHt, angle, sweep, invertQ) {
    var g = this;
    var pts = [[0, 0], [-headLen, -headHt / 2], [-headLen + sweep, -shaftHt / 2], [-totLen, -shaftHt / 2], [-totLen, shaftHt / 2], [-headLen + sweep, shaftHt / 2], [-headLen, headHt / 2], [0, 0]];
    if (invertQ) {
        pts.push([0, -headHt / 2], [-totLen, -headHt / 2], [-totLen, headHt / 2], [0, headHt / 2]);
    }
    for (var i = 0; i < pts.length; i++) {
        var cosa = Math.cos(-angle);
        var sina = Math.sin(-angle);
        var xPos = pts[i][0] * cosa + pts[i][1] * sina;
        var yPos = pts[i][0] * sina - pts[i][1] * cosa;
        if (i == 0) {
            g.moveTo(x0 + xPos, y0 + yPos);
        } else {
            g.lineTo(x0 + xPos, y0 + yPos);
        }
    }
}
;
