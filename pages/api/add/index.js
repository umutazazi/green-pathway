import prisma from "../../../lib/prismadb";

// Optional fields in body: content
export default async function handle(req, res) {
  // Required fields in body:
  const { kwh, gas, oil, date, co2 } = req.body;
  const result = await prisma.data.create({
    data: {
      kwh: kwh,
      gas: gas,
      oil: oil,
      date: date,
      co2: co2,
    },
  });
  res.json(result);
}
