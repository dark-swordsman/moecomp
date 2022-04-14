import { NextApiRequest, NextApiResponse } from "next";
import { ImageInterface } from "../../intefaces";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    /*
      pull multi-part form data
      send image file to database also in multi-part
      on response, create DB entry with:
        - file server image name
        - (soon) comp ID 
    */

    console.log(req.body);

    res.send("hi");

    // if (req.body.filename) {
    //   const imageData = await ImageInterface.createImage({
    //     filename: `${req.body.filename}`,
    //   });

    //   res.json({ data: imageData });
    // } else {
    //   res
    //     .status(400)
    //     .json({ error: true, message: "body is empty, please provide a value for 'filename'" });
    // }
    return;
  }

  res.status(405).json({
    message: "method not supported",
  });
}
