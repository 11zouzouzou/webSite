/**
 *  导航 nav
 */
export interface NavListItem {
  index: string;
  path: string;
  name: string;
}

/**
 * 用户公开信息
*/
export interface UserInfo {
  _id: string;
  name: string;
  avatar: string | any;
}
