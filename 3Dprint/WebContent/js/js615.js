function getUrlParam(key) {
	var aQuery = window.location.href.split("?");  //ȡ��Get����
    if(aQuery.length > 1)
    {
        var aBuf = aQuery[1].split("&");
        for(var i=0, iLoop = aBuf.length; i<iLoop; i++)
        {
            var aTmp = aBuf[i].split("=");  //����key��Value
            if(aTmp[0] == key) {
            	return aTmp[1];
            }
        }
     }
     return "";
}