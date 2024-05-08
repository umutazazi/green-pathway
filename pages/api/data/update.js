import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { id, kwh, gas, oil, date, co2 } = req.body;
    const updatedData = await prisma.data.update({
      where: { id },
      data: {
        kwh,
        gas,
        oil,
        date,
        co2,
      },
    });
    res.json(updatedData);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
