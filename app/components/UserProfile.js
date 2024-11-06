
export default async function UserProfile() {
  const fetchUser = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/user`);
    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  };
  const data =  await fetchUser()


  if (!data) {
    throw new Error('User data not yet available'); 
  }
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}