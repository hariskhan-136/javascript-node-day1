console.log("Hello World!");

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

async function main() {
  try {
    const [userResponse, postsResponse, todosResponse] = await Promise.all([
      fetch(USERS_URL),
      fetch(POSTS_URL),
      fetch(TODOS_URL),
    ]);

    if (!userResponse.ok || !postsResponse.ok || !todosResponse.ok) {
      throw new Error("Failed to fetch data from the API.");
    }

    const [users, posts, todos] = await Promise.all([
      userResponse.json(),
      postsResponse.json(),
      todosResponse.json(),
    ]);

    console.log("USERS:", users.length);
    console.log("POSTS:", posts.length);
    console.log("TODOS:", todos.length);
  } catch (error) {
    console.error("Failed to fetch data. Please try again.");
    process.exit(1);
  }
}

main();
