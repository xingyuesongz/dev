var err404='网络连接中断';

function err(errorCode){
	var result=eval('err'+errorCode);
	if(result==null || result ==undefined)
		return '未知错误 '+errorCode;
	else
		return 'ERROR '+errorCode+' : '+result;
}

