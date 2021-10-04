import dbConnect from "../../../utils/dbConnect";
import Art from "../../../models/artModel";
dbConnect();


export default async function (req, res){
    const {
        query: {id},
        method
    } =req

    switch(method){
        case 'GET':
        try {
            const art = await Art.findById(id);
            if(!art){
                return res.status(400).json({success:false, msg:error.message})
            }

            res.status(200).json({success:true, data: art})

        } catch (error) {
            res.status(400).json({success: false, msg: error.message})
            
        }
        break;

        case 'PUT':
            try {
                const art = await Art.findByIdAndUpdate(id, req.body, {
                    new:true,
                    reValidators:true
                })

                if (!art){
                    return res.status(400).json({success:false})
                }

                res.status(200).json({success: true, data:art})
            } catch (error) {
                res.status(400).json({success:false, msg:error.message})
                
            }

            break;

            case 'DELETE':
                try {
                    const deletedArt = await Art.deleteOne({_id: id});

                    if(!deletedArt){

                        return res.status(400).json({success:false})
                    }

                    res.status(200).json({success:true, data:{}})
                } catch (error) {
                    res.status(400).json({success:false, msg: error.message})
                }

                break;
                default:
                    res.status(400).json({success:false})
                    break;
    }
}