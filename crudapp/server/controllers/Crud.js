import userData from '../models/Data.js'

export const createData = async(req, res) => {

    try {

        const email = await userData.findOne({ email: req.body.email });
        if(email) return res.status(400).json({code:'me400',msg:'Email already exists'});

          const data = new userData({
            name : req.body.name,
            email : req.body.email,
            mobile : req.body.mobile
          });

          const user = await data.save();
     
          return res.status(200).json({msg:"User saved successfully"})

    }
    catch (err) {
       return res.status(500).send(err);
    }

    
}

export const getData = async(req, res) => {

    try {

           const allData = await userData.find();
           res.json(allData);
    }
    catch(err) {
        return res.status(500).send(err);
    }

}

export const editData = async(req, res) => {
    
    try {
        const Data = await userData.findById(req.params.id);
        const updateData = await userData.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
        return res.status(200).json({msg: 'Data updated successfully'});
 }
 catch(err) {
     return res.status(500).json(err);
 }
}

export const deleteData = async(req, res) => {
    const ids = req.body.ids;
    try {
      const result = await userData.deleteMany({ _id: { $in: ids } });
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  };