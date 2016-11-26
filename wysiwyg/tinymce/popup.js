/**
 * Insert function.
 *
 * Generate the filter code and insert into the textarea.
 */
function insertFlickrEmbedCode() {
  var ed = tinyMCEPopup.editor, f = document.forms[0], nl = f.elements, v, args = {}, el;
  
  //match the select box - album or photo, check for string value to compare with an null selection
  if(nl.is_album.value === "0") {

 	//get the form value
	photo_url = nl.url.value;
	id = extractPhotoId(photo_url);

	//the extract function did not find an id
	if (typeof(id) === undefined || id == '' || id == null) {	
		alert('Not a valid flickr photo url. Check your URL contains the word "photos" and looks like https://www.flickr.com/photos/foeeurope/myphotoid');
	}
	else {
	    //insert the ID and default values
	    insertString = '[flickr-photo:id=' + id + ', size=c, mintitle=999, minmetadata=999, heading=none]';
	    ed.execCommand('mceInsertContent', false, insertString);
	    ed.undoManager.add();
	    tinyMCEPopup.close();
	    return;
	}	
  }
  else if(nl.is_album.value === "1") {
	//get the form value
	album_url = nl.url.value;
        id = extractAlbumId(album_url);
	//the extract function did not find an id
        if (typeof(id) === undefined || id == '' || id == null) {       
                alert('Not a valid flickr album url. Check your URL contains the word "albums".');
        }
        else {
	    //insert the ID and default values
            insertString = '[flickr-photoset:id=' + id + ',size=y,mintitle=999, minmetadata=999, heading=none]';
            ed.execCommand('mceInsertContent', false, insertString);
            ed.undoManager.add();
            tinyMCEPopup.close();
            return;
        }       


  }
  //no selection made
  else {
	alert('Please select an option');
  }
}

//e.g. https://www.flickr.com/photos/foeeurope/albums/72157672490786053
function extractAlbumId(url) {
	regex = /albums\/([0-9]+)/ig; 
        albumId = regex.exec(url);
	if (albumId != null) {
		//find the value in the group variable
		return albumId[1];
	}
	return null;
}

//e.g. https://www.flickr.com/photos/foeeurope/30668022881/in/album-72157672490786053/
function extractPhotoId(url) {
	regex = /photos\/[^/]+\/([0-9]+)/ig;
        photoId = regex.exec(url);
	if (photoId != null) {
		//find the value in the group variable
		return photoId[1];
	}
	return null;
}



function init() {
  // The selected text
	var elm = tinyMCEPopup.editor.selection.getNode().innerHTML;
  // Form elements
  var elements = document.forms[0].elements;
  // Regular result
  var reg_res;
}
tinyMCEPopup.onInit.add(init);
