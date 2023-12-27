// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /generator/add */
export async function addGenerator(
  body: API.GeneratorAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong>('/generator/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /generator/delete */
export async function deleteGenerator(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/generator/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /generator/edit */
export async function editGenerator(
  body: API.GeneratorEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/generator/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /generator/get/vo */
export async function getGeneratorVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGeneratorVOByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseGeneratorVO>('/generator/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /generator/list/page */
export async function listGeneratorByPage(
  body: API.GeneratorQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGenerator>('/generator/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /generator/list/page/vo */
export async function listGeneratorVoByPage(
  body: API.GeneratorQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGeneratorVO>('/generator/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /generator/my/list/page/vo */
export async function listMyGeneratorVoByPage(
  body: API.GeneratorQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGeneratorVO>('/generator/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /generator/update */
export async function updateGenerator(
  body: API.GeneratorUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/generator/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
