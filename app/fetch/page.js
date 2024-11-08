async function getData() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random', { next: { tags: ['collection'] } })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  
  export default async function Page() {
    const data = await getData()
    
    return <img src={data.message} width="300" />
  }
  


// const DataFetch = async () => {

//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cache`);
//   const data = await res.json();
//   if (!data) {
//     return <div>Loading</div>;
//   }
//   console.log("🚀 ~ DataFetch ~ data:", data);
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold">Data Fetch</h1>
//       <p className="text-lg">This is the Data Fetch page</p>
//       image: <img src={data.message} alt="dog" />
//     </div>
//   );
// };

// export default DataFetch;

// async function getData() {
//   // 接口每次调用都会返回一个随机的猫猫图片数据
//   const res = await fetch("https://dog.ceo/api/breeds/image/random");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Page() {
//   const data = await getData();

//   return <img src={data.message} width="300" />;
// }

