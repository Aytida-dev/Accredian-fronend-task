export default async function handler(req, res) {
  const targetUrl = `http://15.207.165.204${req.url}`; // Your WordPress site URL

  // Fetch data from your WordPress site (proxy request)
  const response = await fetch(targetUrl);

  // Get the response from the WordPress site
  const data = await response.text();

  // Return the proxied content to the browser
  res.status(200).send(data);
}
