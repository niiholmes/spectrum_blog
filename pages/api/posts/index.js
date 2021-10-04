import dbConnect from "../../../utils/dbConnect";
import Art from "../../../models/artModel";
dbConnect();



export default async function handler(req, res){
  const { method } = req;
  
  switch (method) {
    case 'GET':
      console.log('GET')
      try {
        const arts = await Art.find({});
        
  console.log(arts)
        res.status(200).json({ success: true, data: arts });
      } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
      }
      break;
    case "POST":
      try {
        const art = await Art.create(req.body);

        res.status(201).json({ success: true, data: art });
      } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
      }
      break;
      default:
        res.status(400).json({ success: false });
        break;

  }
}

