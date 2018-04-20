var cheerio = require("cheerio");
var dateFormat = require('dateformat');
var rp = require('request-promise');
var data = []
function crawler(){
    rp('http://invoice.etax.nat.gov.tw/')
    .then(function (htmlString) {

        var $ = cheerio.load(htmlString);
        console.log($("#area1 > h2:nth-child(2)").text())
        console.log($("#area1 > table > tbody > tr:nth-child(2) > td:nth-child(2) > span").text());
        console.log($("#area1 > table > tbody > tr:nth-child(3) > td:nth-child(2) > span").text());
        const a=$("#newFirstPrize").text().split("、");
        console.log(a[0]);
        console.log($("#newAddSixPrize").text().split("、"));
        // for (var a = 0; a < $("td[class=TitleForRate]").length; a++) {

        //     if ($($("td[class=TitleForRate]")[a]).text() == "澳幣") {
        //         var CurrencyType = $($("td[class=TitleForRate]")[a]).text()
        //         var day = dateFormat(new Date().now, "yyyy-mm-dd h:MM:ss");
        //         var time = $("em");
        //         console.log("實際更新時間：", day);
        //         console.log("最新更新時間：", $(time).text())
        //         console.log("幣別：", $($("td[class=TitleForRate]")[a]).text())
        //         var BuyRate = $($("td[class=TitleForRate]")[a]).next()
        //         console.log("買匯：", $(BuyRate).text())
        //         var SaleRate = $(BuyRate).next()
        //         console.log("賣匯:", $(SaleRate).text())
        //         console.log("=======================================");

        //         data.push([day, $(time).text(), $($("td[class=TitleForRate]")[a]).text(), $(BuyRate).text(), $(SaleRate).text()])
        //     }
        // }
    })
}
crawler();
// setInterval(function(){
//     crawler()
// },300000);
