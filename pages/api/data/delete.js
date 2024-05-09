import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.body;
    const deletedData = await prisma.data.delete({
      where: { id },
    });
    res.json(deletedData);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
