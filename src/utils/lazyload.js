/**
 * 详情页面图片懒加载
 *
 */
export default function lazyLoadImage() {
  const wh = window.innerHeight;
  let imgList = Array.prototype.slice.apply(window.document.querySelectorAll('img'));
  // 过滤掉已经有src的img
  imgList = imgList.filter((imgItem) => {
    const img = imgItem;
    img.alt = '图片加载中...';
    return !img.src;
  });
  // 检测滚动条位置
  const ptr = setInterval(() => {
    const ph = window.pageYOffset;
    if (!imgList.length) {
      clearInterval(ptr);
      return;
    }
    for (let i = 0, l = imgList.length; i < l; i += 1) {
      const img = imgList[i];
      const top = img.getBoundingClientRect().top;
      if (top != null && ph + wh > top) {
        img.src = img.getAttribute('lazy');
        img.removeAttribute('lazy');
        imgList.splice(i, 1);
        break;
      }
    }
  }, 200);
}
