export default async function Blog ({params}) {
  const {id} = await params;

  return (
    <div>
      <h1>ブログ詳細ページ</h1>
      <p>記事ID: {id}</p>
    </div>
  );

}