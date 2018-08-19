// 数学 生成唯一随机数
function makeTimeStamp ()
{
	var dateTime = new Date ();
	var timeStamp = dateTime.getTime ();
	if ( typeof ( timeStamp ) == 'undefined' || timeStamp == null )
	{
		timeStamp = Math.floor ( Math.random () * 10000 * 10000 );
	}
	return 'id'+timeStamp;
};

//数学 四舍五入
function round(number,e){
	number.toString().replace(/^(\d+\.\d{2})\d*$/,"$1");
	return parseFloat(number).toFixed(e);
}

// 获取函数名称
function getFuncName ( func )
{
	if ( typeof ( func ) == 'string' )
	{
		return func;
	}
	else if ( typeof ( func ) == 'function' )
	{
		var funcText = func.toString ();
		funcName = funcText.match ( /^function\s*([^\(]+)/ )[1];
		return funcName;
	}
	else
	{
		return null;
	}
}

//根据名字获取单选
function getCheckBoxValue( name )
{
	var r = document.getElementsByName( name );
	
	var result = '';
	if( r )
	{
		for(var j=0;j<r.length;j++)
		{
			if(r[j].checked == true)
			{
				if( result != '' ) result += '_';
				result +=  r[j].value;
			}
		}
	}
	return result;
}

function getViewportHeight() {
 var height=0;
 if(window.innerHeight){
 height=window.innerHeight-18;}
 else if(document.documentElement&&document.documentElement.clientHeight){
 height=document.documentElement.clientHeight;}
 else if(document.body&&document.body.clientHeight){
 height=document.body.clientHeight;}
 return height;
}

function getViewportScrollY() {
 var scrollY=0;
 if(document.documentElement&&document.documentElement.scrollTop){
 scrollY=document.documentElement.scrollTop;}
 else if(document.body&&document.body.scrollTop){
 scrollY=document.body.scrollTop;}
 else if(window.pageYOffset){
 scrollY=window.pageYOffset;}
 else if(window.scrollY){
 scrollY=window.scrollY;}
 return scrollY;
}


//弹屏
var dlg = {};
gzIndex = 1000;
function opdlg( o, t, m,  c, cov, drop ){
    
	if( o == null )
	{
		o = makeTimeStamp();
	}


	
	if( cov )
	{
		var mask = document.createElement ( 'div' );
		mask.style.position = 'absolute';
		mask.style.zIndex = gzIndex++;
		mask.style.top ="0px";
		mask.style.left = "0px";
		mask.style.height = (document.body.clientHeight+document.body.scrollTop)+"px";
		mask.style.width = (document.body.offsetWidth +document.body.scrollLeft)+"px";
		mask.id=o+'_mask';
		mask.className = 'tra_30';

		mask.innerHTML = '<iframe marginwidth=0 marginheight=0 frameborder=0 src="/js/lhgdialog/bpage.html" style="width:100%;height:100%;background-cloor:#000000;"></iframe>';
		

		document.body.appendChild(mask);
	}

	var showBox = document.createElement ( 'div' );
	showBox.style.position = 'absolute';
	showBox.style.zIndex = gzIndex++;
	showBox.id = o;
	
	if( typeof( m ) == 'string' )
	{
		showBox.innerHTML = m;
	}
	else
	{
		showBox.appendChild(m);
	}

	showBox.innerHTML = '<table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="lhgdig_leftTop"></td><td class="lhgdig_top" id="lhgdig_drag"><div class="lhgdig_title" '+(drop==true?'onmousedown="setDragObj (\'' + o + '\', 0);"':'')+'><span class="lhgdig_icon" id="lhgdig_icon"></span>'+t+'</div>'+(c==null?'<div style="display: block;" class="lhgdig_xbtn" onclick="dlg[\''+o+'\'].cancel()"></div>':'')+'</td><td class="lhgdig_rightTop"></td></tr><tr><td id="lhgdigLeft" class="lhgdig_left"></td><td><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="lhgdig_content" id="lhgdig_content" >'+showBox.innerHTML+'</td></tr></tbody></table></td><td class="lhgdig_right"></td></tr><tr><td class="lhgdig_leftBottom"></td><td class="lhgdig_bottom"></td><td class="lhgdig_rightBottom" id="lhgdig_drop"></td></tr></tbody></table>';
	var hl = showBox.innerHTML;

	document.body.appendChild(showBox);

	
	var w =  _getDomWidth(showBox);
	var h = _getDomHeight(showBox);

	showBox.style.width = w+'px';
	showBox.style.height = h+'px';

	showBox.innerHTML = '<div style="position:relative"><iframe marginwidth=0 marginheight=0 frameborder=0 src="" style="width:'+w+'px;height:'+h+'px;"></iframe><div style="position:absolute;left:0;top:0;width:'+w+'px;height:'+h+'px;">'+hl+'</div></div>';

	showBox.style.top = ((getViewportHeight()-h)/2+getViewportScrollY())+"px";
	showBox.style.left = ((document.body.offsetWidth-w)/2+document.body.scrollLeft)+"px";
	dlg[o] = new dialog( o, cov );
	$('#'+o+ ' input.button_close').click(function(){dlg[o].cancel()});
}

function dialog( id,cov )
{
	this.id = id;
	this.cov = cov;

	this.cancel = function()
		{
			if( id == 'imgsUploadDiv' )
			{
				swfu.destroy();
				swfu = null;
			}
			document.body.removeChild( document.getElementById(this.id) );
			if( this.cov )
			{
				document.body.removeChild( document.getElementById(this.id+'_mask') );
			}
		}
}

// 获取鼠标坐标
function mouseCoords ()
{
	this.x = 0;
	this.y = 0;

	this.getMouseCoords = function ()
	{
		try
		{
			var ev = searchEvent ();
			if ( ev.pageX || ev.pageY )
			{
				this.x = ev.pageX;
				this.y = ev.pageY;
			}
			else
			{
				this.x = ev.clientX + document.documentElement.scrollLeft - document.documentElement.clientLeft;
				this.y = ev.clientY + document.documentElement.scrollTop  - document.documentElement.clientTop;
			}
		}
		catch ( e ) {};
	};
}

// 查找 Event 对象
function searchEvent ()
{
	if ( window.event ) return window.event;
	var func = searchEvent.caller;
	while ( func != null )
	{
		var firstArg = func.arguments[0];
		if ( firstArg )
		{
			if ( firstArg.constructor == MouseEvent || firstArg.constructor == Event || firstArg.constructor == KeyboardEvent ) return firstArg;
		}
		func = func.caller;
	}
	return null;
}


// 设置拖动物件
var clsMouseCoords = new mouseCoords ();
var dragObj = false;
var dragModeX = 0; // 0: left, 1: right
var dragModeY = 0; // 0: top, 1: bottom
var dragMoveAlpha = 0; // 移动透明度
var dragOriAlpha = 0; // 原透明度
var dragSave = false; // 是否记录位置
var dragSaveCookieName = '50heroPanelPos';
var dragSavedPos = new Array ();
var dragCallbackFunc = null;
var dragMovingFunc = null;
var gridSize = 1; // 对齐网格

function setDragObj ( obj, modeX, modeY, moveAlpha, oriAlpha, callbackFunc, movingFunc, save, setToTop )
{
	if ( typeof ( obj ) == 'string' ) obj = document.getElementById( obj );
	if ( modeX == null ) modeX = 0;
	if ( modeY == null ) modeY = 0;
	if ( moveAlpha == null ) moveAlpha = 0;
	if ( oriAlpha == null ) oriAlpha = 100;
	if ( save != null ) dragSave = save;
	if ( setToTop == null ) setToTop = true;

	clsMouseCoords.getMouseCoords ();

	dragObj = obj;
	dragModeX = modeX;
	dragModeY = modeY;
	dragMoveAlpha = moveAlpha;
	dragOriAlpha = oriAlpha;
	dragCallbackFunc = callbackFunc;
	dragMovingFunc = movingFunc;

	dragObj.style.visibility = 'visible';

	if ( document.selection ) document.selection.empty();

	if ( dragModeX == 0 ) window.dragX = clsMouseCoords.x - dragObj.offsetLeft;
	else window.dragX = clsMouseCoords.x - dragObj.offsetLeft - dragObj.offsetWidth;
	if ( dragModeY == 0 ) window.dragY = clsMouseCoords.y - dragObj.offsetTop;
	else window.dragY = clsMouseCoords.y - dragObj.offsetTop - dragObj.offsetHeight;

	if ( dragMoveAlpha > 0 )
	{
		dragObj.style.filter = 'alpha(opacity=' + dragMoveAlpha + ')';
		dragObj.style.opacity = dragMoveAlpha / 100;
	}

	if ( setToTop ) setTop ( dragObj );

	document.onmousemove = doDragObj;
	document.onmouseup = clearDragObj;

	//maskDrag.show ( false, dragObj.style.zIndex + 1 );
}

function clearDragObj ()
{
	if ( typeof ( dragObj ) == 'object' )
	{
		if ( dragModeX == 0 )
		{
			if ( dragObj.style.left.indexOf ( '-' ) == 0 ) dragObj.style.left = '0px';
			var left = parseInt ( dragObj.style.left );
			var offset = left % gridSize;
			dragObj.style.left = ( left + ( offset > gridSize / 2 ? ( gridSize - offset ) : - offset ) ) + 'px';
		}
		else
		{
			if ( dragObj.style.right.indexOf ( '-' ) == 0 ) dragObj.style.right = '0px';
			var right = parseInt ( dragObj.style.right );
			var offset = right % gridSize;
			dragObj.style.right = ( right + ( offset > gridSize / 2 ? ( gridSize - offset ) : - offset ) ) + 'px';
			dragObj.style.right = ( right + right % gridSize ) + 'px';
		}

		if ( dragModeY == 0 )
		{
			if ( dragObj.style.top.indexOf ( '-' ) == 0 ) dragObj.style.top = '0px';
			var top = parseInt ( dragObj.style.top );
			var offset = top % gridSize;
			dragObj.style.top = ( top + ( offset > gridSize / 2 ? ( gridSize - offset ) : - offset ) ) + 'px';
		}
		else
		{
			if ( dragObj.style.bottom.indexOf ( '-' ) == 0 ) dragObj.style.bottom = '0px';
			var bottom = parseInt ( dragObj.style.bottom );
			var offset = bottom % gridSize;
			dragObj.style.bottom = ( bottom + ( offset > gridSize / 2 ? ( gridSize - offset ) : - offset ) ) + 'px';
		}

		if ( dragMoveAlpha > 0 )
		{
			dragObj.style.filter = 'alpha(opacity=' + dragOriAlpha + ')';
			dragObj.style.opacity = dragOriAlpha / 100;
		}

		if ( dragSave )
		{
			saveDragPos ( dragObj );
		}

		// dragObj.focus ();
		dragObj = false;
		//maskDrag.hide ();

		if ( dragCallbackFunc != null )
		{
			if ( typeof ( dragCallbackFunc ) == 'string' )
			{
				var callback = dragCallbackFunc;
				if ( callback.indexOf ( '(' ) == -1 ) callback += '()';
				eval ( callback );
			}
			else
			{
				dragCallbackFunc ();
			}
		}
	}
}

function doDragObj ()
{
	if ( typeof ( dragObj ) == 'object' )
	{
		dragObj.style.position = 'absolute';
		dragObj.style.margin = '0 0 0 0';
		clsMouseCoords.getMouseCoords ();
		if ( dragModeX == 0 )
		{
			dragObj.style.left = ( clsMouseCoords.x - window.dragX ) + 'px';
		}
		else
		{
			var objHTML = document.getElementsByTagName('html').item(0);
			dragObj.style.right = ( objHTML.offsetWidth - clsMouseCoords.x + window.dragX ) + 'px';
		}

		if ( dragModeY == 0 )
		{
			dragObj.style.top = ( clsMouseCoords.y - window.dragY ) + 'px';
		}
		else
		{
			var objHTML = document.getElementsByTagName('html').item(0);
			dragObj.style.bottom = ( objHTML.offsetHeight - clsMouseCoords.y + window.dragY ) + 'px';
		}

		if ( dragMovingFunc != null )
		{
			if ( typeof ( dragMovingFunc ) == 'string' )
			{
				var callback = dragMovingFunc;
				if ( callback.indexOf ( '(' ) == -1 ) callback += '()';
				eval ( callback );
			}
			else
			{
				dragMovingFunc ();
			}
		}
	}
}

function saveDragPos ( obj )
{
	var saved = false;
	var savedPos = getCookie ( dragSaveCookieName );
	var saveString = obj.id + ':' + obj.style.top + ',' + obj.style.right + ',' + obj.style.bottom + ',' + obj.style.left + ',' + obj.style.zIndex;
	if ( savedPos )
	{
		dragSavedPos = savedPos.split ( ';' );
		for ( var i = 0; i < dragSavedPos.length; i ++ )
		{
			var posInfo = dragSavedPos[i].split ( ':' );
			if ( posInfo[0] == obj.id )
			{
				dragSavedPos[i] = saveString;
				saved = true;
			}
		}
	}

	if ( !saved )
	{
		dragSavedPos.push ( saveString );
	}
	setCookie ( dragSaveCookieName, dragSavedPos.join ( ';' ) );
}

function restoreDragPos ()
{
	var savedPos = getCookie ( dragSaveCookieName );
	if ( savedPos )
	{
		dragSavedPos = savedPos.split ( ';' );
		for ( var i = 0; i < dragSavedPos.length; i ++ )
		{
			var posInfo = dragSavedPos[i].split ( ':' );
			var posObj = document.getElementById ( posInfo[0] );
			if ( posObj )
			{
				var pos = posInfo[1].split ( ',' );
				setPos ( posObj, pos[0], pos[1], pos[2], pos[3], pos[4] );
			}
		}
	}
}

function setAlpha ( obj, opacity )
{
	if ( typeof ( obj ) == 'string' ) obj = document.getElementById ( obj );
	if ( obj )
	{
		obj.style.filter = 'alpha(opacity=' + opacity + ')';
		obj.style.opacity = parseFloat ( opacity / 100 );
	}
}

function setTop ( obj )
{
	if ( typeof ( obj ) == 'string' ) obj = document.getElementById ( obj );
	if ( obj && obj.style.zIndex < gzIndex )
	{
		obj.style.zIndex =  gzIndex ++;
	}
}

function setPos ( obj, top, right, bottom, left, zIndex )
{
	if ( typeof ( obj ) == 'string' ) obj = document.getElementById ( obj );
	if ( obj )
	{
		top = parseInt ( top );
		right = parseInt ( right );
		bottom = parseInt ( bottom );
		left = parseInt ( left );
		zIndex = parseInt ( zIndex );

		obj.style.position = 'absolute';
		obj.style.margin = '0 0 0 0';
		if ( !isNaN ( top ) ) obj.style.top = top + 'px';
		if ( !isNaN ( right ) ) obj.style.right = right + 'px';
		if ( !isNaN ( bottom ) ) obj.style.bottom = bottom + 'px';
		if ( !isNaN ( left ) ) obj.style.left = left + 'px';
		if ( !isNaN ( zIndex ) ) { obj.style.zIndex = zIndex; gzIndex = Math.max ( gzIndex, zIndex + 1 ); };
	}
}

/**************** ajax ****************/
/*
Ajax 类
sUrl : 目标 URL
sQueryString : 提交变量
callbackFunc : 回调函数
callbackParams : 回调函数参数
*/
function Ajax ( sUrl, sQueryString, callbackFunc, callbackParams, tMsg )
{
	this.url = sUrl;
	this.queryString = sQueryString != null ? sQueryString : '';
	this.callbackFuncName = getFuncName ( callbackFunc );
	this.callbackParams = callbackParams;

	try
	{
		 var xmlHttp = new ActiveXObject ( 'Msxml2.XMLHTTP' );
	}
	catch ( e )
	{
		try
		{
			 var xmlHttp =  new ActiveXObject ( 'Microsoft.XMLHTTP' );
		}
		catch ( e )
		{
			var xmlHttp =  new XMLHttpRequest ();
		}
	}

	this.xmlHttp = xmlHttp;

	xmlHttp.onreadystatechange = function ()
	{
		try
		{
			var ret = Ajax.handleStateChange ( xmlHttp, callbackFunc, callbackParams, tMsg );
			if ( ret ) objxml = null;
		}
		catch ( e ) {}
	}
}

Ajax.prototype.createQueryString = function ()
{
	var queryString = '';
	if ( this.queryString != null && typeof ( this.queryString ) != 'string' )
	{
		var elements = this.queryString.elements;
		var pairs = new Array ();
		for ( var i = 0; i < elements.length; i++ )
		{
			var name = elements[i].name;
			var value = elements[i].value;
			if ( name && value != null )
			{				
				var eType = elements[i].getAttribute ( 'type' );
				if ( ( eType != 'radio' && eType != 'checkbox' ) || elements[i].checked )
				{
					pairs.push ( name + "=" + encodeURIComponent ( value ) );
				}
			}
		}
		queryString = pairs.join ( '&' );
	}
	else
	{
		queryString = this.queryString;
	}

	if ( queryString != '' ) queryString += '&';
	queryString += 'callback_func_name=' + this.callbackFuncName;

	if ( this.callbackParams )
	{
		var callbackObjName = this.callbackParams;
		if ( typeof ( callbackObjName ) == 'object' )
		{
			callbackObjName = callbackObjName.id;
		}
		if ( callbackObjName ) queryString += '&callback_obj_name=' + callbackObjName;
	}

	return queryString;
};

Ajax.prototype.get = function ()
{

	sUrl = this.url;

	var queryString = sUrl;
	if ( extraQueryString = this.createQueryString() )
	{
		queryString += ( queryString.indexOf ('?') > 0 ? '&' : '?' ) + extraQueryString;
	}
	this.xmlHttp.open ( 'GET', queryString, true );
	this.xmlHttp.send ( null );
};

Ajax.prototype.post = function ()
{
	var sUrl = this.url;
	var queryString = this.createQueryString ();

	this.xmlHttp.open ( 'POST', sUrl, true );
	this.xmlHttp.setRequestHeader ( 'Content-Type', 'application/x-www-form-urlencoded' );
	this.xmlHttp.send ( queryString );
};

Ajax.handleStateChange = function ( xmlHttp, callbackFunc, callbackParams, tMsg )
{
	if ( xmlHttp.readyState == 4 )
	{
		var returnFlag = true;

		if ( xmlHttp.status == 200  )
		{

			loading.finish();





			var response;
			var firstChar = xmlHttp.responseText.substr ( 0, 1 );

			if ( firstChar == '{' || firstChar == '[' )
			{
				try
				{
					eval ( 'response = ' + xmlHttp.responseText + ';' );
					if ( response && response.auto_script )
					{
						eval ( response.auto_script );
					}

					if ( this.getError ( response ) ) returnFlag = false;
				}
				catch ( e )
				{
					response = xmlHttp.responseText;
				};
			}
			else
			{
				response = xmlHttp.responseText;
			}

			if ( returnFlag )
			{
				if ( callbackFunc != null )
				{
					if ( typeof ( callbackFunc ) == 'string' )
					{
						eval ( callbackFunc + '( response, callbackParams );' );
					}
					else
					{
						callbackFunc ( response, callbackParams, tMsg );
					}
				}
			}
			xmlHttp = null;
		}
	}
};

Ajax.getError = function( ret )
{
	if ( ret && ret.error )
	{
		show_alert ( ret );
		return true;
	}
	return false;
}

function show_alert( ret )
{
	var id = makeTimeStamp();
	
	var html = '<table cellspacing="0" cellpadding="0" border="0">';
	html += '<tr>';
	html += '<td style="font-weight:bold;padding:20px 80px;text-align:center;line-height:16px;width:280px;">'+ret.result+'</td>';
	html += '</tr>';
	html += '<tr>';
	html += '<td style="text-align:center;background-color:#f6f6f6;border-top:1px solid #dadee5;height:32px;"><INPUT TYPE="button" VALUE="'+(ret.script_text?ret.script_code:'确定')+'" ONCLICK="dlg[\''+id+'\'].cancel();'+ret.script_code+';" class="button"></td>';
	html += '</tr>';
	html += '</table>';
	show_message( html, id, '系统提示', true, true );

}

function show_confirm( ret, s_c )
{
	var id = makeTimeStamp();
	
	var html = '<table cellspacing="0" cellpadding="0" border="0">';
	html += '<tr>';
	html += '<td style="font-weight:bold;padding:20px 80px;text-align:center;line-height:16px;width:280px;">'+ret+'</td>';
	html += '</tr>';
	html += '<tr>';
	html += '<td style="text-align:center;background-color:#f6f6f6;border-top:1px solid #dadee5;height:32px;"><INPUT TYPE="button" VALUE="确定" ONCLICK="dlg[\''+id+'\'].cancel();'+s_c+';" class="button" style="margin-right:10px;"><INPUT TYPE="button" VALUE="取消" ONCLICK="dlg[\''+id+'\'].cancel();" class="button"></td>';
	html += '</tr>';
	html += '</table>';
	show_message( html, id, '系统提示', true, true );

}

//Ajax 回调显示
function show_message( ret, obj, tMsg, c, cov )
{
	var rac = document.createElement ( 'table' );
	var row = rac.insertRow(0);
	var cell=row.insertCell(0);
	cell.innerHTML = ret;
	opdlg( obj, tMsg, rac, c, cov );

	// 解析 Script
	executeScript ( ret );

}

function _getDomHeight ( obj )
{
	return obj.offsetHeight || obj.clientHeight;
}

function _getDomWidth ( obj )
{
	return obj.offsetWidth || obj.clientWidth;
}


// Ajax 通用回调函数
function ajaxCallback ( ret, obj, tMsg )
{
	if ( ret.auto_script )
	{
		eval ( ret.auto_script );
	}


	if ( !Ajax.getError ( ret, obj ) )
	{
		if( document.getElementById( obj ) )
		{
			 document.getElementById( obj ).innerHTML = ret;
		}
		else
		{
			show_message ( ret, obj, tMsg );
		}
	}
}


// 解析 Script
function executeScript ( msg )
{
	var _re = /<script[^>]*>([^\x00]+)$/i;
	var _msgs = msg.split ( "<\/script>" );

	for ( var _i in _msgs )
	{
		var _strScript;
		if ( _strScript = _msgs[_i].match ( _re ) )
		{
			var _strEval = _strScript[1].replace ( /<!--/, '' );
			try
			{
				eval ( _strEval );
			}
			catch ( e ) {};
		}
	}
}

function replaceScript( msg )
{
	var _re = /<script[^>]*>([^\x00]+)$/i;
	var _msgs = msg.split ( "<\/script>" );
	
	var result = msg;

	for ( var _i in _msgs )
	{
		var _strScript;
		if ( _strScript = _msgs[_i].match ( _re ) )
		{
			var _strEval = _strScript[1].replace ( /<!--/, '' );
			result= result.replace( _strEval, '' );
		}
	}
	return result;
}

//加载ajax
function Loader()
{
	this.timeStamp = null;

	this.get = function ( title, sUrl, sQueryString, callbackFunc, targetObj, noLoading )
	{
		this.load( 'get', sUrl, sQueryString, callbackFunc, targetObj, title, noLoading );
	}

	this.post = function ( title, sUrl, sQueryString, callbackFunc, targetObj, noLoading )
	{
		this.load( 'post', sUrl, sQueryString, callbackFunc, targetObj, title, noLoading );
	}

	this.load = function ( method, loadUrl, queryString, callbackFunc, targetObj, title, noLoading )
	{
		var obj = document.getElementById( targetObj );
		
		if( obj && targetObj!='leftMenu'){
			document.body.removeChild(obj);
		}

		if ( callbackFunc == null )
		{
			callbackFunc = ajaxCallback;
		}

		
		this.getTimeStamp ();
		var re = new RegExp ( "timeStamp=([0-9]+)" );
		if ( loadUrl.match ( re ) )
		{
			loadUrl = loadUrl.replace ( re, 'timeStamp=' + this.timeStamp );
		}
		else
		{
			loadUrl += loadUrl.indexOf ( '?' ) == -1 ? '?' : '&';
			loadUrl += 'timeStamp=' + this.timeStamp;
		}

		var clsAjax = new Ajax ( loadUrl, queryString, callbackFunc, targetObj, title );
		
		if( noLoading == null )
		{
			loading.start();
		}
		if ( method == 'post' )
		{
			clsAjax.post ();
		}
		else
		{
			clsAjax.get ();
		}
	}

	// 设置时间戳, 用于控制页面缓存
	this.refreshCache = function ()
	{
		this.timeStamp = makeTimeStamp ();
	};

	// 获取缓存时间戳
	this.getTimeStamp = function ()
	{
		if ( typeof ( this.timeStamp ) == 'undefined' || this.timeStamp == null ) this.timeStamp = makeTimeStamp ();
		return this.timeStamp;
	};
}

var loader = new Loader();

//加载条
function Loading( )
{	
	
	this.start = function ()
	{
		opdlg( 'loading', '系统加载', '<div style="width:200px;height:50px;text-align:center;line-height:50px;">系统加载中，请稍后……</div>', true, true )
	}

	this.finish = function ()
	{
		if(dlg['loading'])
		{
			dlg['loading'].cancel();
			dlg['loading'] = null;
		}
	}
}

var loading = new Loading();


//复选全选
function selectall( i, ck )
{
	var chks = document.getElementsByName( i );
	

	for( var i=0; i<chks.length; i++ )
	{
		if( ck == 1 )
		{
			chks[i].checked=true;
			document.getElementById('check_box_all').checked = true;
		}
		else if( ck == 0 )
		{
			chks[i].checked=false;
			document.getElementById('check_box_all').checked = false;
		}
		else if( ck.checked == true )
		{
			chks[i].checked=true;
		}
		else
		{
			chks[i].checked=false;
		}
	}
}

//复选组值
function chkValues( name)
{
	var result = '';
	var obj = document.getElementsByName( name );
	
	for( var i=0; i<obj.length; i++ )
	{
		if( obj[i].checked == true )
		{
			if( result )
				result += ',';

			result += obj[i].value;
		}
	}

	return result;
}

//编辑器
//var xheditor = '';
function getEditor( id, w, h )
{
	xheditor = $('#'+id).xheditor({tools:'full',skin:'default', 'width':w, 'height':h });
}
//编辑器图片
function editorImg()
{
	uploadImg( 'editor' );
}
//加载到编辑器
function setEditorImg( ids,  chk )
{

	if( chk == true )
	{
		var r = document.getElementsByName( ids );
		var img = '';
		var imgs =document.getElementById('uploadImgs').value;
		if( r )
		{
			for(var j=0;j<r.length;j++)
			{
				if(r[j].checked == true)
				{
					img +=  '<p align="center"><img src="'+r[j].value+'" /></p>';

					if( imgs != '' ) imgs += ',';
					imgs += r[j].value;
				}
			}
		}
		document.getElementById('uploadImgs').value = imgs;
		KE.insertHtml( 'con',img );
		dlg['imgsUploadDiv'].cancel();
	}
	else
	{
		var val = document.getElementById('uploadImgs').value;
		if( val != '' )
		{
			val += ',';
		}
		document.getElementById('uploadImgs').value = val+ids;
		KE.insertHtml( 'con','<p align="center"><img src="'+ids+'" /></p>' );
	}




}

//分页
function editorPage()
{
		xheditor.pasteHTML( '<p>{[-page-]}</p>' );
}




/**************** AJAX提交 ****************/
//修改密码
function upPwd( form )
{
	loader.post( '修改密码', '/index/repwd', form );
	return false;
}

//添加用户
function userAdd( form )
{
	loader.post( '', '/admuser/add', form );
	return false;
}

//删除用户
function del_user( uid )
{
	loader.get( '', '/admuser/del?uid='+uid );
	return false;
}

//批量删除用户
function batch_del_user(  )
{
	id = chkValues( 'id[]' );

	if( id == '' )
	{
		show_alert( {'result':'请选择要删除的用户。'} );
	}
	else
	{
		loader.get( '', '/admuser/del?uid='+id );
		return false;
	}
}



//获取左边菜单
function loadLMod( p )
{
	$('#topMenu>li').removeClass("this").addClass( 'top_menu' );
	$('#top'+p).removeClass("top_menu").addClass( 'this' );

	loader.post( '', 'adm_loadMenu.php?p='+p, null, null, 'leftMenu' );
}


//上传图片
function uploadImg( a, hidput )
{
	if( swfu != null)
	{
		document.body.removeChild( document.getElementById('imgsUploadDiv') );
		swfu.destroy();
		swfu = null;
	}
	var url = 'art_imgUpload.php?action='+a;
	if( hidput != null )
	{
		url += '&input='+hidput;
	}
	loader.get( '上传图片', url, null, null, 'imgsUploadDiv' );
}

function uploadselect ( i )
{
	$('.upimg_pop').css({display:'none'});
	$('#upImg_'+i).css({display:''});
	$('ul.upimg_pop_ul>li').removeClass("on").addClass( 'off' );
	$('#upImgBut_'+i).removeClass("off").addClass( 'on' );
}

var swfu = null;
function uploadSWF( wn, pp, tt )
{
	swfu = new SWFUpload({
		
		//事件
		file_queued_handler: fileQueue,
		file_queue_error_handler : fileQueueError,
		upload_progress_handler : uploadProgress,
		upload_error_handler : uploadError,
		upload_success_handler : uploadSuccess,
		upload_complete_handler : uploadComplete,
		
		custom_settings : {
			upload_target : "divFileProgressContainer",
			key : wn
		},

		//上传处理
		upload_url: "art_imgUploadAction.php",
		post_params: {"upKey": pp, 'type':tt },

		// 上传设置
		file_size_limit : "2 MB",	// 2MB
		file_types : "*.jpg;*.gif",
		file_types_description : "JPG;GIF 图片",
		file_upload_limit : "30",
		// 按钮样式
		button_image_url : "/template/style/image/selet_imgup.gif",
		button_placeholder_id : "swfUploadContainer",
		button_width: 96,
		button_height: 28,
		button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
		button_cursor: SWFUpload.CURSOR.HAND,
		// Flash 源
		flash_url : "js/swfupload/swfupload.swf"
		});
}

/*显示大图
例如：<a href="xx.jpg">图片</a>
$("a").preview();就可以了
*/
(function($){
	$.fn.preview = function(){
		var xOffset = 10;
		var yOffset = 20;
		var w = $(window).width();
		$(this).each(function(){
			$(this).hover(function(e){
				$("body").append("<span id='preview'><img src='"+$(this).attr('tc')+"'  style='border:1px solid #cccccc;' /></span>");
				
				$("#preview").css({
					position:"absolute",
					padding:"4px",
					border:"1px solid #f3f3f3",
					backgroundColor:"#eeeeee",
					top:(e.pageY - yOffset) + "px",
					zIndex:10000
				});

				if(e.pageX < w/2){
					$("#preview").css({
						left: e.pageX + xOffset + "px",
						right: "auto"
					}).fadeIn("fast");
				}else{
					$("#preview").css("right",(w - e.pageX + yOffset) + "px").css("left", "auto").fadeIn("fast");	
				}
			},function(){
				$("#preview").remove();
			}).mousemove(function(e){
				$("#preview").css("top",(e.pageY - xOffset) + "px")
				if(e.pageX < w/2){
					$("#preview").css("left",(e.pageX + yOffset) + "px").css("right","auto");
				}else{
					$("#preview").css("right",(w - e.pageX + yOffset) + "px").css("left","auto");
				}
			});						  
		});
	};
})(jQuery);

function delUploadImg( img, obj )
{
	document.getElementById('UpimgList').removeChild( document.getElementById(obj) );

	loader.post( '', 'art_imgUpload.php?action=del', 'img='+img, null, null, true );
}


function strlen_verify(obj, checklen, maxlen) {
	var v = obj.value, charlen = 0, maxlen = !maxlen ? 200 : maxlen, curlen = maxlen, len = strlen(v);
	for(var i = 0; i < v.length; i++) {
		if(v.charCodeAt(i) < 0 || v.charCodeAt(i) > 255) {
			curlen -= 2;
		}
	}
	if(curlen >= len) {
		$('#'+checklen).html(curlen - len);
	} else {
		obj.value = mb_cutstr(v, maxlen, true);
	}
}
function mb_cutstr(str, maxlen, dot) {
	var len = 0;
	var ret = '';
	var dot = !dot ? '...' : '';
	maxlen = maxlen - dot.length;
	for(var i = 0; i < str.length; i++) {
		len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? 2 : 1;
		if(len > maxlen) {
			ret += dot;
			break;
		}
		ret += str.substr(i, 1);
	}
	return ret;
}
function strlen(str) {
	return ($.browser.msie && str.indexOf('\n') != -1) ? str.replace(/\r?\n/g, '_').length : str.length;
}

function input_font_bold(id,vid) {
	if($('#'+id).css('font-weight') == '700' || $('#title').css('font-weight')=='bold') {
		$('#'+id).css('font-weight','normal');
		$('#'+vid).val('');
	} else {
		$('#'+id).css('font-weight','bold');
		$('#'+vid).val('bold');
	}
}