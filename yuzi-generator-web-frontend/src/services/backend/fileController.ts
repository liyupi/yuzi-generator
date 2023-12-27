// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /file/upload */
export async function uploadFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileParams,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString>('/file/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
      uploadFileRequest: undefined,
      ...params['uploadFileRequest'],
    },
    data: body,
    ...(options || {}),
  });
}
