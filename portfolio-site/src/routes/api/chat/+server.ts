export async function POST({ request }) {
    const { userMessage } = await request.json();

    await new Promise(resolve => setTimeout(resolve, 2000));


    return new Response(JSON.stringify({ assistantResponse: userMessage }), {
        headers: { 'Content-Type': 'application/json' }
    });
}