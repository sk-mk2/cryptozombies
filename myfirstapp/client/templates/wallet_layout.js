Template.walletLayout.helpers({
    //ナビゲーションバーのアイテムをハイライトするためのヘルパー関数
    activeIfCurrent: function (template){
        let currentRoute = Router.current();
        if(currentRoute && template === Router.current().route.getName()){
            return "active";
        }else{
            return "";
        }
    }
});
