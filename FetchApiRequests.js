export const MyFetchGetRequest = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const resJson = await response.json();
  return resJson;
};

export const MyFetchPostRequest = async data => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const resJson = await response.json();
  return resJson;
};

export const MyFetchPutRequest = async (id, data) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
  );
  const resJson = await response.json();
  return resJson;
};

export const MyFetchPatchRequest = async (id, data) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
    {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
  );
  const resJson = await response.json();
  return resJson;
};

export const MyFetchDeleteRequest = async id => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
    {
      method: 'DELETE',
    },
  );
  const resJson = await response.json();
  return resJson;
};
