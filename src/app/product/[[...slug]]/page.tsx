type DetailProductPageProps = {
  params: {
    slug: string[];
  };
};

export default function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;
  console.log(params.slug);
  return (
    <div>
      <h1>Detail Product Page </h1>
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
