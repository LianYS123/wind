// wx api 统一使用异步promise封装
import { promisifyAll } from 'miniprogram-api-promise';
const wxp = {}
promisifyAll(wx, wxp);
export default wxp;