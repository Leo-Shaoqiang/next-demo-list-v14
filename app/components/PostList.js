

export default async function PostList() {
  const fetchPosts = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/post`,);
    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    const data = await res.json();
    return data
  };
  const data =  await fetchPosts();

  if (!data) {
    throw new Error('Posts data not yet available'); 
  }

  return (
    <div>
      <h1>Recent Posts</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}