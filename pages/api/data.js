// api/data.js

export async function createData(data) {
  const response = await fetch("/api/data/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function fetchData() {
  const response = await fetch("/api/data/read");
  return await response.json();
}

export async function updateData(id, newData) {
  const response = await fetch("/api/data/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, ...newData }),
  });
  return await response.json();
}

export async function deleteData(id) {
  const response = await fetch("/api/data/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  return await response.json();
}
