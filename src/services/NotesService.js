import config from '../services/Config';

const getAllNotes = function () {

  const token = window.localStorage.getItem('token') || '';

  return fetch(`${config.api_root}/notes`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
};

const getNoteById = function (noteId) {

  const token = window.localStorage.getItem('token');

  return fetch(`${config.api_root}/notes/${noteId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
};

const createNote  = function (payload) {

  const token = window.localStorage.getItem('token');

  return fetch(`${config.api_root}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
};

const updateNote = function (noteId, payload) {

  const token = window.localStorage.getItem('token');

  return fetch(`${config.api_root}/notes/${noteId}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
};

const deleteNote = function (noteId) {

  const token = window.localStorage.getItem('token');

  return fetch(`${config.api_root}/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return true;
  });
};

export default {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
