export async function fetchAllBooks() {
  try {
    const response = await fetch("data/books.json");
    const result = await response.json();
    return result;
  } catch (err) {
    return err;
  }
}
