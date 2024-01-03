// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addGenerator POST /api/generator/add */
export async function addGeneratorUsingPost(
  body: API.GeneratorAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/generator/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteGenerator POST /api/generator/delete */
export async function deleteGeneratorUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/generator/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editGenerator POST /api/generator/edit */
export async function editGeneratorUsingPost(
  body: API.GeneratorEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/generator/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGeneratorVOById GET /api/generator/get/vo */
export async function getGeneratorVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGeneratorVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseGeneratorVO_>('/api/generator/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listGeneratorByPage POST /api/generator/list/page */
export async function listGeneratorByPageUsingPost(
  body: API.GeneratorQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGenerator_>('/api/generator/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listGeneratorVOByPage POST /api/generator/list/page/vo */
export async function listGeneratorVoByPageUsingPost(
  body: API.GeneratorQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGeneratorVO_>('/api/generator/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyGeneratorVOByPage POST /api/generator/my/list/page/vo */
export async function listMyGeneratorVoByPageUsingPost(
  body: API.GeneratorQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGeneratorVO_>('/api/generator/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateGenerator POST /api/generator/update */
export async function updateGeneratorUsingPost(
  body: API.GeneratorUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/generator/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
