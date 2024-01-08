/*
 * @Author: 张帅 77367582@qq.com
 * @Date: 2024-01-08 20:26:07
 * @LastEditors: 张帅 77367582@qq.com
 * @LastEditTime: 2024-01-08 20:26:19
 * @FilePath: /shuaizi-plus/src/components/Tooltip/props.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  content: {
    type: String
  },
  placement: {
    type: String,
    default: 'left'
  },
  // 触发方式
  trigger: {
    type: String,
    default: 'hover'
  },
  // 手动触发
  manual: {
    type: Boolean,
    default: false
  },
  openDelay: {
    type: Number,
    default: 100
  },
  closeDelay: {
    type: Number,
    default: 100
  }
}
