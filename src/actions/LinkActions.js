import { apiPost, apiPut, apiGet } from '../helpers/api';

export const LINK_CREATE = 'LINK_CREATE';
export const LINK_LIST = 'LINK_LIST';
export const LINK_GET = 'LINK_GET';
export const LINK_UPDATE = 'LINK_UPDATE';

export const linkCreate = (data) => {
  const isSocial = !!data.isSocial;
  data = { ...data, isSocial };
  const payload = apiPost('/link', data);
  return { type: LINK_CREATE, payload };
};

export const linkUpdate = (id, data) => {
  const isSocial = !!data.isSocial;
  data = { ...data, isSocial };
  const payload = apiPut(`/link/${id}`, { ...data, isSocial });
  return { type: LINK_UPDATE, payload };
};

export const linkList = () => {
  const payload = apiGet('/link');
  return { type: LINK_LIST, payload };
};

export const linkGet = (id) => {
  const payload = apiGet(`/link/${id}`);
  return { type: LINK_GET, payload };
};
