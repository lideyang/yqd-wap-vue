/**
 * Created by lidy on 2019/3/15.
 */
export const setBodyBg = value => {
  document.getElementsByTagName("body")[0].className="blue-bg";
}

export const removeBodyBg = value => {
  document.body.removeAttribute("class","blue-bg");
}
