var cheerio = require("cheerio");
var dateFormat = require('dateformat');
var rp = require('request-promise');
var data = []
const crawler=()=>{
    rp('http://invoice.etax.nat.gov.tw/')
    .then(function (htmlString) {

        var $ = cheerio.load(htmlString);
        const dateTime=$("#area1 > h2:nth-child(2)").text();

        const firstPrize=$("#area1 > table > tbody > tr:nth-child(2) > td:nth-child(2) > span").text()

        const secondPrize=$("#area1 > table > tbody > tr:nth-child(3) > td:nth-child(2) > span").text()

        const thirdPrizeArray=$("#newFirstPrize").text().split("、");
        const newAddSixPrizeArray=$("#newAddSixPrize").text().split("、");        
    })
}
crawler();

