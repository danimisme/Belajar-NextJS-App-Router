type DetailProductPageProps = {
  params: {
    slug: string;
  };
};

export default function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;
  console.log(params.slug);
  return (
    <div>
      <h1>Detail Product Page : {params.slug}</h1>
    </div>
  );
}
