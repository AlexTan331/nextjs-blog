export default function handler(req, res) {
  console.log(req.body.text);
  const myText = req.body.text;
  res.status(200).json({ text: myText });
}
