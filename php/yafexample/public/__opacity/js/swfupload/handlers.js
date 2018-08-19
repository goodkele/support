function fileQueue(file)
{
	
	var upQe = document.getElementById('uploadQeueu');
	var tab = document.createElement('table');
	tab.id= 'sUtab_'+file.id;
	tab.width="100%";
	var row = tab.insertRow(tab.rows.length);
	var cell=row.insertCell(0);
	cell.width=265;
	cell.innerHTML = file.name;
	var cell=row.insertCell(1);
	cell.width=70;
	cell.innerHTML = '<span id="sUst_'+file.id+'">等待上传</span>';
	var cell=row.insertCell(2);
	cell.width=70;
	upQe.appendChild(tab);

	var size = round(file.size/1024,1);
	if( size > 1000 )
	{
		size = round(size /1024,1);
		size += 'MB';
	}
	else
	{
		size += 'KB';
	}
	
	cell.innerHTML = size;
	var cell=row.insertCell(3);
	cell.innerHTML = '<span id="'+('sUdel_'+file.id)+'" ><a href="javascript:void(0)" onclick="toggleCancel(\''+file.id+'\')" class="img_del box"></a></span>';
}

function toggleCancel( fileID )
{
	document.getElementById('sUtab_'+fileID).style.display = 'none';
	swfu.cancelUpload(fileID);
}

function fileQueueError(file, errorCode, message) {
	try {
		switch (errorCode) {
			case -100:
				show_alert( {'result':'只能上传 '+swfu.getSetting('file_upload_limit')+' 张图片'} );
				return 0;
			case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
				show_alert( {'result':'您上传的图片大小为 0 字节'} );
				return 0;
			case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
				show_alert( {'result':'您上传的图片大小超过了 '+swfu.getSetting('file_size_limit')} );
				return 0;
			case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
				show_alert( {'result':'您上传的图片格式不正确'} );
				return 0;
			default:
				show_alert( {'result':message } );
		}
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadProgress(file, bytesLoaded) {

	try {
		var percent = Math.ceil((bytesLoaded / file.size) * 100);
		var progress = new FileProgress(file,  this.customSettings.upload_target);
		progress.setProgress(percent);
		if (percent === 100) {
			progress.setStatus("正在处理");
		} else {
			progress.setStatus("正在上传");
			document.getElementById('sUdel_'+file.id).innerHTML = '--';
		}
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadSuccess(file, serverData) {
	try {
		var progress = new FileProgress(file);
		if (serverData.substring(0, 5)  === "upOk|") {
			progress.setStatus("上传成功");
			progress.setProgress(0);

			fInfo = serverData.split( '|' );
			
			if( window.upClickFun == 'setPreImg' )
			{
				var itype = 'radio';
			}
			else
			{
				var itype = 'checkbox';
			}


			var ih = '<table id=\'_'+fInfo[4]+'\' style="width:100%">';
			ih += '<tbody>';
			ih += '<tr>';
			ih += '<td width="320"><input type="'+itype+'" class="inputcheckbox " name="upImgIds[]" value="'+fInfo[2]+'" >&nbsp;<a href="javascript:'+upClickFun+"('"+fInfo[2]+"')"+'" tc="'+fInfo[2]+'" class="preview">'+fInfo[1]+'</a></td>';
			ih += '<td width="80">'+fInfo[3]+'</td>';
			ih += '<td><a class="img_del box" onclick="delUploadImg(\''+fInfo[2]+'\', \'_'+fInfo[4]+'\')" href="javascript:void(0)"></a></td>';
			ih += '</tr>';
			ih += '</tbody>';
			ih += '</table>'+document.getElementById('UpimgList').innerHTML;

			document.getElementById('UpimgList').innerHTML = ih;
			$("a.preview").preview();

		} else {
			progress.setStatus("系统有误");
			show_alert({'result':serverData});
		}


	} catch (ex) {
		this.debug(ex);
	}
}

function uploadComplete(file) {
	try {
		if (this.getStats().files_queued > 0) {
			this.startUpload();
		} else {
			uploadselect(3);
		}
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadError(file, errorCode, message) {
	var imageName =  "error.gif";
	var progress;
	try {
		switch (errorCode) {
		case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
			try {
				progress = new FileProgress(file,  this.customSettings.upload_target);
				progress.setCancelled();
				progress.setStatus("Cancelled");
				progress.toggleCancel(false);
			}
			catch (ex1) {
				this.debug(ex1);
			}
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
			try {
				progress = new FileProgress(file,  this.customSettings.upload_target);
				progress.setCancelled();
				progress.setStatus("Stopped");
				progress.toggleCancel(true);
			}
			catch (ex2) {
				this.debug(ex2);
			}
		case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
			imageName = "uploadlimit.gif";
			break;
		default:
			alert(message);
			break;
		}

		addImage("images/" + imageName);

	} catch (ex3) {
		this.debug(ex3);
	}

}


function FileProgress(file) {
	this.file = file;

	this.setProgress = function (percentage) {
		document.getElementById('divFileProgress').style.width = percentage + "%";
		document.getElementById('divFileProgressNum').innerHTML = percentage + "%";
	}

	this.setStatus = function (status) {
		document.getElementById('sUst_'+this.file.id).innerHTML = status;
	}

}