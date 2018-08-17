/**
 * Created by helina620 on 2017/1/23.
 */

function utf8CodeToChineseChar(strUtf8) {
  var iCode='';
  var iCode1='';
  var iCode2='';
  iCode = parseInt('0x' + strUtf8.substr(1, 2));
  iCode1 = parseInt('0x' + strUtf8.substr(4, 2));
  iCode2 = parseInt('0x' + strUtf8.substr(7, 2));

  return String.fromCharCode(((iCode & 0x0F) << 12) |
    ((iCode1 & 0x3F) << 6) |
    (iCode2 & 0x3F));
}

// UTF-8转中文
function chineseFromUtf8Url(strUtf8) {
  var bstr = '';
  var nOffset = 0; //   processing   point   on   strUtf8
  if(strUtf8 == '')
    return '';
  strUtf8 = strUtf8.toLowerCase();
  nOffset = strUtf8.indexOf('%e');
  if(nOffset == -1)
    return strUtf8;
  while(nOffset != -1) {
    bstr += strUtf8.substr(0, nOffset);
    strUtf8 = strUtf8.substr(nOffset, strUtf8.length - nOffset);
    if(strUtf8 == '' || strUtf8.length < 9) //   bad   string
      return bstr;
    bstr += utf8CodeToChineseChar(strUtf8.substr(0, 9));
    strUtf8 = strUtf8.substr(9, strUtf8.length - 9);
    nOffset = strUtf8.indexOf('%e');
  }
  return bstr + strUtf8;
}

export {
  chineseFromUtf8Url,
  utf8CodeToChineseChar
};
