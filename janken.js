//janken.htmlからidを取得して固定値代入
const state = $("#state");
const player = $("#player");
const com = $("#com");
const gu = $("#gu");
const cho = $("#cho");
const pa = $("#pa");
const reset = $("#reset");
const win = $("#win");
const lose = $("#lose");

//配列にじゃんけんの選択肢を入れる
//jans[0]="グー",jans[1]="チョキ",jans[2]="パー"
const jans = ["グー", "チョキ", "パー"]
//プレイヤーの選択肢を格納する変数を設定
let playjan;
//comの選択肢を格納する変数を設定
let comjan;
//勝った回数をカウント
let winCount = 0;
//負けた回数をカウントする変数を設定。初期値は０
let loseCount = 0;

//関数start()を呼び出し。
start();

//グーのボタンを押した時イベント
// gu.addEventListener("click", () => {
//     //プレイヤーのテキストにグーを表示
//     player.textContent = jans[0];
//     //プレイヤーの選択肢を格納する変数にグーを格納
//     playjan = jans[0]
//     //comの選択肢を格納する変数に配列jansからランダムに取得した選択肢を格納
//     comja = jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
//     //上記で取得した変数をcomのテキストに表示
//     com.textContent = comja;
//     //関数result()を呼び出し
//     result();
// })
$("#gu").on("click", function () {
    // プレイヤーのテキストに「グー」を表示
    $("#player").text(jans[0]);
    // プレイヤーの選択肢を格納する変数に「グー」を格納
    playjan = jans[0];
    // console.log(playjan);
    // comの選択肢を格納する変数に配列jansからランダムに取得した選択肢を格納
    var keys = Object.keys(jans);
    comjan = jans[keys[Math.floor(Math.random() * keys.length)]];
    //  console.log(comja);
    // 上記で取得した変数をcomのテキストに表示
    $("#com").text(comjan);
    // 関数result()を呼び出し
    result();
});
//チョキのボタンを押した時イベント。挙動はグーと同じ
// cho.addEventListener("click", () => {
//     player.textContent = jans[1];
//     playjan = jans[1]
//     comja = jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
//     com.textContent = comja;
//     result();
// })
$("#cho").on("click", function () {
    // プレイヤーのテキストに配列jansの2番目の要素を表示
    $("#player").text(jans[1]);
    // プレイヤーの選択肢を格納する変数に配列jansの2番目の要素を格納
    playjan = jans[1];
    // console.log(playjan);
    // comの選択肢を格納する変数に配列jansからランダムに取得した選択肢を格納
    var keys = Object.keys(jans);
    comjan = jans[keys[Math.floor(Math.random() * keys.length)]];
    // 上記で取得した変数をcomのテキストに表示
    $("#com").text(comjan);
    // 関数result()を呼び出し
    result();
});
//パーのボタンを押した時イベント。挙動はグーと同じ
// pa.addEventListener("click", () => {
//     player.textContent = jans[2];
//     playjan = jans[2]
//     comja = jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
//     com.textContent = comja;
//     result();
// })
$("#pa").on("click", function () {
    // プレイヤーのテキストに配列jansの3番目の要素を表示
    $("#player").text(jans[2]);
    // プレイヤーの選択肢を格納する変数に配列jansの3番目の要素を格納
    playjan = jans[2];
    // console.log(playjan);
    // comの選択肢を格納する変数に配列jansからランダムに取得した選択肢を格納
    var keys = Object.keys(jans);
    // console.log(jans[Math.floor(Math.random() * keys.length)]);
    comjan = jans[keys[Math.floor(Math.random() * keys.length)]];
    // 上記で取得した変数をcomのテキストに表示
    $("#com").text(comjan);
    // 関数result()を呼び出し
    result();
});

// result()の関数です。じゃんけん判定。
function result() {
    //if関数で分岐。
    //プレイヤーとcomが同じだったら、stateにテキストを表示
    console.log(playjan);
    console.log(comjan);

    if (playjan === comjan) {
        $("#state").text("あいこで・・・");
        //プレイヤーが勝った場合の分岐。
    } else if (playjan === jans[0] && comjan === jans[1] || playjan === jans[1] && comjan === jans[2] || playjan === jans[2] && comjan === jans[0]) {
        //stateにテキストを表示
        $("#state").text("かち");
        //関数display()を呼び出し
        display();
        //勝った回数に１プラス
        winCount++;
        //勝った回数をテキストに表示
        $("#win").text(winCount);
    } else {
        //stateにテキストを表示
        $("#state").text("まけ");
        //関数display()を呼び出し
        display();
        //負けた回数に１プラス
        loseCount++;
        //負けた回数をテキストに表示
        $("#lose").text(loseCount);
    }
}

//リセットボタンをクリックした時のイベント
$("#reset").on("click", function () {
    // 関数start()を呼び出し
    start();
    // stateに「最初はグー！じゃんけん・・・」というテキストを表示
    $("#state").text("最初はグー！じゃんけん・・・");
    $("#win").text("0");
    $("#lose").text("0");
    winCount = 0;
    loseCount = 0;
});

//start()の関数。ボタンの表示、非表示を設定。disabled＝falseだとボタンを表示され、disabled＝tureだと非表示となる。
function start() {
    gu.disabled = false;
    cho.disabled = false;
    pa.disabled = false;
    reset.disabled = true;
    
}

//display()の関数。ボタンの表示、非表示を設定。disabled＝falseだとボタンを表示され、disabled＝tureだと非表示となる。
function display() {
    gu.disabled = true;
    cho.disabled = true;
    pa.disabled = true;
    reset.disabled = false;
}
