import React from "react";

interface Products {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const DataFetch = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos");
  let posts: Products[] = await res.json();
  console.log(posts);

  return (
    <div>
      <div className="text-4xl font-extrabold text-center">Products</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {posts.map((post) => {
          return (
            <div key={post.id} className="border border-gray-600 px-2 py-3">
              <div className="text-lg font-bold text-gray-600">
                {post.userId}
              </div>
              <div>{post.id}</div>
              <h2 className="text-lg font-bold text-gray-600">{post.title}</h2>
              <p className="text-lg text-gray-600">
                Completed: {post.completed}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataFetch;
