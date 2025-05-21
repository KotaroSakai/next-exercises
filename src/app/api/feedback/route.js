export async function POST(request) {
  try {
    const body = await request.json();
    const {username, message} = body;

    if (!username || !message) {
      return new Response(
        JSON.stringify({error: "usernameとmessageの両方が必要です"}),
        {status: 400, headers: { "Content-Type": "application/json" }}
      );
    }

    return new Response(
      JSON.stringify({ message: "フィードバックを受け付けました"}),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error){
    return new Response(
      JSON.stringify({ error: "不正なリクエスト形式です" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}