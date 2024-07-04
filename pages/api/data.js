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

export async function getEstimations(jsonData) {
  try {
    const response = await fetch("http://localhost:5000/forecast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
