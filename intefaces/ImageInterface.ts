import { Image, PrismaPromise } from "@prisma/client";
import { prisma } from "../lib/prisma";

class ImageInterface {
  static createImage({ filename }: { filename: string }): PrismaPromise<Image> {
    return prisma.image.create({
      data: {
        filename,
      },
    });
  }
}

export default ImageInterface;
