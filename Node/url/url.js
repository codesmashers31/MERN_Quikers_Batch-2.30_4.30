import {URL} from "url"


const myUrl = new URL("https://www.amazon.in/datas/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=10166583623850514127&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061897&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")





console.log(myUrl.host);
console.log(myUrl.pathname);
console.log(myUrl.searchParams);

console.log(myUrl.searchParams.get("adgrpid"));