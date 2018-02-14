//MeteorにおいてSessionオブジェクトは、
//同一セッション内（同じユーザーかつ同じブラウザ・タブ内）
//でグローバル、かつ、単一（シングルトン）のオブジェクトです
//このオブジェクトにはKey-value形式でデータを格納すること
//が可能で、リアクティブなデータストアとして利用可能です。


//Session変数の初期化
initSessionVars = function(){

//Node関連の変数
Session.setDefault('isMining', false);
Session.setDefault('hashRate', 0);
Session.setDefault('peerCount', 0);

};
