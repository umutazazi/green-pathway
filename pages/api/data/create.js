import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { kwh, gas, oil, date, co2 } = req.body;
    const newData = await prisma.data.create({
      data: {
        kwh,
        gas,
        oil,
        date,
        co2,
      },
    });
    res.json(newData);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
