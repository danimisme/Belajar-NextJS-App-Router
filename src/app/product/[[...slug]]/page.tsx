type ProductPageProps = {
  params: {
    slug: string[];
  };
};

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>{params.slug ? "Detail Product" : "Product Page"} </h1>
      {params.slug && (
        <>
          <p>Category : {params.slug[0]}</p>
          <p>Gender : {params.slug[1]}</p>
          <p>Product : {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
