export default function OldPage ({ data }) {
  return (
    <div>
      <h1>Old Page</h1>
      <p>Data from getServerSideProps: {data.name}</p>
    </div>
  )
}

export const getServerSideProps = async context => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const res = await fetch(`${baseUrl}/api/user`)
  if (!res.ok) {
    throw new Error(`Error! status: ${res.status}`)
  }
  const data = await res.json()
  return { props: { data } }
}
