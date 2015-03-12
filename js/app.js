(function(){
var app = angular.module("pentagon",[]);
    
    app.controller("PanelController",function(){
    this.tab = 1;
    this.selectTab = function(tabValue){
        this.tab = tabValue;
    };    
    this.isTab = function(tabValue){
        return (this.tab==tabValue);
    };
        
        this.panelData= [
            {
                aboutUs: 'Pentagon, from a shack styled seasonal restaurant to a popular fine dining today, we can just say thanks to our regular clients. Now the restaurant is open throughout the year. In these last 10 years or so we have achieved a lot. We are known for our top end quality food and entertainment. And the support of our regular clients consists of locals & tourists are overwhelming.',
                aboutFood:'We serve Goan, Indian, Chinese & Continental. Pick your fresh seafood from our seafood display counter. Our chefs will cook them to your penchant. Some of our popular dishes are Xanok fish fillet Goan masala fry, Tandoori Red snapper, Pork Sausages, Lobster Thermidor & Tiger Prawns in butter garlic to name a few. It’s an extensive food menu along with wide range of wines & Cocktails. A special mention about our cocktails which are far superior to any other place in South Goa. The wine menu consists of Indian & International popular brands. '
            }
        
        
        ];
    });
    
    
    


})();