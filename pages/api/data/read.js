import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await prisma.data.findMany();
    res.json(data);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
